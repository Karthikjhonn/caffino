import { View, Text, Image } from "react-native";
import React from "react";

const OrderHistory = () => {
  return (
    <View className="flex-1 justify-center items-center px-4">
      <Image source={require("../../assets/images/orderhistory.png")} className="object-contain w-14 h-14" />
      <Text className="text-black font-Sora-Light text-sm text-center">
        Start ordering to see your order {'\n'} history here! 🪹
      </Text>
    </View>
  );
};

export default OrderHistory;
