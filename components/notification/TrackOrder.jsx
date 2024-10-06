import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const TrackOrder = ({ data }) => {

  return (
    <View className="border border-gray-200 rounded-2xl bg-white  overflow-hidden mb-6">
      <View className="p-2 flex-row space-x-2">
        <View className="bg-gray-100 w-24 h-24 rounded-lg">
          <Image
            src={data?.image_url}
            className="w-full h-full rounded-lg object-cover"
          />
        </View>
        <View className="grow">
          <Text
            className="capitalize text-base font-Sora-SemiBold text-black tracking-wide pe-0"
            numberOfLines={1}
          >
            {data?.name}
          </Text>
          <Text className="text-black font-Sora-Regular text-xs mt-1.5">
            Order Id:{" "}
            <Text className=" text-black"> {data?._id.slice(0, 10)}</Text>
          </Text>
          <View className="flex-row justify-between flex-wrap mt-1.5">
            <Text className="text-gray-400 font-Sora-Regular text-xs">
              Delivery Estimate
            </Text>
            <Text className="text-gray-400 font-Sora-Medium text-xs">
              {new Date()
                .toLocaleString("default", { month: "long" })
                .slice(0, 3)
                .toUpperCase()}{" "}
              12, {new Date().getFullYear()}
            </Text>
          </View>
          <View className="flex-row justify-between mt-2">
            <Text className="text-gray-400 font-Sora-Regular text-xs">
              Qty: 1
            </Text>
            <Text className="text-black font-Sora-SemiBold text-xs">
              $ {data?.price}
            </Text>
          </View>
        </View>
      </View>
      <View className="px-2 mt-1 pt-2 border-t border-offgray/25 bg-re d-200">
        <View className="flex-row justify-between items-center">
          <Text className="text-sm font-Sora-Medium">Track Order</Text>
          <FontAwesome name="qrcode" size={30} color="black" />
        </View>
        {/* order status */}
        <View className="p-4 px-2">
          <View className="flex flex-row justify-between relative">
            <View className="flex items-center space-y-2 bg-white">
              <AntDesign name="checkcircle" size={22} color="#c67c4e" />
              <Text className="text-black font-Sora-Regular text-center text-xs">
                Packed
              </Text>
            </View>
            <View className="flex items-center space-y-2 bg-white">
              <AntDesign
                name={`${data?.id == 13 ? "checkcircle" : "checkcircleo"}`}
                size={22}
                color={`${data?.id == 13 ? "#c67c4e" : "#f9f2ed"}`}
              />
              <Text className="text-black font-Sora-Regular text-center text-xs">
                In transit
              </Text>
            </View>
            <View className="flex items-center space-y-2 bg-white">
              <AntDesign name="checkcircleo" size={22} color="#f9f2ed" />
              <Text className="text-black font-Sora-Regular text-center text-xs">
                Delivered
              </Text>
            </View>
            <View className="w-full  absolute top-2 -z-10 ">
              <View className="relative flex-row">
                <View className="w-1/2 left-0 absolute border border-accent rounded-full"></View>
                <View className="w-1/2 left-1/2 absolute border border-secondary rounded-full"></View>
              </View>
            </View>
          </View>
          {/* Delivery address  */}
          <View className="flex-row space-x-1 mt-4 border-t border-offgray/25 pt-4">
            <Entypo name="address" size={24} color="#9ca3af" />
            <View className="px-2 shrink">
              <Text className="font-Sora-Medium text-sm text-black">
                Delivery Address
              </Text>
              <Text className="font-Sora-Regular text-xs text-gray-400 mt-1">
                Home, Work & Other Address
              </Text>
              <Text className="font-Sora-Regular text-[10px] text-gray-400 grow">
                6th Main Rd, X Block, Anna Nagar West Depot to Foreshore Estate
                through Anna Nagar 2nd Ave, Anna Nagar, Chennai, Tamil Nadu
                600040
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrackOrder;
