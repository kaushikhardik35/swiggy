import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const FoodTypes = () => {
  const types = [
    {
      id: "0",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
      name: "Biriyani",
    },
    {
      id: "1",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
      name: "Pizza",
    },
    {
      id: "2",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      name: "Burger",
    },
    {
      id: "3",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
      name: "Salad",
    },
    {
      id: "4",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
      name: "Pav Bhaji",
    },
  ];

  return (
    <View>
      <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "500" }}>
        What's On your Mind
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View style={{ margin: 10 }} key={index}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 70, height: 70, borderRadius: 40 }}
            />
            {/* <Text style={{ marginTop: 6, textAlign: "center" }}>
              {item.name}
            </Text> */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodTypes;

const styles = StyleSheet.create({});
