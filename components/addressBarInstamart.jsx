import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
const AddressBarInstamart = () => {
  const address = [
    {
      main: "1234",
      full: "123456v jfvkfdkbkhb fvbkfbkbkf jbfkjvsabh hdjhjhvv hdhvvjzf",
    },
    { main: "1234", full: "123456v jfvkfdkbkhb fvbkfbkbkf jbfkjvf" },
  ];
  const [selectedAddress, setSelectedAddress] = useState(address[0]);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 6,
        marginBottom: 0,
        padding: 5,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 0,
          padding: 3,
          borderRadius: 10,

          backgroundColor: "#eb5733",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
          }}
        >
          <Text style={{ color: "white" }}> {9}</Text>
        </View>
        <View>
          <Text style={{ color: "white" }}> {"MINS"}</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 0,
          padding: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            margin: 0,
          }}
        >
          <Text> {selectedAddress.main}</Text>
        </View>
        <View>
          <Text> {selectedAddress.full.substring(0, 40)}</Text>
        </View>
      </View>
      <FontAwesome name="user-circle" size={24} color="gray" />
    </View>
  );
};

export default AddressBarInstamart;

const styles = StyleSheet.create({});
