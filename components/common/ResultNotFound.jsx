import { View, Text, Image } from "react-native";
import React from "react";
import CustomHeader from "../Navigation/CustomHeader";
import { router } from "expo-router";
import { FadeIn, FadeInDown } from "react-native-reanimated";
import Animated from "react-native-reanimated";
const ResultNotFound = ({
  message = `Sorry, we couldn't locate any matches ${"\n"} for your search.`,
  title = "",
}) => {
  return (
    <View className="flex-1">
      <CustomHeader title={title} navigation={router.back} />
      <Animated.View
        entering={FadeInDown.delay(300).duration(300)}
        className="flex-1 justify-center items-center p-4"
      >
        <Image
          source={require("../../assets/images/Questions-cuate.png")}
          className="w-full h-72 max-w-xs object-cover"
        />
        <Animated.View entering={FadeInDown.delay(350).duration(300)}>
          <Text className="text-sm font-Sora-Regular text-center mt-1">
            {message}
          </Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default ResultNotFound;
