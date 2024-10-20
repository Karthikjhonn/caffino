import { View, Text, Image } from "react-native";
import React from "react";
import CustomHeader from "../Navigation/CustomHeader";
import { router } from "expo-router";

const ErrorPage = ({ message = "Uh-oh! Something went wrong" }) => {
  return (
    <View className="flex-1">
      <CustomHeader navigation={router.back} />
      <View className="flex-1 justify-center items-center p-4">
        <Image
          source={require("../../assets/images/404errorwithpeople.png")}
          className="w-full h-64  aspect-square max-w-xs object-cover"
        />
        <Text className="text-sm font-Sora-Regular text-center mt-2">
          {message}
        </Text>
      </View>
    </View>
  );
};

export default ErrorPage;
