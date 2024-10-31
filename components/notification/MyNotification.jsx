import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Button from "../Button";
import { FadeIn, FadeInDown } from "react-native-reanimated";
import Animated from "react-native-reanimated";
const MyNotification = () => {
  const data = [
    {
      _id: "6424338559f9f6fdd657d2e2",
      id: 2,
      name: "Golden Sunrise",
      description:
        "A smooth and bright coffee with a citrusy kick. Sourced from the rolling hills of Africa.",
      price: 10.99,
      region: "Africa",
      weight: 500,
      flavor_profile: ["Citrus"],
      grind_option: ["Whole Bean", "Cafetiere", "Filter", "Espresso"],
      roast_level: 2,
      image_url: "https://iili.io/H8Y7WEg.webp",
    },
    {
      _id: "6424353f59f9f6fdd657d2ee",
      id: 13,
      name: "Coconut Kiss",
      description:
        "A light and refreshing coffee from the shores of the Asia Pacific, with a subtle coconut flavor.",
      price: 9.99,
      region: "Asia Pacific",
      weight: 500,
      roast_level: 2,
      flavor_profile: ["Coconut"],
      grind_option: ["Whole Bean", "Filter"],
      image_url: "https://iili.io/H8Y7GQ1.webp",
    },
  ];
  return (
    <ScrollView className="py-6 pt-0">
      <Animated.View
        entering={FadeIn.delay(300).duration(300)}
        className="items-center my-3"
      >
        <Text className="text-[10px] font-Sora-Regular text-gray-400 capitalize bg-offgray p-1 py-0.5 rounded text-center">
          Today
        </Text>
      </Animated.View>
      <Animated.View
      entering={FadeInDown.delay(300).duration(300)} className="bg-emerald-50 p-4">
        <View className="w-32 h-32 ">
          <Image
            src={data[0]?.image_url}
            className="w-full h-full object-cover"
          />
        </View>
        <Text className="text-2xl text-emerald-700 font-Sora-SemiBold capitalize">
          Sale upto 30%
        </Text>
        <Text className="text-sm text-emerald-700 font-Sora-Light mt-0.5 capitalize ">
          <Text className="font-Sora-Medium">Hurry! </Text>
          The perfect brew is just a sip away.
        </Text>
        <Button
          style={"mt-2"}
          title="Shop Now"
          type="small"
          titleStyle={"text-xs tracking-wider bg-yellow-500 rounded-lg px-5"}
        />
        <Text className="text-[10px] font-Sora-Regular text-gray-400 uppercase text-right">
          <View className="w-1.5 h-1.5 rounded-full bg-gray-300/50 "></View>{" "}
          05.23 AM
        </Text>
      </Animated.View>
    </ScrollView>
  );
};

export default MyNotification;
