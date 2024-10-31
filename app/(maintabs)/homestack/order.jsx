import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import AddToCartCard from "../../../components/AddToCartCard";
import Discount from "../../../components/Discount";
import { router, useLocalSearchParams } from "expo-router";
import getDetails from "../../../hooks/GetDetails";
import DeliveryAddress from "../../../components/DeliveryAddress";
import productData from "../../../data.json";
import CustomHeader from "../../../components/Navigation/CustomHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Wallet from "../../../components/wallet/Wallet";
import { getProducts } from "../../../api/ApiIndex";
import ErrorPage from "../../../components/common/ErrorPage";
import PageLoader from "../../../components/common/PageLoader";
import { FadeIn, FadeInDown } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import DeliveryOt from "../../../assets/svg/outline/DeliveryOt";
import Delivery from "../../../assets/svg/solid/Delivery";
import PackUpOt from "../../../assets/svg/outline/PackUpOt";
import PackUp from "../../../assets/svg/solid/PackUp";
const getProductDetails = async () => {
  try {
    const productDetails = await AsyncStorage.getItem("productDetails");
    // console.log(productDetails);
    return productDetails ? JSON.parse(productDetails) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
export default function Order() {
  const { id, wishlistItem } = useLocalSearchParams();
  console.log(wishlistItem);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderType, setOrderType] = useState(1);
  const [total, setTotal] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [cartProductData, setCartProductData] = useState([]);
  const getWishlistDetails = async () => {
    const res = await getProductDetails();
    const filterCartItems = res.filter((data) => {
      if (data.cart == true) {
        return data;
      }
    });
    const filteredProducts = [];
    productData.filter((product) => {
      filterCartItems.some((data) => {
        if (data.id == product.id) {
          filteredProducts.push(product);
        }
      });
    });
    // console.log("final", filteredProducts);

    // console.log(filterCartItems);
    setCartData(filterCartItems);
    setCartProductData(filteredProducts);
  };
  useEffect(() => {
    getWishlistDetails();
    getAllProduct();
  }, []);
  const getAllProduct = async () => {
    try {
      const res = await getProducts(id);
      console.log("detail res", res.status);
      if (res.status === 200) {
        setLoading(false);
        console.log("detail res", res?.data[0]);
        setData(res?.data);
      }
    } catch (error) {
      console.log(error?.message);
      setError(error?.message);
      setLoading(false);
    }
  };
  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorPage />;
  }
  function calculateTotal(price, count, type = "add") {
    const total = price;
    if (type === "add") {
      setTotal((prevTotal) => prevTotal + total);
    } else if (type === "minus") {
      setTotal((prevTotal) => prevTotal - total);
    }
  }
  const getOrderDetails = () => {
    const payload = {
      TotalAmount: total,
      orderType: orderType,
      quantity: 2,
      productId: [1, 5],
      dAddress: "chennai",
    };
    console.log(payload);
  };
  return (
    <View className="flex-1 bg-background">
      <CustomHeader title={"Order"} navigation={router.back} />
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <Animated.View
          entering={FadeInDown.delay(200).duration(300)}
          className="px-6 mt-6"
        >
          <View className="bg-gray-200 p-1 flex-row space-x-1 rounded-xl min-h-[44px]">
            <TouchableOpacity
              onPress={() => setOrderType(1)}
              activeOpacity={0.7}
              className={` bg-transparent text-black rounded-lg justify-center grow min-h-[40px] ${
                orderType === 1 ? "bg-accent" : null
              }`}
            >
              <View className="flex-row space-x-2 items-center mx-auto">
                <Text
                  className={`text-black text-base font-Sora-Regular text-center ${
                    orderType === 1 ? "text-white font-Sora-SemiBold" : null
                  }`}
                >
                  Deliver
                </Text>
                {orderType === 1 ? <Delivery /> : <DeliveryOt />}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setOrderType(2)}
              activeOpacity={0.7}
              className={`bg-transparent text-black rounded-lg justify-center grow min-h-[40px] ${
                orderType === 2 ? "bg-accent" : null
              }`}
            >
              <View className="flex-row space-x-2 items-center mx-auto">
                <Text
                  className={`text-black text-base font-Sora-Regular text-center ${
                    orderType === 2 ? "text-white font-Sora-SemiBold" : null
                  }`}
                >
                  Pick Up
                </Text>
                {orderType === 2 ? <PackUp /> : <PackUpOt />}
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
        {/* delivery address  */}
        <Animated.View
          entering={FadeInDown.delay(250).duration(300)}
          className="px-6 mt-6"
        >
          <DeliveryAddress />
        </Animated.View>
        {/* add to cart card  */}
        {wishlistItem ? (
          <Animated.View
            entering={FadeInDown.delay(300).duration(200)}
            className="px-6"
          >
            {cartProductData?.map((data, i) => (
              <AddToCartCard
                data={data}
                calculateTotal={calculateTotal}
                key={data?.id}
                count={cartData}
              />
            ))}
          </Animated.View>
        ) : (
          <Animated.View
            entering={FadeInDown.delay(300).duration(300)}
            className="px-6"
          >
            {data?.map((data, i) => (
              <AddToCartCard
                data={data}
                calculateTotal={calculateTotal}
                key={data?.id}
                count={cartData[i]}
              />
            ))}
          </Animated.View>
        )}

        <View className="w-full h-1 bg-secondary my-4"></View>
        {/* discount and payment summary  */}
        <Animated.View
          entering={FadeInDown.delay(300).duration(300)}
          className="px-6 my-6 mb-10"
        >
          <Discount />
          <View className="mt-6">
            <Text className="font-Sora-SemiBold text-base text-black mb-4">
              Payment Summary
            </Text>
            <View>
              <View className="flex-row  justify-between items-center mb-2">
                <Text className="font-Sora-Regular text-sm tracking-wide text-black">
                  Price
                </Text>
                <Text className="font-Sora-SemiBold text-sm text-black text-right">
                  $ {total.toFixed(2)}
                </Text>
              </View>
              <View className="flex-row  justify-between items-center">
                <Text className="font-Sora-Regular text-sm tracking-wide text-black">
                  Delivery Fee
                </Text>
                <View className="flex-row space-x-2">
                  <Text className="font-Sora-Regular text-sm text-black text-right line-through">
                    ($1.5)
                  </Text>
                  <Text className="font-Sora-SemiBold text-sm text-black text-right">
                    ${" "}
                    {(data[0]?.price - 8).toFixed(2) == NaN
                      ? (data[0]?.price - 8).toFixed(2)
                      : "1.02"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
      {/* bottom sticky */}
      <Animated.View
        entering={FadeInDown.delay(250).duration(300)}
        className="bg-white px-6 py-6  min-h-[108px]  rounded-t-2xl"
      >
        <Wallet placeOrder={getOrderDetails} />
      </Animated.View>
    </View>
  );
}
