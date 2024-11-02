import React from "react";
import { Image, useWindowDimensions } from "react-native";

export const PlantlyImage = () => {
  const { width } = useWindowDimensions();
  const imgSize = Math.min(width / 1.5, 400);
  return (
    <Image
      source={require("@/assets/images/plantly.png")}
      style={{ width: imgSize, height: imgSize }}
    />
  );
};
