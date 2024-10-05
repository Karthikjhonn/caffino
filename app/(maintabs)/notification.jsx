import { Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import MyOrders from "../../components/notification/MyOrders";
import OrderHistory from "../../components/notification/OrderHistory";
import MyNotification from "../../components/notification/MyNotification";

export default function notification() {
  const initialLayout = { width: Dimensions.get("window").width };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "myOrders", title: "My Orders" },
    { key: "orderHistory", title: "Order History" },
    { key: "myDiscount", title: "Discount" },
  ]);

  const renderScene = SceneMap({
    myOrders: MyOrders,
    orderHistory: OrderHistory,
    myDiscount: MyNotification,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{ shadowOpacity: 0 }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: "#C67C4E" }}
          style={{ backgroundColor: "white", shadowOpacity: 0, elevation: 0 }}
          className="border-t-[0.5px] border-gray-200/75"
          labelStyle={{
            color: "#C67C4E",
            fontFamily: "Sora-Medium",
            fontSize: 12,
            textTransform: "capitalize",
            textAlign: "center",
          }}
          renderLabel={({ route, focused, color }) => (
            <Text
              className={`text-xs font-Sora-Medium text-center ${
                focused ? "text-accent" : "text-gray-400"
              }`}
            >
              {route.title}
            </Text>
          )}
        />
      )}
    />
  );
}
