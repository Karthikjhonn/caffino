import React, { Component, useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Searchbar } from "react-native-paper";
import data from "../../../data.json";
import sbData from "../../../sbdata.json";
import sb2Data from "../../../sb2data.json";
function detailScreen(id = null) {
  router.push({
    pathname: "/homestack/details",
    params: {
      id: id,
    },
  });
}
function searchDetailScreen(value = "") {
  router.push({
    pathname: "/homestack/searchDetails",
    params: {
      id: value,
    },
  });
}
const topTrendingData = [
  { title: "Smooth and bright coffee" },
  { title: "Signature blend" },
  { title: "Harvest moon" },
  { title: "Breezy beans" },
];

const searchProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView>
      <View className="flex-row items-center p-2 border-b border-gray-200 ">
        <Pressable
          className="w-10 h-10 justify-center items-center active:bg-gray-50 rounded-full"
          onPress={router.back}
        >
          <Feather name="arrow-left" size={20} color="#313131" />
        </Pressable>
        <View className="grow">
          <Searchbar
            placeholder="Search coffee.."
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{ backgroundColor: "#E4E4E73F", minHeight: 40, height: 40 }}
            inputStyle={{
              minHeight: 40,
              height: 40,
              marginLeft: -30,
              fontFamily: "Sora-Regular",
            }}
            icon={() => null}
          />
        </View>
        <Pressable className="w-10 h-10 justify-center items-center rounded-full active:bg-primary">
          <MaterialCommunityIcons name="line-scan" size={20} color="#313131" />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="py-2  pb-24">
          {/* Top trending section start  */}
          <>
            <Text className="text-base  font-Sora-SemiBold capitalize p-4 pb-1 bg-red-3 00">
              Top trending
            </Text>
            {topTrendingData?.map((data, i) => (
              <Pressable
                className="border-b border-gray-300/50 p-2.5 px-4 flex-row items-center"
                key={i}
                onPress={() => searchDetailScreen(data?.title)}
              >
                <Text
                  numberOfLines={1}
                  className="text-sm font-Sora-Regular text-black grow "
                >
                  {data.title}
                </Text>
                <Feather name="trending-up" size={16} color="#10b981" />
              </Pressable>
            ))}
          </>
          {/* Top trending section end  */}
          {/* Suggestion for you section start  */}
          <>
            <Text className="text-base mt-3 mb-1 font-Sora-SemiBold capitalize p-4 py-2">
              Suggestion for you
            </Text>
            <FlatList
              data={data}
              horizontal
              keyExtractor={(item, i) => i}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              style={{}}
              renderItem={({ item }) => <SmallProductCard data={item} />}
              ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
            />
          </>
          {/* Suggestion for you section end  */}
          {/*Recent search section start  */}
          <>
            <Text className="text-base mt-3 mb-1 font-Sora-SemiBold capitalize p-4 py-2">
              Recent search
            </Text>
            <FlatList
              data={sb2Data}
              horizontal
              keyExtractor={(item, i) => i}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              style={{}}
              renderItem={({ item }) => <SmallCard data={item} />}
              ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
            />
          </>
          {/*Recent search section end  */}
          {/*Related section start  */}
          <>
            <Text className="text-base mt-3 mb-1 font-Sora-SemiBold capitalize p-4 py-2">
              Related products
            </Text>
            <FlatList
              data={sbData}
              horizontal
              keyExtractor={(item, i) => i}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              style={{}}
              renderItem={({ item }) => <SmallCardRelated data={item} />}
              ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
            />
          </>
          {/*Related section end  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default searchProduct;

const SmallCard = ({ data }) => {
  return (
    <Pressable
      className="w-36  bg-white "
      onPress={() => searchDetailScreen("recent search")}
      android_ripple={{color:"#cecece"}}
    >
      <Image
        src={data?.image}
        className=" w-full h-44 object-cover"
      />
      <Text
        className="font-Sora-Regular text-sm capitalize mb-px p-2.5"
        numberOfLines={1}
      >
        {data?.title}
      </Text>
      {/* <Text>{data?.display?.displayName}</Text> */}
    </Pressable>
  );
};
const SmallCardRelated = ({ data }) => {
  return (
    <Pressable
      className=" bg-white"
      onPress={() => searchDetailScreen("related product")}
    >
      <View className="w-36">
        <Image src={data?.image} className=" w-full h-44 object-cover" />
        <Text
          className="font-Sora-Regular text-sm capitalize mb-px p-2.5"
          numberOfLines={1}
        >
          {data?.name}
        </Text>
      </View>
    </Pressable>
  );
};
const SmallProductCard = ({ data }) => {
  return (
    <Pressable
      onPress={() => detailScreen(data?.id)}
      className="w-36 bg-gray-50 rounded-lg"
    >
      <Image
        src={data?.image_url}
        className=" w-full h-44 object-cover rounded-t-lg bg-gray-300/50"
      />
      <View className="p-2.5">
        <Text
          className="font-Sora-Regular text-sm capitalize mb-px"
          numberOfLines={1}
        >
          {data?.name}
        </Text>
        <Text className="font-Sora-SemiBold text-sm">
          $ {data?.price || "00"}
        </Text>
      </View>
    </Pressable>
  );
};
