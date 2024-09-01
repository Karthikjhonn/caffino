import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Button from "../../../components/Button";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddToCartCard from "../../../components/AddToCartCard";
import Discount from "../../../components/Discount";
import { router, useLocalSearchParams } from "expo-router";
import getDetails from "../../../hooks/GetDetails";
import DeliveryAddress from "../../../components/DeliveryAddress";
import testData from "../../../data.json";
import CustomHeader from "../../../components/Navigation/CustomHeader";
export default function Order() {
  const { id } = useLocalSearchParams();
  const [orderType, setOrderType] = useState(1);
  const [total, setTotal] = useState(0);
  const { data, loading, error } = getDetails(
    `https://fake-coffee-api.vercel.app/api/${id}`
  );
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#c67c4e" />
      </View>
    );
  }
  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  function calculateTotal(price, count, type = "add") {
    const total = price;
    if (type === "add") {
      setTotal((prevTotal) => prevTotal + total);
    } else if (type === "minus") {
      setTotal((prevTotal) => prevTotal - total);
    }
  }

  return (
    <View className="flex-1 bg-background">
      <CustomHeader title={"Order"} navigation={router.back} />
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View className="px-6 mt-6">
          <View className="bg-gray-200 p-1 flex-row space-x-1 rounded-lg min-h-[44px]">
            <TouchableOpacity
              onPress={() => setOrderType(1)}
              activeOpacity={0.7}
              className={` bg-transparent text-black rounded-lg justify-center grow min-h-[35px] ${
                orderType === 1 ? "bg-accent" : null
              }`}
            >
              <Text
                className={`text-black text-base font-Sora-Regular text-center ${
                  orderType === 1 ? "text-white font-Sora-SemiBold" : null
                }`}
              >
                Deliver
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setOrderType(2)}
              activeOpacity={0.7}
              className={`bg-transparent text-black rounded-lg justify-center grow min-h-[35px] ${
                orderType === 2 ? "bg-accent" : null
              }`}
            >
              <Text
                className={`text-black text-base font-Sora-Regular text-center ${
                  orderType === 2 ? "text-white font-Sora-SemiBold" : null
                }`}
              >
                Pick Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* delivery address  */}
        <View className="px-6 mt-6">
          <DeliveryAddress />
        </View>
        {/* add to cart card  */}
        <View className="px-6">
          {data?.map((data) => (
            <AddToCartCard
              data={data}
              calculateTotal={calculateTotal}
              key={data?.id}
            />
          ))}
        </View>
        <View className="w-full h-1 bg-secondary my-4"></View>
        {/* discount and payment summary  */}
        <View className="px-6 my-6 mb-10">
          <Discount />
          <View className="mt-6">
            <Text className="font-Sora-SemiBold text-base text-black mb-4">
              Payment Summary
            </Text>
            <View>
              <View className="flex-row  justify-between items-center mb-2">
                <Text className="font-Sora-Regular text-sm tracking-wide text-black">
                  Price
                </Text>
                <Text className="font-Sora-SemiBold text-sm text-black text-right">
                  $ {total.toFixed(2)}
                </Text>
              </View>
              <View className="flex-row  justify-between items-center">
                <Text className="font-Sora-Regular text-sm tracking-wide text-black">
                  Delivery Fee
                </Text>
                <View className="flex-row space-x-2">
                  <Text className="font-Sora-Regular text-sm text-black text-right line-through">
                    ($1.5)
                  </Text>
                  <Text className="font-Sora-SemiBold text-sm text-black text-right">
                    $ {(data[0]?.price - 8).toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* bottom sticky */}
      <View className="bg-white px-6 py-6  min-h-[108px] space-y-4 rounded-t-2xl">
        <View className="flex-row justify-between items-center">
          <View className=" space-x-2 flex-row items-center">
            <View className="w-11 h-11 rounded-full justify-center items-center">
              <Ionicons name="wallet-outline" size={24} color="#c67c4e" />
            </View>
            <View>
              <Text className="text-sm font-Sora-SemiBold text-black capitalize tracking-wider">
                Cash/wallet
              </Text>
              <Text className="text-xs font-Sora-SemiBold text-accent mt-1">
                $ 6.56
              </Text>
            </View>
          </View>
          <TouchableOpacity className="w-11 h-11 rounded-full justify-center items-center">
            <Entypo name="chevron-thin-down" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="grow w-full">
          <Button title="Order" style={"my-auto"} />
        </View>
      </View>
    </View>
  );
}
