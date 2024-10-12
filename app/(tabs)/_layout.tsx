import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack, Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
const hasFinishedOnboarding = true;

const Layout = () => {
  if (!hasFinishedOnboarding) return <Redirect href="/onboarding" />;

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
