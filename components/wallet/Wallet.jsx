import { View, Text, Modal, Pressable, Image } from "react-native";
import React, { useState } from "react";
import Button from "../Button";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RadioButton } from "react-native-paper";
import Loader from "../Loader";
const Wallet = ({placeOrder}) => {
  const [walletType, setWalletType] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("cash/wallet");
  const [orderLoader, setOrderLoader] = useState(false);
  const handleModel = () => {
    setModalVisible(!modalVisible);
  };
  const handleOrder = () => {
    setOrderLoader(true)
    setTimeout(() => {
      setOrderLoader(false);
      placeOrder();
    }, 1500);
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
        <Button
          title={orderLoader ? <Loader /> : "Order"}
          style={"my-auto"}
          onPress={handleOrder}
        />
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
                <View className="relative ">
                  <Image
                    source={require("../../assets/images/wallet/Wallet.png")}
                    className="w-5 h-5 object-contain absolute top-4 left-0"
                  />
                  <RadioButton.Item
                    label="cash/wallet"
                    value="cash/wallet"
                    labelStyle={{ fontFamily: "Sora-Regular" }}
                    style={{
                      paddingLeft: 32,
                      paddingVertical: 4,
                      marginBottom: 4,
                    }}
                    color="#C67C4E"
                  />
                </View>

                <View className="relative">
                  <Image
                    source={require("../../assets/images/wallet/Google Pay India.png")}
                    className="w-5 h-5 object-contain absolute top-4 left-0"
                  />
                  <RadioButton.Item
                    label="Google pay/UPI"
                    value="Google pay/UPI"
                    color="#C67C4E"
                    labelStyle={{ fontFamily: "Sora-Regular" }}
                    style={{
                      paddingLeft: 32,
                      paddingVertical: 4,
                      marginBottom: 4,
                    }}
                  />
                </View>
                <View className="relative">
                  <Image
                    source={require("../../assets/images/wallet/Mastercard Logo.png")}
                    className="w-5 h-5 object-contain absolute top-4 left-0"
                  />
                  <RadioButton.Item
                    label="Debit card"
                    value="Debit card"
                    color="#C67C4E"
                    labelStyle={{ fontFamily: "Sora-Regular" }}
                    style={{
                      paddingLeft: 32,
                      paddingVertical: 4,
                      marginBottom: 4,
                    }}
                  />
                </View>
                <View className="relative">
                  <Image
                    source={require("../../assets/images/wallet/PayPal.png")}
                    className="w-5 h-5 object-contain absolute top-4 left-0"
                  />
                  <RadioButton.Item
                    label="Pay pal"
                    value="pay pal"
                    color="#C67C4E"
                    labelStyle={{ fontFamily: "Sora-Regular" }}
                    style={{
                      paddingLeft: 32,
                      paddingVertical: 4,
                      marginBottom: 4,
                    }}
                  />
                </View>
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
