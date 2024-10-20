import { View, Text, Image } from "react-native";
import React from "react";
import CustomHeader from "../Navigation/CustomHeader";
import { router } from "expo-router";

const ResultNotFound = ({message = `Sorry, we couldn't locate any matches {"\n"} for your search.`,title=""}) => {
  return (
    <View className="flex-1">
      <CustomHeader title={title}  navigation={router.back} />
      <View className="flex-1 justify-center items-center p-4">
        <Image
          source={require("../../assets/images/Questions-cuate.png")}
          className="w-full h-72 max-w-xs object-cover"
        />
        <Text className="text-sm font-Sora-Regular text-center mt-1">
          {message}
        </Text>
      </View>
    </View>
  )
}

export default ResultNotFound