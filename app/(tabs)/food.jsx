import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../../components/Carousel";
import SearchBar from "../../components/searchBar";
import AddressBarSwiggy from "../../components/addressBarSwiggy";
import FoodTypes from "../../components/FoodTypes";
import QuickFood from "../../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "../../components/MenuItem";
const Food = () => {
  const data = [
    {
      id: "0",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wsgcovdue5wgqk4hzqjh",
      name: "Punjabi Tadka",
      rating: 4.4,
      time: "30-40",
      adress: "Subash Chowk , Sonipat",
      ratings: "1k",
      cost_for_two: 500,
      cuisines: "north Indian, South Indian",
    },
    {
      id: "1",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wsgcovdue5wgqk4hzqjh",
      name: "Punjabi Tadka",
      rating: 4.4,
      time: "30-40",
      adress: "Subash Chowk , Sonipat",
      ratings: "1k",
      cost_for_two: 500,
      cuisines: "north Indian, South Indian",
    },
    {
      id: "2",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wsgcovdue5wgqk4hzqjh",
      name: "Punjabi Tadka",
      rating: 4.4,
      time: "30-40",
      adress: "Subash Chowk , Sonipat",
      ratings: "1k",
      cost_for_two: 500,
      cuisines: "north Indian, South Indian",
    },
  ];
  return (
    <ScrollView style={{ marginTop: 0 }}>
      <View style={{ marginTop: 30, backgroundColor: "#F9E8D9" }}>
        {/* Search Bar  */}
        <AddressBarSwiggy />
        <SearchBar content="Search 'Paneer Tikka'" />
      </View>
      {/* Image slider Component */}
      <Carousel />
      <FoodTypes />
      <QuickFood />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
            justifyContent: "center",
          }}
        >
          <Text style={{ marginRight: 6 }}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>

        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width: 120,
          }}
        >
          <Text>Sort By Rating</Text>
        </Pressable>

        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text>Sort By Price</Text>
        </Pressable>
      </View>
      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default Food;

const styles = StyleSheet.create({});
