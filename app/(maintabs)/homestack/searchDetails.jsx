import { View, Text, Image } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import CustomHeader from "../../../components/Navigation/CustomHeader";
import ResultNotFound from "../../../components/common/ResultNotFound";

const searchDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <ResultNotFound title={id} />
  );
};

export default searchDetails;
