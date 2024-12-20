import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Modal,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Loader from "../Loader";
import { router } from "expo-router";
import BottomSheet from "../common/BottomSheet";

export default function FavoritesCta({ data, removeWishlist, productData }) {
  const [step, setStep] = useState(1);
  const [loader, setLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handleSteps = () => {
    if (step === 1) {
      addToCart();
    }
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setStep(2);
      if (step === 2) {
        router.push({
          pathname: "homestack/order",
          params: {
            id: data?.id,
          },
        });
      }
    }, 1000);
  };
  const toRemoveWishlist = () => {
    const payload = {
      ...productData,
      wishlist: false,
    };
    handleModel();
    removeWishlist(payload, "wishlist");
  };
  const addToCart = () => {
    const payload = {
      ...productData,
      cart: true,
    };
    removeWishlist(payload, "cart");
  };
  const handleModel = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View className="flex-row items-center justify-between space-x-2">
      <TouchableOpacity
        onPress={handleSteps}
        activeOpacity={0.7}
        className="bg-primary rounded-full min-h-[34px] grow px-3 items-center justify-center "
      >
        <Text className="text-xs font-Sora-SemiBold text-accent whitespace-nowrap">
          {!loader ? (
            step === 1 ? (
              "Add to cart"
            ) : (
              "proceed to checkout"
            )
          ) : (
            <Loader />
          )}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleModel}
        activeOpacity={0.7}
        className="w-8 h-8 rounded-full justify-center items-center ms-auto active:bg-gray-100"
      >
        <Ionicons name="ellipsis-vertical-sharp" size={16} color="black" />
      </TouchableOpacity>
      <BottomSheet handleModel={handleModel} modalVisible={modalVisible}>
        <View className="bg-background">
          <View className="flex-row space-x-3 px-6 py-4 border-b border-red-200/75">
            <View className="w-16 h-16 bg-gray-200 rounded-sm">
              <Image
                src={data?.image_url}
                className="w-full h-full object-cover rounded-sm"
              />
            </View>
            <View className="shrink">
              <Text className="text-sm font-Sora-SemiBold text-black ">
                {data?.name}
              </Text>
              <Text
                className="text-sm font-Sora-Regular text-black "
                numberOfLines={2}
              >
                {data?.description}
              </Text>
            </View>
          </View>
          <Pressable
            onPress={toRemoveWishlist}
            android_ripple={{ color: "#fecaca" }}
            className="px-6 py-4 bg-errorColor/25 min-h-[44px]"
          >
            <Text className="font-Sora-Medium text-base text-center text-errorColor ">
              Remove
            </Text>
          </Pressable>
        </View>
      </BottomSheet>
    </View>
  );
}
