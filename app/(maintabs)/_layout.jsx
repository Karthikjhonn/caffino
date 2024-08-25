import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import MyTabBar from "../../components/Navigation/MyTabBar"
export default function LayoutTabs() {
  return (
    <Tabs tabBar={props => <MyTabBar {...props} />} screenOptions={{headerShown:false}}>
      <Tabs.Screen name="home" options={{ headerShown: true }} />
      <Tabs.Screen name="wishlist" options={{ headerShown: false }} />
    </Tabs>
  );
}
