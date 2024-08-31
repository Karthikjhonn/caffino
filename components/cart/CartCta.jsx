import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
export default function CartCta({ data, calculateTotal }) {
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
    <View className="flex-row items-center flex-wrap" key={data?.id}>
      <View>
        <View className="flex-row space-x-1 items-center">
          <View className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-0.5"></View>
          <Text className="font-Sora-Medium text-[10px] text-emerald-500">
            In Stock
          </Text>
        </View>
        <Text className="font-Sora-Medium text-[9px] text-black">
          No Return & Exchange
        </Text>
      </View>
      <View
        className="inline-flex space-x-2 flex-row items-center"
        style={{ marginLeft: "auto" }}
      >
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
  );
}
