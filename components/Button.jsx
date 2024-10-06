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
  type = "default",
}) {
  if (type == "default") {
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
  } else if (type == "small") {
    return (
      <TouchableOpacity
        className={` min-h-[48px] mt-3 items-start ${style}`}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text
          className={`text-base text-white bg-accent  rounded-xl px-4 py-3 text-center font-Sora-SemiBold capitalize my-auto ${titleStyle}`}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
