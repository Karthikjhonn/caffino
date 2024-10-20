import { View, Text, Pressable, Modal, Image } from "react-native";
import React, { useState } from "react";
import Animated from "react-native-reanimated";
import {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";
const BottomSheet = ({ children, handleModel, modalVisible }) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleModel}
    >
      <Animated.View entering={FadeIn} exiting={FadeOut} className="flex-1">
        <Pressable
          className="bg-black/50  flex-1 justify-end"
          onPress={handleModel}
        >
          <Animated.View
            entering={SlideInDown.duration(250)}
            exiting={SlideOutDown.duration(250)}
          >
            {children}
          </Animated.View>
        </Pressable>
      </Animated.View>
    </Modal>
  );
};

export default BottomSheet;
