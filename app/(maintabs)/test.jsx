import { View, Text, ScrollView, Image ,Button} from "react-native";
import React, { useEffect, useState } from "react";
import { useFocusEffect } from "expo-router";
import { sampleApis } from "../../api/ApiIndex";
import sbData from "../../sbdata.json";
import sb2Data from "../../sb2data.json";
const test = () => {
  const [data, setData] = useState(null);
  const toGet = async () => {
    const res = await sampleApis();
    // console.log(res);
    if (res.status == 200) {
      setData(res.data);
      console.log(res.data);
    }
  };
  useEffect(() => {
    // toGet();
  }, []);
  return (
    <View className="bg-background  flex-1 ">
      <ScrollView className="">
        <View className="flex-1  bg-sky- 50 p-6 space-y-4 pb-28">
          <Button title="home" />
          {sb2Data?.map((data, i) => (
            <View className="bg-gray-300 rounded-2xl h-52" key={i}>
              <Image
                src={data?.image}
                className="w-full h-full object-cover  rounded-2xl"
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default test;
