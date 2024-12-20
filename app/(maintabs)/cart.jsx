import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Button from "../../components/Button";
import CartCard from "../../components/cart/CartCard";
import productData from "../../data.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useFocusEffect } from "expo-router";
import { FadeIn, FadeInDown } from "react-native-reanimated";
import Animated from "react-native-reanimated";
const getProductDetails = async () => {
  try {
    const productDetails = await AsyncStorage.getItem("productDetails");
    // console.log(productDetails);
    return productDetails ? JSON.parse(productDetails) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default function cart() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [cartData, setCartData] = useState([]);
  function calculateTotal(price, count, type = "add") {
    // console.log("price", price);
    // console.log("count", count);
    const total = price;
    if (type === "add") {
      // console.log("Total", total);
      setTotal((prevTotal) => prevTotal + total);
    } else if (type === "minus") {
      // console.log("Total", total);
      setTotal((prevTotal) => prevTotal - total);
    }
  }
  const getWishlistDetails = async () => {
    setLoader(true);
    const res = await getProductDetails();
    const filterCartItems = res.filter((data) => {
      if (data.cart == true) {
        return data;
      }
    });
    const filteredProducts = [];
    productData.filter((product) => {
      filterCartItems.some((data) => {
        if (data.id == product.id) {
          // console.log(data.id);
          // console.log(product);
          filteredProducts.push(product);
        }
      });
    });
    // console.log("final", filteredProducts);
    setTotal(0);
    setData(filteredProducts);
    setCartData(filterCartItems);
    setTimeout(() => {
      setLoader(false);
    }, 200);
  };
  const updateCartStatus = async (product, type) => {
    console.log("update cart product", product);
    if (!product) {
      return null;
    }
    try {
      const productDetails = await AsyncStorage.getItem("productDetails");
      let productArray = productDetails ? JSON.parse(productDetails) : [];

      const productIndex = productArray.findIndex(
        (item) => item.id == product.id
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
      console.log(`cart updated successfully.`);
      getWishlistDetails();
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setLoader(true);
      getWishlistDetails();
    }, [])
  );
  if (loader) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#c67c4e" />
      </View>
    );
  }
  if ((!loader && data.length == 0) || null) {
    return <EmptyWishlist />;
  }
  const proceedCheckout = () => {
    router.push({
      pathname: "homestack/order",
      params: {
        wishlistItem: true,
      },
    });
  };
  return (
    <View className="bg-background flex-1">
      <ScrollView className="">
        {data.map((data, i) => (
          <CartCard
            data={data}
            calculateTotal={calculateTotal}
            key={data?.id}
            count={cartData[i]}
            updateCartStatus={updateCartStatus}
          />
        ))}
        <Animated.View
          entering={FadeInDown.delay(300).duration(300)}
          className="mt-6 px-5"
        >
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
                  {/* $ {data[0]?.price - 8.5} */}$ 1.56
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(350).duration(300)}
          className="px-6 mb-16 py-6 mt-auto"
        >
          <Button
            title="Proceed to checkout"
            style={"mt-0"}
            onPress={proceedCheckout}
          />
        </Animated.View>
      </ScrollView>
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
        source={require("../../assets/images/Big Craft Paper Bag With Rope Handles 3D Model.png")}
        className="object-contain w-24 h-24"
      />
      <Image
        source={require("../../assets/images/Ellipse1.png")}
        className="object-contain -z-10 -translate-y-9"
      />
      <Animated.View entering={FadeInDown.delay(350).duration(300)}>
        <Text className="font-Sora-Light text-center text-sm text-black z-10 max-w-xs -translate-y-7">
          Your cart is empty—time to fill it with your favorite beans and brews!
          ☕
        </Text>
      </Animated.View>
    </Animated.View>
  );
};
