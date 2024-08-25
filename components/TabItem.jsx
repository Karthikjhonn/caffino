import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function TabItem({ item, id, onPress, isSelected = null }) {
  return (
    <TouchableOpacity
      className={`rounded-md w-fit h-[29px] flex-row items-center px-2 py-1 ${
        isSelected ? "bg-accent" : "bg-gray-200/25"
      }`}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        className={`text-sm  capitalize  inline-block ${
          isSelected
            ? "font-Sora-SemiBold text-white"
            : "font-Sora-Regular text-black"
        }`}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
}
