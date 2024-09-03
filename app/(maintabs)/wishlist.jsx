import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import FavoritesCard from "../../components/Favorites/FavoritesCard";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import data from "../../data.json";
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
  const getWishlistDetails = async () => {
    const res = await getProductDetails();
    const filterData = res.filter((data) => {
      if (data.wishlist == true) {
        return data;
      }
    });
    setWishlistItem(filterData);
  };
  useEffect(() => {
    getWishlistDetails();
  }, []);

  const updateWishlistStatus = async (product,type) => {
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
      getWishlistDetails();
    } catch (error) {
      console.error(error);
    }
  };
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
    <View className="flex-1 justify-center items-center">
      <Text className="font-Sora-Regular text-base text-black">
        Wishlist is empty
      </Text>
    </View>
  );
};
