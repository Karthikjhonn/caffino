import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
const NetworkCheck = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    console.log("network");

    return () => unsubscribe();
  }, []);

  if (!isConnected) {
    return (
      <View className="flex-1 justify-center items-center">
        <Image
          className="w-24 h-24"
          source={require("../../assets/images/No Connection Animated 3D Icon.gif")}
        />
        <Text className="text-center font-Sora-Regular text-sm text-black">
          Please turn on your network!
        </Text>
      </View>
    );
  }

  return children;
};

export default NetworkCheck;
