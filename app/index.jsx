import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";

import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const Index = () => {
  const handleGetStartedPress = () => {
    router.push("/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ aspectRatio: 1, width: "100%" }}
            source={{
              uri: "https://i.pinimg.com/736x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg",
            }}
          ></ImageBackground>
        </View>
        <Pressable
          onPress={handleGetStartedPress}
          style={{ alignItems: "center" }}
        >
          <Text
            style={{
              backgroundColor: "#ee7f33",
              padding: 10,
              borderRadius: 10,
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Index;
