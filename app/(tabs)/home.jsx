import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/searchBar";
import AddressBarSwiggy from "../../components/addressBarSwiggy";
import Carousel from "../../components/Carousel";
import { Redirect, router } from "expo-router";
const Home = () => {
  const handlePress = () => {
    router.push("/instamart");
  };
  const handlePress2 = () => {
    router.push("/food");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AddressBarSwiggy />
        <SearchBar content="Search for 'Pizza'" />

        {/* Large Image */}
        <Pressable onPress={handlePress} style={styles.imageContainer}>
          <Image
            style={{ resizeMode: "stretch", width: "100%", height: 150 }}
            source={require("../../assets/imgHome1.png")}
          />
        </Pressable>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View style={{ resizeMode: "stretch", width: "49%", marginRight: 10 }}>
          <Pressable onPress={handlePress2} style={styles.imageContainer}>
            <Image
              style={{
                resizeMode: "stretch",
                width: "100%",
                height: 240,
                borderRadius: 30,
              }}
              source={require("../../assets/foodDelivery.png")}
            />
          </Pressable>
          <Pressable onPress={handlePress2} style={styles.imageContainer}>
            <Image
              style={{
                resizeMode: "stretch",
                width: "100%",
                height: 120,
                borderRadius: 20,
              }}
              source={require("../../assets/Dineout.png")}
            />
          </Pressable>
        </View>
        <View style={{ resizeMode: "stretch", width: "49%" }}>
          <Pressable onPress={handlePress} style={styles.imageContainer}>
            <Image
              style={{
                resizeMode: "stretch",
                width: "100%",
                height: 155,
                borderRadius: 20,
              }}
              source={require("../../assets/Instamart.png")}
            />
          </Pressable>
          <Pressable onPress={handlePress} style={styles.imageContainer}>
            <Image
              style={{
                resizeMode: "stretch",
                width: "100%",
                height: 60,
                borderRadius: 10,
              }}
              source={require("../../assets/Genie.png")}
            />
          </Pressable>
          <Pressable onPress={handlePress} style={styles.imageContainer}>
            <Image
              style={{
                resizeMode: "stretch",
                width: "100%",
                height: 60,
                borderRadius: 10,
              }}
              source={require("../../assets/Minis.png")}
            />
          </Pressable>
          <Pressable onPress={handlePress} style={styles.imageContainer}>
            <Image
              style={{
                resizeMode: "stretch",
                width: "100%",
                height: 60,
                borderRadius: 10,
              }}
              source={require("../../assets/Insanelygood.png")}
            />
          </Pressable>
        </View>
      </View>

      {/* Small Image Grid */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 7,
    flexDirection: "column",
  },
  imageContainer: {
    marginVertical: 5,
    borderRadius: 10,
    //overflow: "hidden",
  },
  largeImage: {
    resizeMode: "cover",
    width: "100%",
    height: 150,
  },
  smallImageGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  smallImageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  smallImage: {
    resizeMode: "cover",
    width: "100%",
    height: 100,
  },
});

export default Home;
