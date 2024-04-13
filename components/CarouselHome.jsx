import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const CarouselHome = () => {
  const images = [
    "https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png",
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMXOJyM560DHByJmEl-BFIOKTDYfEZ-TVq1qBpzChRw&s",
  ];
  const titles = ["Hello", "hi", "yo"];
  return (
    <View>
      <SliderBox
        images={images}
        titles={titles}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "96%",
        }}
      />
    </View>
  );
};

export default CarouselHome;

const styles = StyleSheet.create({});
