import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function FavoritesCard() {
  return (
    <View className="flex-row bg-white rounded-xl">
      <View className="flex-row space-x-1 shrink m-2">
        <View className="w-16 h-16 bg-gray-200 rounded-md"></View>
        <View className="shrink">
          <Text
            className="capitalize text-base font-Sora-SemiBold text-black tracking-wide mb-px pe-0"
            numberOfLines={1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quas numquam ullam eius, distinctio provident!
          </Text>
          <View className="flex-row items-center space-x-2">
            <Text
              className="capitalize text-xs font-Sora-Regular tracking-wider text-gray-400 border-r border-gray-200"
              style={{ paddingEnd: 8 }}
            >
              test
            </Text>
            <Text className=" text-xs font-Sora-Regular tracking-wider text-gray-400">
              552g
            </Text>
          </View>
        </View>
      </View>
      <View className="bg-primary justify-center items-center basis-1/3 max-w-[70px] rounded-tr-xl rounded-br-xl">
        <Ionicons name="heart" size={26} color="#c67c4e" />
      </View>
    </View>
  );
}
