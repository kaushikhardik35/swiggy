import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const AddressBarSwiggy = () => {
  const address = [
    {
      main: "Ashok Vihar",
      full: "H.No 123 Ashok Vihar Sonipat 131001",
    },
    { main: "Sector 23", full: "H.No 123 Sector 23 Sonipat 131001" },
  ];
  const [selectedAddress, setSelectedAddress] = useState(address[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const changeAddress = (newAddress) => {
    setSelectedAddress(newAddress);
    setModalVisible(false);
  };

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
      <TouchableOpacity onPress={() => setModalVisible(true)}>
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
            <FontAwesome name="location-arrow" size={24} color="orange" />
            <Text> {selectedAddress.main}</Text>
          </View>
          <View>
            <Text> {selectedAddress.full.substring(0, 40)}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <FontAwesome name="user-circle" size={24} color="gray" />

      {/* Modal for address selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {address.map((addr, index) => (
              <TouchableOpacity
                style={styles.addressItem}
                key={index}
                onPress={() => changeAddress(addr)}
              >
                <Text style={styles.addressText}>{addr.full}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={[styles.addressText, styles.cancelText]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  addressItem: {
    height: 40,
    justifyContent: "center",
  },
  addressText: {
    fontSize: 16,
    color: "black",
  },
  cancelText: {
    color: "blue",
    marginTop: 10,
  },
});

export default AddressBarSwiggy;
