import { Pressable, Modal } from "react-native";
import React from "react";
import { Easing } from "react-native-reanimated";
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
      <Animated.View
        entering={FadeIn.duration(100)}
        exiting={FadeOut.duration(100)}
        className="flex-1"
      >
        <Pressable
          className="bg-black/50  flex-1 justify-end"
          onPress={handleModel}
        >
          <Animated.View
            entering={SlideInDown.duration(300).easing(Easing.out(Easing.exp))}
            exiting={SlideOutDown.duration(300).easing(Easing.in(Easing.exp))}
          >
            {children}
          </Animated.View>
        </Pressable>
      </Animated.View>
    </Modal>
  );
};

export default BottomSheet;
