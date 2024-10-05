import { View, Text, ScrollView } from "react-native";
import React from "react";
import TrackOrder from "./TrackOrder";

const MyOrders = () => {
  const data = [
    {
      _id: "6424335b59f9f6fdd657d2e1",
      id: 1,
      name: "Signature Blend",
      description:
        "A rich, full-bodied coffee with notes of dark chocolate and black cherry. Grown on the slopes of a mist-covered mountain in Central America.",
      price: 12.99,
      region: "Central America",
      weight: 500,
      flavor_profile: ["Dark Chocolate", "Black Cherry"],
      grind_option: ["Whole Bean", "Cafetiere", "Filter", "Espresso"],
      roast_level: 3,
      image_url: "https://iili.io/H8Y78Qt.webp",
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
  return (
    <ScrollView className="py-4 px-4">
      <View className="mb-24">
        {data?.map((data, i) => (
          <TrackOrder key={i} data={data} />
        ))}
      </View>
    </ScrollView>
  );
};

export default MyOrders;
