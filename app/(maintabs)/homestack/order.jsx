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
  }, []);
  const { data, loading, error } = getDetails(
    `https://fake-coffee-api.vercel.app/api/${id}`
  );
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#c67c4e" />
      </View>
    );
  }
  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  function calculateTotal(price, count, type = "add") {
    const total = price;
    if (type === "add") {
      setTotal((prevTotal) => prevTotal + total);
    } else if (type === "minus") {
      setTotal((prevTotal) => prevTotal - total);
    }
  }
const getOrderDetails = ()=>{
  const payload ={
    TotalAmount:total,
    orderType:orderType,
    quantity:2,
    productId:[1,5],
    dAddress:"chennai"
  }
  console.log(payload);
  
}
  return (
    <View className="flex-1 bg-background">
      <CustomHeader title={"Order"} navigation={router.back} />
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className="px-6 mt-6">
          <View className="bg-gray-200 p-1 flex-row space-x-1 rounded-lg min-h-[44px]">
            <TouchableOpacity
              onPress={() => setOrderType(1)}
              activeOpacity={0.7}
              className={` bg-transparent text-black rounded-lg justify-center grow min-h-[35px] ${
                orderType === 1 ? "bg-accent" : null
              }`}
            >
              <Text
                className={`text-black text-base font-Sora-Regular text-center ${
                  orderType === 1 ? "text-white font-Sora-SemiBold" : null
                }`}
              >
                Deliver
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setOrderType(2)}
              activeOpacity={0.7}
              className={`bg-transparent text-black rounded-lg justify-center grow min-h-[35px] ${
                orderType === 2 ? "bg-accent" : null
              }`}
            >
              <Text
                className={`text-black text-base font-Sora-Regular text-center ${
                  orderType === 2 ? "text-white font-Sora-SemiBold" : null
                }`}
              >
                Pick Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* delivery address  */}
        <View className="px-6 mt-6">
          <DeliveryAddress />
        </View>
        {/* add to cart card  */}
        {wishlistItem ? (
          <View className="px-6">
            {cartProductData?.map((data, i) => (
              <AddToCartCard
                data={data}
                calculateTotal={calculateTotal}
                key={data?.id}
                count={cartData}
              />
            ))}
          </View>
        ) : (
          <View className="px-6">
            {data?.map((data, i) => (
              <AddToCartCard
                data={data}
                calculateTotal={calculateTotal}
                key={data?.id}
                count={cartData[i]}
              />
            ))}
          </View>
        )}

        <View className="w-full h-1 bg-secondary my-4"></View>
        {/* discount and payment summary  */}
        <View className="px-6 my-6 mb-10">
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
        </View>
      </ScrollView>
      {/* bottom sticky */}
      <View className="bg-white px-6 py-6  min-h-[108px]  rounded-t-2xl">
        <Wallet  placeOrder={getOrderDetails}/>
      </View>
    </View>
  );
}
