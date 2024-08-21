import { View, Text } from "react-native";
import React from "react";
import { FontProvider } from "../context/FontContext";

export default function SplashScreen() {
  return (
    <FontProvider>
      <View className="flex-1 items-center justify-center bg-white space-y-2 p-5">
        <Text
          className="bg-accent text-white block w-full font-medium text-center py-6 text-xl rounded-[28px] "
          style={{ fontFamily: "soraLight" }}
        >
          Splash Screen
        </Text>
        <Text className="bg-primary text-black block w-full font-medium text-center py-6 text-xl rounded-[28px] font-soraLight">
          Splash Screen
        </Text>
        <Text className="bg-secondary text-black block w-full font-medium text-center py-6 text-xl rounded-[28px] font-soraRegular">
          Splash Screen
        </Text>
        <Text className="bg-offgray text-black block w-full font-medium text-center py-6 text-xl rounded-[28px] font-soraMedium">
          Splash Screen
        </Text>
        <Text
          className="bg-black text-white block w-full font-medium text-center py-6 text-xl rounded-[28px] font-soraSemibold"
          style={{ fontFamily: "soraSemibold" }}
        >
          Splash Screen
        </Text>
      </View>
    </FontProvider>
  );
}
