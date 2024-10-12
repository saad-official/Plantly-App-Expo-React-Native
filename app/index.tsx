import { View, Text, StyleSheet } from "react-native";
import React from "react";

const index = () => {
  return (
    <View style={style.container}>
      <Text>index</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default index;
