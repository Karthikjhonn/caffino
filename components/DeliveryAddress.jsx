import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Button from "./Button";
import { Ionicons } from "@expo/vector-icons";

export default function DeliveryAddress() {
  const [modalVisible, setModalVisible] = useState(false);
  const [notValid, setNotValid] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
  });

  const handleModel = () => {
    setModalVisible(!modalVisible);
  };
  const validateField = () => {
    if (userDetails.name && userDetails.address) {
      setNotValid(false);
      setModalVisible(!modalVisible);
    } else {
      setNotValid(true);
    }
  };
  return (
    <>
      <Text className="text-base font-Sora-SemiBold text-black ">
        Delivery Address
      </Text>
      {userDetails.name && (
        <Text className="text-sm font-Sora-SemiBold text-black mt-4 capitalize">
          {userDetails.name}
        </Text>
      )}
      {userDetails.address && (
        <Text className="text-xs font-Sora-Regular text-gray-400 tracking-wider mt-1 capitalize">
          {userDetails.address}
        </Text>
      )}
      <View className="mt-4 flex-row space-x-2 ">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleModel}
          className="bg-white border border-gray-400 rounded-full inline-flex px-3 py-1.5 flex-row space-x-1"
        >
          <FontAwesome name="edit" size={16} color="black" />
          <Text className="text-black font-Sora-Regular text-xs capitalize tracking-wider">
            Edit Address
          </Text>
        </TouchableOpacity>
        <View className="bg-white border border-gray-400 rounded-full inline-flex px-3 py-1.5 flex-row space-x-1">
          <MaterialCommunityIcons
            name="note-text-outline"
            size={16}
            color="black"
          />
          <Text className="text-black font-Sora-Regular text-xs capitalize tracking-wider">
            add notes
          </Text>
        </View>
      </View>
      <View className="w-[92%] mx-auto my-4 h-px bg-offgray "></View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModel}
      >
        <Pressable
          className="bg-black/50 flex-1 justify-end"
          onPress={handleModel}
        >
          <Pressable
            onPress={() => {}}
            className="bg-background  p-6 l h-full "
          >
            {/* Header  */}
            <View className="flex-row items-center space-x-4 mb-8 mt-1.5">
              <Pressable onPress={handleModel}>
                <Ionicons name="chevron-back" size={24} color="black" />
              </Pressable>
              <Text className="text-base font-Sora-SemiBold text-black ">
                Delivery Address
              </Text>
            </View>
            {/* delivery address from  */}
            <View className="space-y-2">
              <Text className="text-sm font-Sora-SemiBold text-black ">
                Name*
              </Text>
              <View className="px-3 bg-gray-50 border border-gray-200/75 rounded-xl min-h-[52px] justify-center">
                <TextInput
                  placeholder="Enter Name.."
                  placeholderTextColor="#e3e3e3"
                  value={userDetails.name}
                  className="font-Sora-Medium text-base text-black placeholder:text-gray-400"
                  onChangeText={(value) =>
                    setUserDetails((prevDetails) => ({
                      ...prevDetails,
                      name: value,
                    }))
                  }
                />
              </View>
            </View>
            <View className="space-y-2 mt-4">
              <Text className="text-sm font-Sora-SemiBold text-black ">
                Delivery Address*
              </Text>
              <View className="px-3 bg-gray-50 border border-gray-200/75 rounded-xl min-h-[52px] justify-center">
                <TextInput
                  placeholder="Enter Address.."
                  placeholderTextColor="#e3e3e3"
                  className="font-Sora-Medium text-base text-black placeholder:text-gray-400"
                  value={userDetails.address}
                  multiline={true}
                  numberOfLines={5}
                  style={{ textAlignVertical: "top" }}
                  onChangeText={(value) =>
                    setUserDetails((prevDetails) => ({
                      ...prevDetails,
                      address: value,
                    }))
                  }
                />
              </View>
            </View>
            {/* button  */}
            <View className="mt-auto">
              {notValid && (
                <Text className="font-Sora-Regular text-xs text-red-500 mb-1 text-center">
                  *Please enter valid details
                </Text>
              )}
              <Button
                title={
                  userDetails.name || userDetails.address ? "Update" : "Add"
                }
                onPress={validateField}
                style={"mt-0"}
              />
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
