import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import Button from "./Button";
import BottomSheet from "./common/BottomSheet";
import EvilIcons from "@expo/vector-icons/EvilIcons";
export default function Discount() {
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState(null);
  const handleModel = () => {
    setModalVisible(!modalVisible);
  };
  console.log(code);
  const applyCode = () => {
    console.log("apply");

    if (code !== "" && code != null) {
      console.log("apply in", code);
      handleModel();
    }
  };
  return (
    <>
      <TouchableOpacity
        onPress={handleModel}
        activeOpacity={0.7}
        className="bg-white min-h-[56px] rounded-2xl border active:bg-gray-50 border-gray-300 flex-row justify-between px-4 items-center"
      >
        <View className="space-x-4 flex-row items-center">
          <MaterialIcons name="discount" size={24} color="#c67c4e" />
          <Text className="font-Sora-SemiBold text-sm tracking-wide text-black">
            1 Discount is Applies
          </Text>
        </View>
        <View className="flex-row items-center space-x-2">
          {code && (
            <View className="bg-emerald-500  rounded-full w-5 h-5 justify-center items-center">
              <Text className="font-Sora-SemiBold text-sm tracking-wide   text-white">
                1
              </Text>
            </View>
          )}
          <Feather name="chevron-right" size={24} color="#313131" />
        </View>
      </TouchableOpacity>

      <BottomSheet handleModel={handleModel} modalVisible={modalVisible}>
        <Pressable
          onPress={() => {}}
          className="bg-white rounded-t-2xl p-6 l max-h-[400px] "
        >
          <Text className="text-base font-Sora-SemiBold mb-4 text-black ">
            Apply Coupon
          </Text>
          <View className="">
            <View className="px-3 bg-gray-50 border border-gray-200/75 rounded-xl min-h-[52px] justify-center">
              <TextInput
                placeholder="Enter coupon code.."
                placeholderTextColor="#e3e3e3"
                className="font-Sora-Medium text-base text-black placeholder:text-gray-400"
                onChangeText={(e) => setCode(e)}
                value={code || ""}
              />
              {code && (
                <Pressable
                  className="absolute right-0 items-center justify-center rounded-full active:bg-gray-100/75 h-full w-12"
                  onPress={() => setCode("")}
                >
                  <EvilIcons name="close" size={24} color="black" />
                </Pressable>
              )}
            </View>
            <Text className="font-Sora-Regular text-xs mt-2 px-px text-gray-500">
              *As a token of our appreciation, enjoy 10% off your first order!
              Use code WELCOME10 at checkout.
            </Text>
            <View className="mt-4">
              <Button title="Apply" onPress={applyCode} />
            </View>
          </View>
        </Pressable>
      </BottomSheet>
    </>
  );
}
