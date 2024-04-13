import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const handleLoginPress = () => {
    router.push("/otp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{ borderRadius: 6 }}
        style={styles.backgroundImage}
        source={{
          uri: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq",
        }}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>
            Enter your phone number to proceed
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          <Pressable onPress={handleLoginPress} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF4500",
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Login;
