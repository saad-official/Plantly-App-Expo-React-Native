import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { theme } from "@/theme";
import { usePlantStore } from "@/store/plantStore";
import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/plantly-button";
import { useRouter } from "expo-router";

const index = () => {
  const navigate = useRouter();
  const plants = usePlantStore((state) => state.plants);
  console.log("plants", plants);
  return (
    <FlatList
      style={style.container}
      contentContainerStyle={style.contentConatiner}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => navigate.navigate("/new")}
        />
      }
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
    />
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentConatiner: {
    padding: 12,
  },
});
export default index;
