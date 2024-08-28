import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import CustomHeader from "../../../components/Navigation/CustomHeader";
import { Ionicons } from "@expo/vector-icons";

export default function HomeStack() {
  return (
    <Stack screenOptions={{ animation: "slide_from_right" }}>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="details"
        options={{
          header: ({ navigation, options }) => (
            <CustomHeader
              navigation={navigation}
              options={options}
              title="details"
              headerRight={
                <TouchableOpacity onPress={() => {}}>
                  <Ionicons name="heart-outline" size={24} color="black" />
                </TouchableOpacity>
              }
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Stack.Screen
        name="order"
        options={{
          header: ({ navigation, options }) => (
            <CustomHeader
              navigation={navigation}
              options={options}
              title="Order"
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
    </Stack>
  );
}
