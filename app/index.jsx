import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { FontProvider } from "../context/FontContext";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      // router.replace("/homestack/home");
      // router.replace("/cart");
    }, 100);
  }, []);
  return (
    <>
      <View className="flex-1  items-center bg-[#000] bg-g reen-400 pb-16 relative">
        <Image
          // src="https://images.unsplash.com/photo-1549652127-2e5e59e86a7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
          source={require("../assets/images/welcome.png")}
          className="object-contain w-full h-3/4 max-h-[550px] absolute top-0 left-0"
        />
        <View className="mt-auto  px-5">
          <Text className="text-4xl text-white text-center font-Sora-SemiBold">
            Fall in Love with Coffee in Blissful Delight!
          </Text>
          <Text className="text-base text-offgray text-center font-Sora-Regular mt-2">
            Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </Text>
          <Pressable
            className="bg-accent min-h-[58px] mt-6 rounded-2xl"
            onPress={() => router.replace("/homestack/home")}
          >
            <Text className="text-base text-white text-center font-Sora-SemiBold capitalize my-auto">
              get started
            </Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="light" translucent backgroundColor="transparent" />
    </>
  );
}
