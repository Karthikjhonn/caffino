import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import MyTabBar from "../../components/Navigation/MyTabBar";
export default function LayoutTabs() {
  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false , animation: "slide_from_right",}}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen
        name="details"
        options={{
          animation: "slide_from_right",
          headerShown: true,
          headerBackTitleVisible: false,
          headerBackVisible: true, // Shows the back button
          tabBarStyle: { display: "none" }, // Hides the bottom tab bar
        }} 
      />
      <Tabs.Screen name="wishlist" />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="notification" />
    </Tabs>
  );
}
