import { View, Text, Image } from "react-native";
import React from "react";
import { FadeIn, FadeInDown } from "react-native-reanimated";
import Animated from "react-native-reanimated";

const OrderHistory = () => {
  return (
    <Animated.View
      entering={FadeInDown.delay(300).duration(300)}
      className="flex-1 justify-center items-center px-4"
    >
      <Image
        source={require("../../assets/images/orderhistory.png")}
        className="object-contain w-14 h-14"
      />
      <Animated.View entering={FadeInDown.delay(350).duration(300)}>
        <Text className="text-black font-Sora-Light text-sm text-center">
          Start ordering to see your order {"\n"} history here! 🪹
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

export default OrderHistory;
