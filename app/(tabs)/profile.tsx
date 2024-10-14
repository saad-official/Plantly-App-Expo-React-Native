import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  return (
    <View>
      <Button title="LET me" onPress={() => router.replace("/onboarding")} />
    </View>
  );
};

export default Profile;
