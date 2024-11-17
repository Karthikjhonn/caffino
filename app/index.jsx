import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import Loader from "../components/Loader";
import Button from "../components/Button";
import { FadeIn, FadeInDown } from "react-native-reanimated";
import Animated from "react-native-reanimated";
export default function SplashScreen() {
  const [loader, setLoader] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     // router.replace("/homestack/home");
  //     // router.replace("/homestack/searchProduct");
  //     // router.replace("/notification");
  //     router.replace("/categories");
  //     // router.replace("/test");
  //   }, 100);
  // }, []);
  const handleOnClick = () => {
    setLoader(true);
    setTimeout(() => {
      router.replace("/homestack/home");
      setLoader(false);
    }, 200);
  };
  return (
    <>
      <View className="flex-1  items-center bg-[#000] bg-g reen-400 pb-16 relative">
        <Image
          source={require("../assets/images/welcome.png")}
          className="object-contain w-full h-3/4 max-h-[550px] absolute top-0 left-0"
        />
        <View className="mt-auto  px-5">
          <Animated.View entering={FadeInDown.delay(300).duration(300)}>
            <Text className="text-4xl text-white text-center font-Sora-SemiBold">
              Fall in Love with Coffee in Blissful Delight!
            </Text>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(350).duration(300)}>
            <Text className="text-base text-offgray text-center font-Sora-Regular mt-2">
              Welcome to our cozy coffee corner, where every cup is a delightful
              for you.
            </Text>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(400).duration(300)}>
            <Button
              title={loader ? <Loader /> : "get started"}
              style={"mt-6"}
              onPress={handleOnClick}
            />
          </Animated.View>
        </View>
      </View>
      <StatusBar style="light" translucent backgroundColor="transparent" />
    </>
  );
}
