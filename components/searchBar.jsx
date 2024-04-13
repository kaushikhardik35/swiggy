import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";

const SearchBar = ({ content }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "gray",
        margin: 6,
        marginTop: 0,
        padding: 5,
        borderRadius: 8,
        backgroundColor: "white",
      }}
    >
      <TextInput placeholder={content} style={{ marginLeft: 6 }} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AntDesign
          name="search1"
          size={20}
          color="gray"
          style={{
            marginRight: 10,
          }}
        />
        <Text style={{ marginRight: 10, height: 20 }}>|</Text>
        <FontAwesome name="microphone" size={20} color="orange" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
