import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Pressable,
  Image,
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
import AddressBarInstamart from "../../components/addressBarInstamart";
import InstaTypes from "../../components/InstaTypes";
import ShopByStore from "../../components/ShopByStore";
import InstaCarousel from "../../components/InstaCarousel";
import InstaScroll from "../../components/InstaScroll";
const Instamart = () => {
  return (
    <ScrollView style={{ marginTop: 0, backgroundColor: "#ffffff" }}>
      <View style={{ marginTop: 30, backgroundColor: "#f8deee" }}>
        {/* Search Bar  */}
        <AddressBarInstamart />
        <SearchBar content="Search for 'Paneer'" />
      </View>
      {/* Image slider Component */}
      <Image
        style={{ resizeMode: "stretch", width: "100%", height: 150 }}
        source={require("../../assets/imgInsta1.png")}
      />
      <InstaTypes />
      <Image
        style={{
          resizeMode: "stretch",
          width: "100%",
          height: 70,
          marginTop: 0,
        }}
        source={require("../../assets/freeSugarBanner.png")}
      />
      <InstaCarousel />
      <ShopByStore />
      <Image
        style={{
          resizeMode: "stretch",
          width: "100%",
          height: 300,
          marginTop: 0,
        }}
        source={require("../../assets/SummerStore.png")}
      />
      <InstaScroll
        content={"Big Packs, Big Savings"}
        data={[
          {
            id: "0",
            image:
              "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/76931469f3b42e3b381b4f36929cd153",
            name: "Besan",
            rating: 4.3,
            qty: "1kg",
            time: "30-40",
            orgPrice: 160,
            newPrice: 106,
            offer: "50%",
          },
          {
            id: "0",
            image:
              "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/5031f95ab76e21e170c5a8a561e3631c",
            name: "Supreme Aata",
            rating: 4.3,
            qty: "10kg",
            time: "30-40",
            orgPrice: 475,
            newPrice: 423,
            offer: "50%",
          },
          {
            id: "0",
            image:
              "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/76931469f3b42e3b381b4f36929cd153",
            name: "Besan",
            rating: 4.3,
            qty: "1kg",
            time: "30-40",
            orgPrice: 160,
            newPrice: 106,
            offer: "50%",
          },
          {
            id: "0",
            image:
              "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/5031f95ab76e21e170c5a8a561e3631c",
            name: "Supreme Aata",
            rating: 4.3,
            qty: "10kg",
            time: "30-40",
            orgPrice: 475,
            newPrice: 423,
            offer: "50%",
          },
          {
            id: "0",
            image:
              "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/76931469f3b42e3b381b4f36929cd153",
            name: "Besan",
            rating: 4.3,
            qty: "1kg",
            time: "30-40",
            orgPrice: 160,
            newPrice: 106,
            offer: "50%",
          },
        ]}
      />

      <InstaScroll
        content={"Irresistable deals for You"}
        data={[
          {
            id: "0",
            image:
              "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/NI_CATALOG/IMAGES/CIW/2024/3/25/856ff064-bd7e-4892-85db-a3b45c6dbc03_instantnoodlesandpasta_TNMFP0OWT3_MN.png",
            name: "Maggie",
            rating: 4.3,
            qty: "840g",
            time: "30-40",
            orgPrice: 168,
            newPrice: 153,
            offer: "50%",
          },
          {
            id: "0",
            image:
              "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/9d040d1960b9b782ffd48a8f364a3b23",
            name: "Red Bull",
            rating: 4.3,
            qty: "250ml",
            time: "30-40",
            orgPrice: 125,
            newPrice: 120,
            offer: "50%",
          },
          {
            id: "0",
            image:
              "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/76931469f3b42e3b381b4f36929cd153",
            name: "Besan",
            rating: 4.3,
            qty: "1kg",
            time: "30-40",
            orgPrice: 160,
            newPrice: 106,
            offer: "50%",
          },
          {
            id: "0",
            image:
              "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/5031f95ab76e21e170c5a8a561e3631c",
            name: "Supreme Aata",
            rating: 4.3,
            qty: "10kg",
            time: "30-40",
            orgPrice: 475,
            newPrice: 423,
            offer: "50%",
          },
          {
            id: "0",
            image:
              "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/76931469f3b42e3b381b4f36929cd153",
            name: "Besan",
            rating: 4.3,
            qty: "1kg",
            time: "30-40",
            orgPrice: 160,
            newPrice: 106,
            offer: "50%",
          },
        ]}
      />
    </ScrollView>
  );
};

export default Instamart;

const styles = StyleSheet.create({});
