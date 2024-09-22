import { View, Text, Pressable, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Style from "../../scripts/Style";

const DeleteCartItem = ({ data, updateCartStatus }) => {
  const handleRemove = (id) => {
    updateCartStatus({ id: id, cart: false }, "cart");
  };
  const [isFocused, setIsFocused] = useState(false);
  const handleOutsidePress = () => {
    if (isFocused) {
      setIsFocused(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View className="flex-row items-center" onPress={handleOutsidePress}>
        <Text
          className="capitalize text-base font-Sora-SemiBold text-black tracking-wide pe-0  grow"
          numberOfLines={1}
        >
          {data?.name}
        </Text>
        <Pressable
          className="w-6 h-6 justify-center items-center relative group/item"
          onPress={() => setIsFocused(!isFocused)}
        >
          <Ionicons name="ellipsis-vertical-sharp" size={14} color="black" />
          {isFocused && (
            <Pressable
              className="bg-white rounded-lg p-1.5 absolute -bottom-8 z-10 -left-14 shadow-2xl w-[74px] items-center active:bg-red-50 hid den"
              onPress={() => handleRemove(data?.id)}
              style={Style.shadow}
            >
              <Text className="text-sm tracking-wider font-Sora-Regular">
                Remove
              </Text>
            </Pressable>
          )}
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DeleteCartItem;
