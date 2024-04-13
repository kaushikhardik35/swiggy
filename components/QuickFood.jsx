import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const QuickFood = () => {
  const data = [
    {
      id: "0",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
      name: "Pizza Hut",
      rating: 4.3,
      time: "30-40",
      offer: "50%",
    },
    {
      id: "1",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/535fc9f9c135f7982317bbb6a64a1ffc",
      name: "Mc Donald's",
      rating: 3.8,
      time: "30-40",
      offer: "60%",
    },
    {
      id: "2",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/utdm5imutolobwbtt562",
      name: "Hyderabadi Bawarchi",
      rating: 4.1,
      time: "25-35",
      offer: "55%",
    },
    {
      id: "3",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bngudbgsxwdx6wimjzfw",
      name: "Uttam Sweets",
      rating: 4.5,
      time: "20-30",
      offer: "30%",
    },
    {
      id: "4",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lnp9blusapv5d8kpdfnn",
      name: "Social",
      rating: 4.3,
      time: "30-40",
      offer: "60%",
    },
  ];
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Get it Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={{ margin: 10 }} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 5 / 6, height: 170 }}
              source={{ uri: item.image }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 27,
                  fontWeight: "900",
                  color: "white",
                }}
              >
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                {item.rating}
              </Text>
              <Text style={{ marginLeft: 3 }}>•</Text>
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                {item.time}mins
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({});
