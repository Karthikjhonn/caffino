import { View, Text, Button, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function home() {
  const [showDetails, setShowDetails] = useState(false);
 
  return (
    <SafeAreaView className='bg-background flex-1'>
      <Text>home</Text>
      <Button
        title="details"
        onPress={() => {
          setShowDetails(true);
        }}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={showDetails}
        onDismiss={() => {
          setShowDetails(false);
        }}
        onRequestClose={() => {
          setShowDetails(false);
        }}
      >
        <Text className="bg-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          deleniti aut, libero voluptatibus assumenda ipsum odio commodi
          consectetur ipsam delectus quos! Numquam saepe rerum animi assumenda
          repellat soluta? Placeat aperiam, a perferendis doloremque vel nam
          aliquid totam veritatis deleniti! Adipisci autem rerum debitis aut, a
          deserunt distinctio dolores commodi nulla!
        </Text>
        <Button
          title="click"
          onPress={() => {
            setShowDetails(false);
          }}
        />
      </Modal>
    </SafeAreaView>
  );
}
