import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function NotFound() {
  const handlePressed = () => {
    router.replace("/");
  };
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-base font-Sora-Regular">Not Found..!</Text>
      <Pressable
        onPress={handlePressed}
        className="text-base font-Sora-Regular mt-3"
      >
        <Text className="text-base font-Sora-Regular"> Go to home</Text>
      </Pressable>
    </View>
  );
}
