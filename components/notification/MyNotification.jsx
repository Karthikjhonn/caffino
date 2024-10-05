import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const MyNotification = () => {
  return (
    <ScrollView className="py-6 pt-0 mb-20">
      <Pressable
        android_ripple={{ color: "#e5e7eb" }}
        className="p-4 flex-row items-center space-x-2 border-b border-gray-200"
      >
        <View className="w-12 h-12 rounded-2xl bg-[#6B9080]  justify-center items-center">
          <FontAwesome5 name="gifts" size={24} color="#A4C3B2" />
        </View>
        <View className="shrink grow">
          <Text className="text-base font-Sora-Medium capitalize">
            Sunrise time
          </Text>
          <Text className="text-sm font-Sora-Regular capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          <Text className="text-[10px] font-Sora-Regular capitalize text-right">
            <View className="w-1.5 h-1.5 rounded-full bg-gray-300/50 "></View>{" "}
            05.23 Am
          </Text>
        </View>
      </Pressable>
      <Pressable
        android_ripple={{ color: "#e5e7eb" }}
        className="p-4 flex-row items-center space-x-2 border-b border-gray-200"
      >
        <View className="w-12 h-12 rounded-2xl bg-[#b6ccfe]  justify-center items-center">
          <FontAwesome5 name="gifts" size={24} color="#e2eafc" />
        </View>
        <View className="shrink grow">
          <Text className="text-base font-Sora-Medium capitalize">
            good morning
          </Text>
          <Text className="text-sm font-Sora-Regular capitalize">
            suscipit facilis tempore corporis alias minus vel.
          </Text>
          <Text className="text-[10px] font-Sora-Regular capitalize text-right">
            <View className="w-1.5 h-1.5 rounded-full bg-gray-300/50 "></View>{" "}
            09.45 Am
          </Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default MyNotification;
