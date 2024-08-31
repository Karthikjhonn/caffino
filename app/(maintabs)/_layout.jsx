import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import MyTabBar from "../../components/Navigation/MyTabBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
export default function LayoutTabs() {
  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: "Sora-Regular",
          fontSize: 14,
        },
      }}
    >
      <Tabs.Screen name="homestack" options={{ headerShown: false }} />
      <Tabs.Screen
        name="wishlist"
        options={{
          headerTitle: () => (
            <Text className="font-Sora-Regular text-lg">Favorites</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerTitle: () => (
            <Text className="font-Sora-Regular text-lg">My Bag</Text>
          ),
          headerRight: () => (
            <Feather
              name="shopping-bag"
              size={20}
              color="black"
              style={{ marginEnd: 20 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          headerTitle: () => (
            <Text className="font-Sora-Regular text-lg">Notification</Text>
          ),
          headerRight: () => (
            <Ionicons
              name="help-circle-outline"
              size={24}
              color="black"
              style={{ marginEnd: 16 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
