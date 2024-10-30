import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { theme } from "@/theme";
import { PlantlyButton } from "@/components/plantly-button";

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
    <View style={style.container}>
      <PlantlyButton title="Let me in" onPress={handlePress} />
    </View>
  );
};

export default OnboardingScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colorWhite,
  },
});
