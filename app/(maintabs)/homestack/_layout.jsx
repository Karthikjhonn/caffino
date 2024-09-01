import React from "react";
import { Stack } from "expo-router";


export default function HomeStack() {
  return (
    <Stack
      screenOptions={{ animation: "slide_from_right", headerShown: false }}
    >
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="details" />
      <Stack.Screen name="order" />
    </Stack>
  );
}
