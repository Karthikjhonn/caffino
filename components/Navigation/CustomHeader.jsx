import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function CustomHeader({ navigation, options, title, headerRight }) {
  return (
    <View className="bg-background px-6 pt-14 pb-2 min-h-[80px]  flex-row items-center justify-between">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text className="text-base font-Sora-SemiBold text-black capitalize inline-flex ">
        {title}
      </Text>
      {headerRight ? headerRight : <View className="w-10 h-10"></View>}
    </View>
  );
}

export default CustomHeader;
