import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
const clickMe = () => {
  // alert("click me");
};
export default function Button({
  title = "get started",
  onPress = clickMe,
  style,
  titleStyle,
  isLoading,
}) {
  return (
    <TouchableOpacity
      className={`bg-accent min-h-[58px] mt-6 rounded-2xl items-center ${style}`}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        className={`text-base text-white text-center font-Sora-SemiBold capitalize my-auto ${titleStyle}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
