import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Button from "../../../components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import Loader from "../../../components/Loader";
export default function Details() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [loader, setLoader] = useState(false);
  const [size, setSize] = useState("M");

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
      router.push("homestack/order");
      setLoader(false);
    }, 2000);
  };
  return (
    <View className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false} className="">
        {/* banner  */}
        <View className="bg-gray-300 rounded-2xl h-52 m-6">
          <Image
            src="https://images.unsplash.com/photo-1723962845257-d3bad7825001?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover rounded-2xl"
          />
        </View>
        {/* product name & details  */}
        <View className="px-6">
          <View className="flex-row">
            <View className="shrink grow">
              <Text
                className="capitalize text-xl font-Sora-SemiBold text-black tracking-wide mb-2 pe-0"
                numberOfLines={2}
              >
                Caffe Mocha jhqiug quigq uida ug
              </Text>
              <Text className="capitalize text-xs font-Sora-Regular tracking-wider text-gray-400">
                Ice/Hot
              </Text>
            </View>
            <View className="grow">
              <View className="ms-auto space-x-2 flex-row flex-1 items-start ">
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
            </View>
          </View>
          <View className="mt-2">
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
          <View className="w-[92%] mx-auto my-4 h-px bg-offgray "></View>
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
            A cappuccino is an approximately 150 ml (5 oz) Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Officiis, dignissimos.
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
        <View className="px-6 mt-6 mb-14">
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
      </ScrollView>
      {/* bottom sticky */}
      <View className="bg-white px-6 min-h-[118px] flex-row items-center space-x-10">
        <View>
          <Text className="text-sm font-Sora-Regular text-gray-400 capitalize tracking-wider">
            price
          </Text>
          <Text className="text-xl font-Sora-SemiBold text-accent">$ 452</Text>
        </View>
        <View className="grow">
          <Button
            title={loader ? <Loader /> : "Buy Now"}
            style={"my-auto"}
            onPress={handleOrder}
          />
        </View>
      </View>
    </View>
  );
}
