import { View, Text, Image } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import CartCta from "./CartCta";
import DeleteCartItem from "./DeleteCartItem";
import { Swipeable } from "react-native-gesture-handler";
import { FadeIn, FadeInDown } from "react-native-reanimated";
import Animated from "react-native-reanimated";
export default function CartCard({
  data,
  calculateTotal,
  count,
  updateCartStatus,
}) {
  return (
    <Animated.View entering={FadeInDown.delay(200).duration(300)}
      className="border-b border-gray-300 flex-row bg-sky-4 00 shrink"
      key={data?.id}
    >
      <View className="w-1/3 grow bg-gray-100 p-2">
        <Image
          src={data?.image_url}
          className="w-full h-full  object-contain block"
        />
      </View>
      <View className="grow p-2 py-4 shrink">
        {/* title  */}
        <DeleteCartItem data={data} updateCartStatus={updateCartStatus} />
        {/* description  */}
        <Text
          className="capitalize text-xs mt-1 font-Sora-Regular text-black tracking-wide pe-0 -z-10"
          numberOfLines={2}
        >
          {data?.description}
        </Text>
        {/* weight & Specific  */}
        <View className="flex-row items-center space-x-2 mt-1.5">
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
        <View className="flex-row space-x-2 items-center">
          <Text
            className="capitalize text-lg font-Sora-SemiBold text-black tracking-wide mt-px pe-0"
            numberOfLines={1}
          >
            $ {data?.price}
          </Text>
          <Text className="text-gray-700 line-through font-Sora-Regular ">
            $ 3.52
          </Text>
        </View>
        <CartCta
          data={data}
          calculateTotal={calculateTotal}
          countDetails={count}
        />
      </View>
    </Animated.View>
  );
}
