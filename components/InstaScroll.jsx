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

const InstaScroll = ({ content, data }) => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>{content}</Text>
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
                  bottom: -5,
                  left: 10,
                  fontSize: 15,
                  fontWeight: "900",
                  color: "green",
                }}
              >
                Rs{item.orgPrice - item.newPrice} OFF
              </Text>
            </ImageBackground>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
              {item.name} ({item.qty})
            </Text>
            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: 3,
              }}
            >
              <Text
                style={{
                  marginLeft: 3,
                  fontSize: 10,
                  fontWeight: "400",
                  textDecorationLine: "line-through",
                  color: "gray",
                }}
              >
                ₹ {item.orgPrice}
              </Text>
              {/* <MaterialIcons name="stars" size={24} color="green" /> */}
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                ₹ {item.newPrice}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default InstaScroll;

const styles = StyleSheet.create({});
