import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "@/theme";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link asChild href="/new">
              <Pressable style={{ marginRight: 18 }} hitSlop={20}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
