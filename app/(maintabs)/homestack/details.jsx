import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
import Loader from "../../../components/Loader";
import getDetails from "../../../hooks/GetDetails";
import { StatusBar } from "expo-status-bar";
import CustomHeader from "../../../components/Navigation/CustomHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const updateWishlistStatus = async (product) => {
  console.log("product value", product);
  if (product == null || undefined) {
    return null;
  }
  try {
    const productDetails = await AsyncStorage.getItem("productDetails");
    let productArray = productDetails ? JSON.parse(productDetails) : [];
    const productIndex = productArray.findIndex(
      (item) => item.id === product.id
    );
    if (productIndex !== -1) {
      productArray[productIndex].wishlist = product.wishlist;
    } else {
      productArray.push(product);
    }
    await AsyncStorage.setItem("productDetails", JSON.stringify(productArray));
    console.log("updated successfully.");
  } catch (error) {
    console.error(error);
  }
};
const getProductDetails = async () => {
  try {
    const productDetails = await AsyncStorage.getItem("productDetails");
    return productDetails ? JSON.parse(productDetails) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
const deleteProductDetails = async () => {
  try {
    await AsyncStorage.removeItem("productDetails");
    console.log("Product details deleted successfully.");
  } catch (error) {
    console.error(error);
  }
};
export default function Details() {
  const { id } = useLocalSearchParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [loader, setLoader] = useState(false);
  const [wishListStatus, setWishListStatus] = useState(null);
  const [size, setSize] = useState("M");
  useEffect(() => {
    const getDetails = async () => {
      const res = await getProductDetails();
      const filterData = res.filter((data) => data?.id == id);
      console.log("filterData", filterData);
      if (filterData.length > 0) {
        console.log("set filter data");
        setWishListStatus(filterData[0]);
      } else {
        console.log("set new product data");
        setWishListStatus({
          id: id,
          wishlist: false,
          cart: false,
          count: 1,
        });
      }
    };
    getDetails();
    // deleteProductDetails();
  }, []);
  useEffect(() => {
    updateWishlistStatus(wishListStatus);
  }, [wishListStatus]);

  const handleWishListStatus = async () => {
    setWishListStatus((preVal) => ({
      ...preVal,
      wishlist: !preVal.wishlist,
    }));
  };
  const handleTextLayout = (e) => {
    if (e.nativeEvent.lines.length > 2) {
      setShowMore(true);
    }
  };
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  const handleOrder = () => {
    setLoader(true);
    setTimeout(() => {
      router.push({
        pathname: "homestack/order",
        params: {
          id: data[0]?.id,
        },
      });
      setLoader(false);
    }, 200);
  };
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

  return (
    <View className="flex-1 bg-background ">
      <CustomHeader
        title={"Details"}
        navigation={router.back}
        headerRight={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleWishListStatus}
            className="w-10 h-10 rounded-full items-center justify-center"
          >
            <AntDesign
              name={wishListStatus?.wishlist ? "heart" : "hearto"}
              size={22}
              color={wishListStatus?.wishlist ? "#ed5151" : "#313131"}
            />
          </TouchableOpacity>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false} className="">
        {/* banner  */}
        <View className="bg-gray-300  rounded-2xl h-52 m-6">
          <Image
            // src="https://images.unsplash.com/photo-1723962845257-d3bad7825001?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src={data[0]?.image_url}
            className="w-full h-full object-cover rounded-2xl"
          />
        </View>
        {/* product name & details  */}
        <View className="px-6">
          <View className="flex-row space-x-2 ">
            <View className="shrink grow">
              <Text
                className="capitalize text-xl font-Sora-SemiBold text-black tracking-wide mb-1 pe-0"
                numberOfLines={2}
              >
                {data[0]?.name}
              </Text>
              <View className="flex-row items-center space-x-2">
                <Text
                  className="capitalize text-xs font-Sora-Regular tracking-wider text-gray-400 border-r border-gray-200"
                  style={{ paddingEnd: 8 }}
                >
                  {data[0]?.flavor_profile[0]}
                </Text>
                <Text className=" text-xs font-Sora-Regular tracking-wider text-gray-400">
                  {data[0]?.weight}g
                </Text>
              </View>
            </View>
            <View className="mt-0">
              <View className="flex-row min-w-min items-center">
                <AntDesign name="star" size={20} color="#FBBE21" />
                <Text className="font-Sora-SemiBold text-base text-black mx-1">
                  4.8
                </Text>
                <Text className="font-Sora-Regular text-xs text-gray-400">
                  (458)
                </Text>
              </View>
            </View>
          </View>
          <View className="mt-3.5 flex-row space-x-2 items-start">
            <View className="w-11 h-11 bg-gray-200/50 rounded-xl justify-center items-center">
              <Image
                source={require("../../../assets/icons/details/bike.png")}
                className="object-contain w-5 h-5"
              />
            </View>
            <View className="w-11 h-11 bg-gray-200/50 rounded-xl justify-center items-center">
              <Image
                source={require("../../../assets/icons/details/bean.png")}
                className="object-contain w-5 h-5"
              />
            </View>
            <View className="w-11 h-11 bg-gray-200/50 rounded-xl justify-center items-center">
              <Image
                source={require("../../../assets/icons/details/pack.png")}
                className="object-contain w-5 h-5"
              />
            </View>
          </View>
          <View className="w-[92%] mx-auto my-4 h-px bg-offgray"></View>
        </View>
        {/* Description */}
        <View className="px-6">
          <Text className="text-base font-Sora-SemiBold text-black mb-2">
            Description
          </Text>
          <Text
            className="text-sm font-Sora-light tracking-wider text-gray-400"
            numberOfLines={isExpanded ? undefined : 2}
            onTextLayout={handleTextLayout}
          >
            {data[0]?.description}
          </Text>
          {showMore ? (
            <TouchableOpacity
              onPress={toggleText}
              className="max-w-[100px]"
              activeOpacity={0.7}
            >
              <Text className="text-accent font-Sora-SemiBold text-sm max-w-fit">
                {isExpanded ? "Read Less" : "Read More"}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
        {/* size  */}
        <View className="px-6 mt-6">
          <Text className="text-base font-Sora-SemiBold text-black mb-2">
            Size
          </Text>
          <View className="mt-2 flex-row space-x-3">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setSize("S")}
              className={`grow rounded-xl items-center justify-center min-h-[41px] border border-offgray ${
                size === "S"
                  ? "bg-secondary text-accent border-accent"
                  : "text-black bg-white"
              }`}
            >
              <Text className="font-Sora-Regular text-sm text-black">S</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setSize("M")}
              className={`grow rounded-xl items-center justify-center min-h-[41px] border border-offgray ${
                size === "M"
                  ? "bg-secondary text-accent border-accent"
                  : "text-black bg-white"
              }`}
            >
              <Text className="font-Sora-Regular text-sm text-black">M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setSize("L")}
              className={`grow rounded-xl items-center justify-center min-h-[41px] border border-offgray ${
                size === "L"
                  ? "bg-secondary text-accent border-accent"
                  : "text-black bg-white"
              }`}
            >
              <Text className="font-Sora-Regular text-sm text-black">L</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* grind options  */}
        <View className="px-6 mt-6">
          <Text className="text-base font-Sora-SemiBold text-black mb-2 capitalize">
            grind option
          </Text>

          <View className="space-y-1">
            {data[0]?.grind_option?.map((data, i) => (
              <Text
                className="text-sm font-Sora-light tracking-wider text-black capitalize  rounded-full "
                key={i}
              >
                <Text className="w-1">{"\u2022"}</Text> {data}
              </Text>
            ))}
          </View>
        </View>
        <View className="my-4"></View>
      </ScrollView>
      {/* bottom sticky */}
      <View className="bg-white px-6 min-h-[108px] flex-row items-center mt-auto space-x-10">
        <View>
          <Text className="text-sm font-Sora-Regular text-gray-400 capitalize tracking-wider">
            price
          </Text>
          <Text className="text-xl font-Sora-SemiBold text-accent">
            $ {data[0]?.price}
          </Text>
        </View>
        <View className="grow">
          <Button
            title={loader ? <Loader /> : "Buy Now"}
            style={"my-auto"}
            onPress={handleOrder}
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}
