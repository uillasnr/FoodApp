import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Color from "../styles/Color";
import { restaurantes } from "../dados";
import CardRestaurant from "../components/CardRestaurant";

export default function ScreenFavorites() {
  const vazio = [];
  return (
    <View style={styles.container}>
      {restaurantes.length > 0 ? (
        <FlatList
          data={restaurantes}
          keyExtractor={(restaurant) => restaurant.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardRestaurant restaurantes={[item]} isFavorites={true} />
          )}
        />
      ) : (
        <View style={styles.empty}>
          <Image source={require("../../assets/empty.png")} />
          <Text style={styles.text}>
            Nenhum restaurante favorito encontrado.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.COLORS.white,
    padding: 12,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
    backgroundColor: Color.COLORS.white,
  },
  text: {
    color: Color.COLORS.dark_gray,
    fontSize: Color.FONT_SIZE.sm,
    textAlign: "center",
    marginTop: 20,
  },
});
