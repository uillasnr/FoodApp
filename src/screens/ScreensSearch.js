import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import CardRestaurant from "../components/CardRestaurant";
import THEMES from "../styles/themes";
import Loading from "../components/Loading";
import { addFavoriteRestaurant, deleteFavoriteRestaurant } from "../services/api";

export default function ScreensSearch({ route}) {
  const [loading, setLoading] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState(route.params?.filteredRestaurants || []);


  const handleFavoriteAdd = async (id_company) => {
    await addFavoriteRestaurant(id_company);
    setFilteredRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.id_company === id_company ? { ...restaurant, favorite: "S" } : restaurant
      )
    );
  };


  const handleFavoriteRemove = async (id_company) => {
    await deleteFavoriteRestaurant(id_company);
    setFilteredRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.id_company === id_company ? { ...restaurant, favorite: "N" } : restaurant
      )
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {filteredRestaurants && filteredRestaurants.length > 0 ? (
        <FlatList
          data={filteredRestaurants}
          keyExtractor={(restaurant) => restaurant.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardRestaurant
              restaurant={item}
              isFavorites={false}
              onAdd={handleFavoriteAdd}
              onRemove={handleFavoriteRemove}
            />
          )}
        />
      ) : (
        <View style={styles.empty}>
          <Image source={require("../../assets/empty.png")} />
          <Text style={styles.text}>Nenhum restaurante encontrado.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.light.colors.white,
    padding: 12,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
    backgroundColor: THEMES.light.colors.white,
  },
  text: {
    color: THEMES.light.colors.dark_gray,
    fontSize: THEMES.light.FONT_SIZE.sm,
    textAlign: "center",
    marginTop: 20,
  },
});
