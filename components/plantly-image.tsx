import React from "react";
import { Image, useWindowDimensions } from "react-native";

type Props = {
  size?: number;
  imgUri?: string;
};

export const PlantlyImage = ({ size, imgUri }: Props) => {
  const { width } = useWindowDimensions();
  const imgSize = size ?? Math.min(width / 1.5, 400);
  return (
    <Image
      source={imgUri ? { uri: imgUri } : require("@/assets/images/plantly.png")}
      style={{ width: imgSize, height: imgSize, borderRadius: 6 }}
    />
  );
};
