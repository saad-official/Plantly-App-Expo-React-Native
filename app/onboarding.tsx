import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { theme } from "@/theme";
import { PlantlyButton } from "@/components/plantly-button";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { PlantlyImage } from "@/components/plantly-image";

const OnboardingScreen = () => {
  const toggleHasOnboarded = useUserStore(
    (state) => state.toggleHandleOnboarded
  );
  const router = useRouter();

  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/");
  };
  return (
    <LinearGradient
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={style.container}
    >
      <StatusBar style="light" />
      <View>
        <Text style={style.heading}>Plantly</Text>
        <Text style={style.tagling}>
          Keep your plants healthy and hyderated
        </Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="Let me in" onPress={handlePress} />
    </LinearGradient>
  );
};

export default OnboardingScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: theme.colorWhite,
  },
  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  tagling: {
    fontSize: 24,
    color: theme.colorWhite,
    textAlign: "center",
  },
});
