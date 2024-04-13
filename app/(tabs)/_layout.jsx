import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import icons from "../../constants/icons";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 25, height: 25 }}
      />
      <Text style={{ color: color, fontSize: 10 }}>{name}</Text>
    </View>
  );
  r;
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#161622",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#F6F5F2",
            borderTopWidth: 1,
            height: 55,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Swiggy",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Swiggy"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="food"
          options={{
            title: "Food",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Food"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="instamart"
          options={{
            title: "Instamart",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.upload}
                color={color}
                name="Instamart"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="credit"
          options={{
            title: "Credit",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;
