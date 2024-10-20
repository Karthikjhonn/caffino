import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const PageLoader = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#c67c4e" />
    </View>
  );
};

export default PageLoader;
