import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CardRestaurant from "./CardRestaurant";
import THEMES from "../styles/themes";

const RestaurantHighlights = ({ props, highlights, onFavoriteAdd, onFavoriteRemove, onOpenMenu }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <FlatList
        data={highlights}
        extraData={highlights} 
        keyExtractor={(item) => item.id_company.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardRestaurant
            restaurant={item}
            isHomeScreen={true}
            onPress={() => onOpenMenu(item)}
            onAdd={onFavoriteAdd}
            onRemove={onFavoriteRemove}
            props={props}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    color: THEMES.light.colors.dark_gray,
    fontSize: THEMES.light.FONT_SIZE.sm,
    textAlign: "left",
    marginVertical: 10,
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  emptyText: {
    color: "#888",
    fontSize: 16,
  },
});

export default RestaurantHighlights;
