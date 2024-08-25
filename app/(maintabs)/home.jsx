import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import TabItem from "../../components/TabItem";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Card from "../../components/Card";

const coffee = [
  "all coffee",
  "Machiato",
  "latte",
  "american start",
  "cold coffee",
];

const screenWidth = Dimensions.get("window").width;

export default function Home() {
  return (
    <>
      <FlatList
        ListHeaderComponent={headerContent}
        data={coffee}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 24,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ItemSeparatorComponent={() => <View className="h-4"></View>}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="light" />
    </>
  );
}

const headerContent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handlePress = (index) => {
    setSelectedTab(index);
    const itemWidth = 120;
    const offset = index * itemWidth - screenWidth / 2 + itemWidth / 2;

    flatListRef.current?.scrollToOffset({
      animated: true,
      offset: Math.max(0, offset),
    });
  };
  const flatListRef = useRef(null);
  return (
    <>
      <LinearGradient
        colors={["#111111", "#313131"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="max-h-[280px]  pt-14 px-6"
      >
        <Text className="text-offgray text-xs font-Sora-Regular mb-1">
          Location
        </Text>
        <View className="flex-row space-x-1">
          <Text className="text-offgray text-sm font-Sora-SemiBold capitalize">
            chennai, india
          </Text>
          <Entypo name="chevron-small-down" size={24} color={"#e3e3e3"} />
        </View>
        <View className="flex-row items-center mt-6 space-x-3">
          <View className="px-3 bg-black rounded-xl min-h-[52px] justify-center flex-1">
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#e3e3e3"
              className="font-Sora-Regular text-sm text-offgray placeholder:text-offgray"
            />
          </View>
          <TouchableOpacity
            className="bg-accent justify-center items-center h-[52px] w-12 rounded-xl"
            activeOpacity={0.7}
          >
            <Ionicons name="filter" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View className="mt-6 relative">
          <Image
            source={require("../../assets/images/Banner 1.png")}
            className="object-contain w-full h-36  rounded-2xl"
          />
          <View className="absolute top-10 left-5 z-10">
            <Text className="font-Sora-SemiBold text-3xl inline-block text-white w-fit">
              Buy one get {"\n"} one FREE
            </Text>
            <View className="bg-black w-full h-6 absolute top-3 -z-10"></View>
            <View className="bg-black w-36 h-6 absolute top-12 -z-10"></View>
          </View>
          <Text className="bg-[#ED5151] px-2 py-1 rounded-md text-white font-Sora-SemiBold text-sm absolute top-2 left-5">
            {" "}
            Promo
          </Text>
        </View>
      </LinearGradient>

      <View className="mt-[84px] mb-4">
        <FlatList
          ref={flatListRef}
          data={coffee}
          renderItem={({ item, index }) => (
            <TabItem
              item={item}
              id={index}
              isSelected={selectedTab === index}
              onPress={() => handlePress(index)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          ItemSeparatorComponent={() => <View className="w-4" />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};
