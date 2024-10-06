import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { FontProvider } from "../context/FontContext";
import NetworkCheck from "../components/Network error/NetworkCheck";

export default function RootLayout() {
  return (
    <FontProvider>
      <NetworkCheck>
        <Stack
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="(maintabs)" />
        </Stack>
      </NetworkCheck>
    </FontProvider>
  );
}
