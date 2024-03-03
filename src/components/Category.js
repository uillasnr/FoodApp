import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../styles/Color";
import api from "../services/api";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get("categories");
        setCategories(data);
      } catch (error) {
        console.error("Falha ao buscar categorias:", error);
      }
    }

    loadCategories();
  }, []);

  const handleCategoryPress = (category) => {
    navigation.navigate("ProductDetails", { categoryId: category.id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCategoryPress(item)}
          >
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
  },
  card: {
    marginTop: 20,
    width: 150,
    height: 50,
    backgroundColor: COLORS.grey,
    borderRadius: 30,
    padding: 5,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
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
    backgroundColor: "white",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.light,
    marginLeft: 10,
  },
});
