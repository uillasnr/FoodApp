import React, { useCallback,  useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import CardRestaurant from "../components/CardRestaurant";
import THEMES from "../styles/themes";
import {
  addFavoriteRestaurant,
  deleteFavoriteRestaurant,
  getFavoriteRestaurant,
} from "../services/api";
import { useFocusEffect } from "@react-navigation/native";
import Loading from "../components/Loading";

export default function ScreenFavorites() {
  const [favoriteRestaurant, setFavoriteRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFavoriteRestaurant = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getFavoriteRestaurant();
      setFavoriteRestaurant(data);
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadFavoriteRestaurant();
    }, [loadFavoriteRestaurant])
  );


  const handleFavoriteAdd = async (id_company) => {
    try {
      await addFavoriteRestaurant(id_company); 
      // Atualiza os favoritos após sucesso
      loadFavoriteRestaurant();
    } catch (error) {
      console.error("Erro ao adicionar aos favoritos:", error);
    }
  };
  
  const handleFavoriteRemove = async (id_company) => {
    try {
      await deleteFavoriteRestaurant(id_company); 
      // Atualiza os favoritos após sucesso
      loadFavoriteRestaurant();
     
    } catch (error) {
      console.error("Erro ao remover dos favoritos:", error);
   
    }
  };
  

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {favoriteRestaurant.length > 0 ? (
        <FlatList
          data={favoriteRestaurant}
          keyExtractor={(item) => item.id_company.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardRestaurant
              restaurant={item}
              isFavorites={true}
              onRemove={() => handleFavoriteRemove(item.id_company)}
              onAdd={() => handleFavoriteAdd(item.id_company)}
            />
          )}
        />
      ) : (
        <View style={styles.empty}>
          <Image source={require("../../assets/empty.png")} />
          <Text style={styles.text}>Nenhum restaurante favorito encontrado.</Text>
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
