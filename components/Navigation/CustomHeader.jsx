import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function CustomHeader({ navigation, options, title, headerRight }) {
  return (
    <View className="bg-background px-6 pt-14 pb-2 min-h-[80px]  flex-row items-center justify-between">
      <View className="rounded-full overflow-hidden">
        <Pressable
          android_ripple={{ color: "#e5e7eb" }}
          onPress={() => {
            navigation();
          }}
          className="w-10 h-10 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={22} color="black" />
        </Pressable>
      </View>
      <Text
        className="text-base font-Sora-SemiBold text-black capitalize inline-flex max-w-[50%]"
        numberOfLines={1}
      >
        {title}
      </Text>
      {headerRight ? headerRight : <View className="w-10 h-10"></View>}
    </View>
  );
}

export default CustomHeader;
