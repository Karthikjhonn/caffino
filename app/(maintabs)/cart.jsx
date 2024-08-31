import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";
import CartCard from "../../components/cart/CartCard";
import data from "../../data.json"

export default function cart() {
  const [total, setTotal] = useState(0);
  function calculateTotal(price, count, type = "add") {
    console.log("price", price);
    console.log("count", count);
    const total = price;
    if (type === "add") {
      console.log("Total", total);
      setTotal((prevTotal) => prevTotal + total);
    } else if (type === "minus") {
      console.log("Total", total);
      setTotal((prevTotal) => prevTotal - total);
    }
  }
  return (
    <View className="bg-background flex-1">
      <ScrollView className="">
        {data.map((data) => (
          <CartCard
            data={data}
            calculateTotal={calculateTotal}
            key={data?.id}
          />
        ))}
        <View className="mt-6 px-5">
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
        </View>
        <View className="px-6 mb-16 py-6 mt-auto">
          <Button title="Proceed to checkout" style={"mt-0"} />
        </View>
      </ScrollView>
    </View>
  );
}
