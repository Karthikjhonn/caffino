import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";

export default function AddToCartCard({ data, calculateTotal }) {
  const [cartValue, setCartValue] = useState({
    count: 1,
    type: "add",
  });
  const minusCartValue = () => {
    if (cartValue.count > 1) {
      setCartValue((prevValue) => ({
        count: prevValue.count - 1,
        type: "minus",
      }));
    }
  };
  const addCartValue = () => {
    if (cartValue.count < 10) {
      setCartValue((prevValue) => ({
        count: prevValue.count + 1,
        type: "add",
      }));
    }
  };
  const formatCartValue = (value) => {
    return value.toString().padStart(2, "0");
  };

  useEffect(() => {    
    calculateTotal(data?.price, cartValue.count, (type = cartValue.type));
  }, [cartValue]);

  return (
    <View className="flex-row items-center justify-between mb-3">
      <View className="flex-row items-start space-x-2 shrink">
        <View className="w-14 h-14 rounded-lg bg-gray-200">
          <Image
            // src="https://images.unsplash.com/photo-1723962845257-d3bad7825001?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src={data?.image_url}
            className="w-full h-full rounded-lg"
          />
        </View>
        <View className="shrink">
          <Text
            className="text-black font-Sora-SemiBold text-base tracking-wide"
            numberOfLines={1}
          >
            {data?.name}
          </Text>
          <Text
            className="text-gray-400 font-Sora-Regular text-xs tracking-wide mt-px"
            numberOfLines={2}
          >
            {data?.description}
          </Text>
        </View>
      </View>
      <View className="grow px-1 items-end">
        <View className="inline-flex space-x-2 flex-row items-center">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={minusCartValue}
            className="w-8 h-8 justify-center items-center bg-white rounded-full border border-gray-200"
          >
            <Feather name="minus" size={20} color="black" />
          </TouchableOpacity>
          <Text className="font-Sora-SemiBold text-sm min-w-[18px]">
            {formatCartValue(cartValue.count)}
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
