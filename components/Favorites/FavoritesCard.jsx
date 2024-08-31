import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import FavoritesCta from "./FavoritesCta";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
const data = {
  _id: "6424338959f9f6fdd657d2e3",
  id: 3,
  name: "Rainforest Rhapsody",
  description:
    "An earthy and complex coffee with notes of toasted nuts and caramel. Sustainably grown in the rainforests of South America.",
  price: 14.99,
  region: "South America",
  weight: 500,
  flavor_profile: ["Citrus"],
  grind_option: ["Whole Bean", "Cafetiere", "Filter", "Espresso"],
  roast_level: 2,
  image_url: "https://iili.io/H8Y7kTN.webp",
};
const toDetails = () => {
  router.push({
    pathname: "homestack/details",
    params: {
      id: data?.id,
    },
  });
};

export default function FavoritesCard() {
  return (
    <Pressable
      className="bg-white rounded-[18px] p-1 flex-row"
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={toDetails}
        className="bg-gray-100 max-h-[140px] w-1/3 rounded-l-xl"
      >
        <Image
          src={data?.image_url}
          className="w-full h-full rounded-l-xl object-cover block"
        />
        <View className="bg-accent w-5 h-4 absolute top-0 right-1 justify-center items-center">
          <AntDesign name="heart" size={10} color="#f3f4f6" className="z-10" />
          <View
            className="bg-accent w-[15px] h-[15px] rounded-t-sm rounded-b-[1px] absolute -bottom-2 -z-10 "
            style={{ transform: [{ rotate: "45deg" }] }}
          ></View>
        </View>
      </TouchableOpacity>
      <View className="p-2.5 py-1 grow bg-gray-50/50 shrink rounded-r-2xl">
        {/* title  */}
        <Text
          className="capitalize text-base font-Sora-SemiBold text-black tracking-wide pe-0"
          numberOfLines={1}
        >
          {data?.name}
        </Text>
        {/* weight & Specific  */}
        <View className="flex-row items-center space-x-2 mt-1">
          <Text
            className="capitalize text-xs font-Sora-Regular tracking-wider text-gray-400 border-r border-gray-200"
            style={{ paddingEnd: 8 }}
          >
            {data?.flavor_profile[0]}
          </Text>
          <Text className=" text-xs font-Sora-Regular tracking-wider text-gray-400">
            {data?.weight}g
          </Text>
        </View>
        {/* Ratings  */}
        <View className="flex-row space-x-px mt-1 items-center">
          <Entypo name="star" size={12} color="#FBBE21" />
          <Entypo name="star" size={12} color="#FBBE21" />
          <Entypo name="star" size={12} color="#FBBE21" />
          <Entypo name="star" size={12} color="#FBBE21" />
          <Text
            className="text-[10px] font-Sora-Regular text-black"
            style={{ marginStart: 6 }}
          >
            1,523
          </Text>
        </View>
        {/* Price  */}
        <Text
          className="capitalize text-lg font-Sora-SemiBold text-black tracking-wide mt-px pe-0"
          numberOfLines={1}
        >
          $ {data?.price}
        </Text>
        {/* Add to cart and remove wishlist button  */}
        <View className="mt-auto">
          <FavoritesCta data={data} />
        </View>
      </View>
    </Pressable>
  );
}
