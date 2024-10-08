import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
const screenWidth = Dimensions.get("window").width;

export default function Card({ data, id }) {
  // console.log("card data",data);

  function detailScreen() {
    router.push({
      pathname: "/homestack/details",
      params: {
        id: data?.item.id,
      },
    });
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={detailScreen}
      className="bg-white  rounded-2xl p-2 pb-3"
      style={{ width: (screenWidth - 48) / 2 - 7 }}
      key={id}
    >
      <View className="bg-gray-50 rounded-[14px] w-full h-[128px] overflow-hidden">
        <Image
          src={data?.item?.image_url}
          className="w-full h-full rounded-[14px] object-cover"
        />
        <View className="bg-black/[30%] p-2 px-3 absolute top-0 right-0 rounded-bl-3xl  h-7">
          <View className="flex-row space-x-1 items-center">
            <AntDesign name="star" size={12} color="#FBBE21" />
            <Text className="font-Sora-SemiBold text-[8px] text-white ">
              4.5
            </Text>
          </View>
        </View>
      </View>
      <View className="mt-2">
        <Text
          className="font-Sora-SemiBold text-base text-black capitalize mb-px"
          numberOfLines={1}
        >
          {data?.item?.name}
        </Text>
        <Text
          className="font-Sora-Regular text-xs text-gray-400 capitalize"
          numberOfLines={1}
        >
          {data?.item?.description}
        </Text>
      </View>
      <View className="mt-2 flex-row items-center justify-between">
        <Text className="font-Sora-SemiBold text-lg text-black capitalize">
          $ {data?.item?.price}
        </Text>
        <View className="bg-accent justify-center items-center rounded-lg w-8 h-8 ">
          <Octicons name="plus" size={14} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
