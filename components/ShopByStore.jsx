import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const ShopByStore = () => {
  const types = [
    {
      id: "0",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_236,w_160/rng/md/carousel/production/9504ba55ed71ee5171259c0e20748808",
      name: "Electronic Store",
    },
    {
      id: "1",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_236,w_160/rng/md/carousel/production/a2ea3ead456b87c3cdf1b36edc60d3a5",
      name: "Electronic Store",
    },
    {
      id: "2",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_236,w_160/rng/md/carousel/production/9504ba55ed71ee5171259c0e20748808",
      name: "Electronic Store",
    },
    {
      id: "3",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_236,w_160/rng/md/carousel/production/a2ea3ead456b87c3cdf1b36edc60d3a5",
      name: "Electronic Store",
    },
    {
      id: "4",
      image:
        "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_236,w_160/rng/md/carousel/production/9504ba55ed71ee5171259c0e20748808",
      name: "Electronic Store",
    },
  ];

  return (
    <View>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 20,
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        Shop By Store
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View style={{ margin: 10 }} key={index}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 70, height: 110, borderRadius: 0 }}
            />
            {/* <Text style={{ marginTop: 6, textAlign: "center", width: 70 }}>
              {item.name}
            </Text> */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ShopByStore;

const styles = StyleSheet.create({});
