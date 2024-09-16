import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import TabItem from "../../../components/TabItem";
import Card from "../../../components/Card";
import getDetails from "../../../hooks/GetDetails";
import * as Location from "expo-location";
import { Alert, Linking } from "react-native";
const coffee = [
  "all coffee",
  "Machiato",
  "latte",
  "american star",
  "cold coffee",
];

const screenWidth = Dimensions.get("window").width;

export default function Home() {
  const { data, loading, error } = getDetails(
    "https://fake-coffee-api.vercel.app/api"
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

  return (
    <>
      <FlatList
        ListHeaderComponent={headerContent}
        data={data}
        renderItem={(data) => <Card data={data} />}
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
      <StatusBar style="light" backgroundColor="#31313140" />
    </>
  );
}

const headerContent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [city, setCity] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied.");
      Alert.alert(
        "Location Permission Required",
        "Location access is mandatory for this app to function. Please enable location services in your device settings.",
        [
          { text: "Go to Settings", onPress: () => Linking.openSettings() },
        ]
      );
      return false;
    }
    return true;
  };

  const fetchLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;

    try {
      let { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      const { latitude, longitude } = coords;

      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (reverseGeocode.length > 0 && reverseGeocode[0].city) {
        setCity(reverseGeocode[0].city);
        setErrorMsg(null); 
      } else {
        setErrorMsg("Unable to determine the city.");
        Alert.alert(
          "Error",
          "Unable to determine the city from the current location. Please try again.",
          [{ text: "OK" }]
        );
      }
    } catch (error) {
      setErrorMsg(
        "Current location is unavailable."
      );
      // console.error("Location error:", error);
      Alert.alert(
        "Error",
        "Current location is unavailable. Please ensure that location services are enabled and try again.",
        [{ text: "Go to Settings", onPress: () => Linking.openSettings() }]
      );
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);
  
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
          {city ? <Text>{city}</Text> : <Text>{errorMsg || "Loading..."}</Text>}
          </Text>
          <Entypo name="chevron-small-down" size={24} color={"#e3e3e3"} />
        </View>
        {/* search section  */}
        <View className="flex-row items-center mt-6 space-x-3">
          <View className="px-3 bg-black rounded-xl min-h-[52px] justify-center flex-1">
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#e3e3e3"
              className="font-Sora-Regular text-sm text-offgray placeholder:text-offgray !caret-accent"
            />
          </View>
          <TouchableOpacity
            className="bg-accent justify-center items-center h-[52px] w-12 rounded-xl"
            activeOpacity={0.7}
          >
            <Ionicons name="filter" size={20} color="white" />
          </TouchableOpacity>
        </View>
        {/* banner  */}
        <View className="mt-6 relative">
          <Image
            source={require("../../../assets/images/Banner 1.png")}
            className="object-contain w-full h-36  rounded-2xl"
          />
          <View className="absolute top-10 left-5 z-10">
            <Text className="font-Sora-SemiBold text-3xl inline-block text-white w-fit">
              Buy one get {"\n"} one FREE
            </Text>
            <View className="bg-black w-full h-6 absolute top-3 -z-10"></View>
            <View className="bg-black w-36 h-6 absolute top-12 -z-10"></View>
          </View>
          <Text className="bg-errorColor px-2 py-1 rounded-md text-white font-Sora-SemiBold text-sm absolute top-2 left-5">
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
