import { View, Text, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import Button from "../Button";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RadioButton } from "react-native-paper";
const Wallet = () => {
  const [walletType, setWalletType] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("cash/wallet");
  const handleModel = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <View className="flex-row justify-between items-center mb-5">
        <View className=" space-x-2 flex-row items-center">
          <View className="w-11 h-11 rounded-full justify-center items-center">
            <Ionicons name="wallet-outline" size={24} color="#c67c4e" />
          </View>
          <View>
            <Text className="text-sm font-Sora-SemiBold text-black capitalize tracking-wider">
              {value}
            </Text>
            {value == "cash/wallet" && (
              <Text className="text-xs font-Sora-SemiBold text-accent mt-1">
                $ 6.56
              </Text>
            )}
          </View>
        </View>
        <Pressable
          className="w-11 h-11 rounded-full justify-center items-center active:bg-gray-50"
          onPress={handleModel}
        >
          <Entypo name="chevron-thin-down" size={24} color="black" />
        </Pressable>
      </View>
      <View className="grow w-full">
        <Button title="Order" style={"my-auto"} />
      </View>
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
            className="bg-white rounded-t-2xl p-6 l max-h-[400px] "
          >
            <Text className="text-base font-Sora-SemiBold mb-4 text-black ">
              Choose payment
            </Text>
            <View className="">
              <RadioButton.Group
                onValueChange={(value) => setValue(value)}
                value={value}
              >
                <RadioButton.Item
                  label="cash/wallet"
                  value="cash/wallet"
                  labelStyle={{ fontFamily: "Sora-Regular" }}
                  style={{
                    paddingLeft: 0,
                    paddingVertical: 4,
                    marginBottom: 4,
                  }}
                  color="#C67C4E"
                />
                <RadioButton.Item
                  label="Google pay/UPI"
                  value="Google pay/UPI"
                  color="#C67C4E"
                  labelStyle={{ fontFamily: "Sora-Regular" }}
                  style={{
                    paddingLeft: 0,
                    paddingVertical: 4,
                    marginBottom: 4,
                  }}
                />
                <RadioButton.Item
                  label="Debit card"
                  value="Debit card"
                  color="#C67C4E"
                  labelStyle={{ fontFamily: "Sora-Regular" }}
                  style={{
                    paddingLeft: 0,
                    paddingVertical: 4,
                    marginBottom: 4,
                  }}
                />
                <RadioButton.Item
                  label="Pay pal"
                  value="pay pal"
                  color="#C67C4E"
                  labelStyle={{ fontFamily: "Sora-Regular" }}
                  style={{
                    paddingLeft: 0,
                    paddingVertical: 4,
                    marginBottom: 4,
                  }}
                />
              </RadioButton.Group>

              <View className="mt-4">
                <Button title="Proceed" onPress={handleModel} />
              </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

export default Wallet;
