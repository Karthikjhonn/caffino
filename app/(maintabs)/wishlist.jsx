import { View, Text, ActivityIndicator, Image } from "react-native";
import React, { useCallback, useState } from "react";
import FavoritesCard from "../../components/Favorites/FavoritesCard";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import data from "../../data.json";
import { useFocusEffect } from "@react-navigation/native";
import { FadeIn, FadeInDown } from "react-native-reanimated";
import Animated from "react-native-reanimated";
const getProductDetails = async () => {
  try {
    const productDetails = await AsyncStorage.getItem("productDetails");
    console.log(productDetails);
    return productDetails ? JSON.parse(productDetails) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default function wishlist() {
  const [wishlistItem, setWishlistItem] = useState([]);
  const [loader, setLoader] = useState(true);
  const getWishlistDetails = async () => {
    setLoader(true);
    const res = await getProductDetails();
    const filterData = res.filter((data) => {
      if (data.wishlist == true) {
        return data;
      }
    });
    setWishlistItem(filterData);
    setLoader(false);
  };
  useFocusEffect(
    useCallback(() => {
      getWishlistDetails();
    }, [])
  );

  const updateWishlistStatus = async (product, type) => {
    console.log("product value", product);
    console.log("product type", type);
    if (product == null || undefined) {
      return null;
    }
    try {
      const productDetails = await AsyncStorage.getItem("productDetails");
      let productArray = productDetails ? JSON.parse(productDetails) : [];
      const productIndex = productArray.findIndex(
        (item) => item.id === product.id
      );
      if (productIndex !== -1) {
        productArray[productIndex][type] = product[type];
      } else {
        productArray.push(product);
      }
      await AsyncStorage.setItem(
        "productDetails",
        JSON.stringify(productArray)
      );
      console.log("updated successfully.");
      if (type == "wishlist") {
        getWishlistDetails();
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (loader) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#c67c4e" />
      </View>
    );
  }
  if (wishlistItem.length == 0 || null) {
    return <EmptyWishlist />;
  }
  return (
    <View className="py-6 px-4">
      {wishlistItem?.map((id, i) => (
        <FavoritesCard
          key={i}
          data={data[id?.id - 1]}
          removeWishlist={updateWishlistStatus}
          productData={id}
        />
      ))}
      <StatusBar style="dark" />
    </View>
  );
}

const EmptyWishlist = () => {
  return (
    <Animated.View
      entering={FadeInDown.delay(300).duration(300)}
      className="flex-1 justify-center items-center "
    >
      <Image
        source={require("../../assets/images/Sign Board Floating With Chain 3D Model.png")}
        className="object-contain w-20 h-20"
      />
      <Image
        source={require("../../assets/images/Ellipse1.png")}
        className="object-contain   -z-10 -translate-y-4"
      />
      <Animated.View entering={FadeInDown.delay(350).duration(300)}>
        <Text className="font-Sora-Light text-center text-sm text-black z-10 max-w-xs -translate-y-2">
          Your wishlist needs a little caffeine! Explore our blends and add your
          top picks. 🌿
        </Text>
      </Animated.View>
    </Animated.View>
  );
};
