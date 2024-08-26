import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

export default function AddToCartCard() {
  const [cartValue, setCartValue] = useState(1);
  const addCartValue = () => {
    if (cartValue < 10) {
      setCartValue((prevValue) => prevValue + 1);
    }
  };

  const minusCartValue = () => {
    if (cartValue > 1) {
      setCartValue((prevValue) => prevValue - 1);
    }
  };
  const formatCartValue = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <View className="flex-row items-center justify-between mb-3">
      <View className="flex-row items-center space-x-2 shrink">
        <View className="w-14 h-14 rounded-lg bg-gray-200">
          <Image src="https://images.unsplash.com/photo-1723962845257-d3bad7825001?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full rounded-lg" />
        </View>
        <View className="shrink">
          <Text
            className="text-black font-Sora-SemiBold text-base tracking-wide"
            numberOfLines={1}
          >
            Caffe Mocha Lorem ipsum dolor sit amet.
          </Text>
          <Text
            className="text-gray-400 font-Sora-Regular text-xs tracking-wide mt-px"
            numberOfLines={1}
          >
            AddToCartCard Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          </Text>
        </View>
      </View>
      <View className="grow px-1">
        <View className="inline-flex space-x-2 flex-row items-center">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={minusCartValue}
            className="w-8 h-8 justify-center items-center bg-white rounded-full border border-gray-200"
          >
            <Feather name="minus" size={20} color="black" />
          </TouchableOpacity>
          <Text className="font-Sora-SemiBold text-sm min-w-[18px]">
            {formatCartValue(cartValue)}
          </Text>
          <TouchableOpacity
            onPress={addCartValue}
            activeOpacity={0.7}
            className="w-8 h-8 justify-center items-center bg-white rounded-full border border-gray-200"
          >
            <Feather name="plus" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
