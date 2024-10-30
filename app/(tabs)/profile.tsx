import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/plantly-button";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";

const Profile = () => {
  const toggleHasOnboarded = useUserStore(
    (store) => store.toggleHandleOnboarded
  );
  return (
    <View style={style.container}>
      <PlantlyButton title="Back to onboarding" onPress={toggleHasOnboarded} />
    </View>
  );
};

export default Profile;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colorWhite,
  },
});
