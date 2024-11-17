import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { getMyProduct } from "../../api/ApiIndex";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
const screenWidth = Dimensions.get("window").width;

const categories = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllProduct = async () => {
    try {
      const res = await getMyProduct();
      console.log("new res", res.status);
      if (res.status === 200) {
        setLoading(false);
        const formattedData = res.data.map((product) => ({
          item: product,
        }));
        console.log(formattedData);
        setData(formattedData);
      }
    } catch (error) {
      console.log(error?.message);
      setError(error?.message);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  if (loading) {
    <Loader />;
  }
  return (
    <View className="bg-background flex-1">
      <ScrollView className="py-6 px-4">
        {data?.map((data, i) => (
          <Card data={data} loading={false} key={i} />
        ))}
      </ScrollView>
    </View>
  );
};

export default categories;
