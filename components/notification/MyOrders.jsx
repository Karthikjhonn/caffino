import { View, Text, ScrollView } from "react-native";
import React, { useCallback, useState } from "react";
import TrackOrder from "./TrackOrder";
import { useFocusEffect } from "expo-router";
import { Skeleton } from "moti/skeleton";

const MyOrders = () => {
  const [loading, setLoading] = useState(true);
  const data = [
    {
      _id: "6424353f59f9f6fdd657d2ee",
      id: 13,
      name: "Coconut Kiss",
      description:
        "A light and refreshing coffee from the shores of the Asia Pacific, with a subtle coconut flavor.",
      price: 9.99,
      region: "Asia Pacific",
      weight: 500,
      roast_level: 2,
      flavor_profile: ["Coconut"],
      grind_option: ["Whole Bean", "Filter"],
      image_url: "https://iili.io/H8Y7GQ1.webp",
    },
    {
      _id: "6424353559f9f6fdd657d2e9",
      id: 8,
      name: "Indo-Viet Roast",
      description:
        "This coffee blend is made from beans sourced from Indonesia and Vietnam. It is a medium-dark roast coffee with a spicy and earthy flavor profile, with notes of cinnamon and clove. It is perfect for drip and French press brewing methods.",
      price: 13.99,
      region: "Asia Pacific",
      weight: 500,
      flavor_profile: ["Spicy", "Earthy", "Cinnamon", "Clove"],
      grind_option: ["Whole bean", "Filter", "French press"],
      roast_level: 4,
      image_url: "https://iili.io/H8Y7wYv.webp",
    },
  ];
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => setLoading(false), 2000);
    }, [])
  );
  if (loading) {
    return (
      <View className="py-6 px-4 pt-8 flex-1 space-y-6">
        <View>
          <Skeleton
            height={280}
            width={"100%"}
            radius={16}
            colorMode="light"
            show
          ></Skeleton>
        </View>
        <View>
          <Skeleton
            height={280}
            width={"100%"}
            radius={16}
            colorMode="light"
            show
          ></Skeleton>
        </View>
        <View>
          <Skeleton
            height={280}
            width={"100%"}
            radius={16}
            colorMode="light"
            show
          ></Skeleton>
        </View>
      </View>
    );
  }
  return (
    <ScrollView className="py-6 px-4" showsVerticalScrollIndicator={false}>
      <View className="mb-24">
        {data?.map((data, i) => (
          <TrackOrder key={i} data={data} />
        ))}
      </View>
    </ScrollView>
  );
};

export default MyOrders;
