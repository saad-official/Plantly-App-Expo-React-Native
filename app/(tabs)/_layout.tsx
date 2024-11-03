import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, Redirect, Stack, Tabs } from "expo-router";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";

const Layout = () => {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );
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
          headerRight: () => (
            <Link asChild href="/new">
              <Pressable style={{ marginRight: 18 }} hitSlop={20}>
                <AntDesign name="pluscircleo" size={24} color="green" />
              </Pressable>
            </Link>
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
