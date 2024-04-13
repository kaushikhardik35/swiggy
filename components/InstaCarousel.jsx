import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
const InstaCarousel = () => {
  const images = [
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_330,w_580/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/4/12/53b4e6d3-39c3-4264-af76-26c936c8cfcf_FOW553.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_330,w_580/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/4/13/32d4b889-b297-41c1-84fd-4f6c6e23583a_7241.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_330,w_580/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/4/13/dd6a3053-64fc-41b4-a9d7-137cc3bbfd65_851.png",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_330,w_580/rng/md/carousel/production/4a699f7417cd2332a7d9c30ff31bab3b",
    "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_330,w_580/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/4/9/c9ee9ce3-4117-42a4-aaa4-60144a8a56b8_871.png",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoplay
        sliderBoxHeight={200}
        sliderBoxWidth={100}
        autoplayInterval={200}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        circleLoop
        ImageComponentStyle={{
          borderRadius: 6,
          width: "96%",
        }}
      />
    </View>
  );
};

export default InstaCarousel;

const styles = StyleSheet.create({});
