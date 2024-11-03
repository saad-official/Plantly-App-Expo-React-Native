import React from "react";
import { Image, useWindowDimensions } from "react-native";

type Props = {
  size?: number;
};

export const PlantlyImage = ({ size }: Props) => {
  const { width } = useWindowDimensions();
  const imgSize = size ?? Math.min(width / 1.5, 400);
  return (
    <Image
      source={require("@/assets/images/plantly.png")}
      style={{ width: imgSize, height: imgSize }}
    />
  );
};
