import { View, Text, Image } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import CustomHeader from "../../../components/Navigation/CustomHeader";

const searchDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1">
      <CustomHeader title={id} navigation={router.back} />
      <View className="flex-1 justify-center items-center p-4">
        <Image source={require("../../../assets/images/Questions-cuate.png")} className="w-full h-72 max-w-xs object-cover"/>
       <Text className="text-sm font-Sora-Regular text-center mt-1">Sorry, we couldn't locate any matches {"\n"} for your search.</Text>
      </View>
    </View>
  );
};

export default searchDetails;
