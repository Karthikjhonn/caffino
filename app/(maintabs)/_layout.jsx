import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import MyTabBar from "../../components/Navigation/MyTabBar";
export default function LayoutTabs() {
  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
      // screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="homestack" options={{headerShown:false}} />
      <Tabs.Screen name="wishlist" options={{headerTitle:'Favorites'}} />
      <Tabs.Screen name="cart" />
      <Tabs.Screen name="notification" />
    </Tabs>
  );
}
