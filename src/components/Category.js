import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { getCategory } from "../services/api";
import THEMES from "../styles/themes";

export default function Category({ onCategoryPress }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategory();

        setCategories(data);
      } catch (error) {
        console.error("Error loading categories", error);
      }
    };

    loadCategories();
  }, []);

  const handleCategoryPress = (category) => {
    onCategoryPress("", category.category_id, ""); 
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.category_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCategoryPress(item)}
          >
            <Image source={{ uri: item.icon }} style={styles.image} />
            <Text style={styles.text}>{item.category}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
    width: 150,
    height: 50,
    backgroundColor: THEMES.light.colors.light_gray,
    borderRadius: 30,
    padding: 5,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 50,
    backgroundColor: THEMES.light.colors.gray,
  },
  text: {
    fontSize: THEMES.light.FONT_SIZE.sm,
    fontWeight: "bold",
    color: THEMES.light.colors.dark_gray,
    marginLeft: 10,
  },
});
