import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const InstaTypes = () => {
  const types = [
    {
      id: "0",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/ef6d7392cc14c4e55fd32508a8b8b80b",
      name: "Fresh Vegetables",
    },
    {
      id: "1",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/c43b1c10d05060ccc7d9a98a1196eb27",
      name: "Dairy",
    },
    {
      id: "2",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/be95bae382a07f841bb040d58c300003",
      name: "Munchies",
    },
    {
      id: "3",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/d113e476185a8537f200eaa464cf33c7",
      name: "Biscuits & Cakes",
    },
    {
      id: "4",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/a312feaf33c92758a74cb06307e216a6",
      name: "Paan Corner",
    },
  ];

  return (
    <View>
      <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "500" }}>
        Shop By Category
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View style={{ margin: 10 }} key={index}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 70, height: 70, borderRadius: 40 }}
            />
            <Text style={{ marginTop: 6, textAlign: "center", width: 70 }}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default InstaTypes;

const styles = StyleSheet.create({});
