import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import COLORS from "../styles/Color";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export default function ProductsOffer() {
  const [productsOffer, setProductsOffer] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadProductsOffer() {
      try {
        const { data } = await api.get(`/products`);
        const offer = data.filter((product) => product.offer);

        setProductsOffer(offer);
      } catch (error) {
        console.error("Falha ao buscar itens da categoria:", error);
      }
    }

    loadProductsOffer();
  }, []);

  const handleProductPress = (product) => {
      navigation.navigate("ProductDetails", { productId: product.id }); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {productsOffer.length > 0 ? (
        productsOffer.map((product, index) => (
          <View style={styles.productCard} key={index}>
            <Image source={{ uri: product.url }} style={styles.productImage} />
            <Text
              style={styles.productName}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {product.name}
            </Text>
            <Text style={styles.productPrice}>R$ {product.price}</Text>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => handleProductPress(product)}
            >
              <Text style={styles.buyButtonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.noProductsText}>
          Nenhum produto em oferta no momento.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10, 
    paddingBottom:20
  },
  productCard: {
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    flexBasis: "44%",
    flexGrow: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    alignSelf: "center",
  },
  productName: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    color: COLORS.light,
    maxWidth: 200, 
    maxHeight: 20, 
    overflow: "hidden", 
  },
  productPrice: {
    textAlign: "center",
    fontSize: 12,
    color: COLORS.light,
    marginTop: 5,
    fontWeight: "bold",
  },
  buyButton: {
    backgroundColor: COLORS.button,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buyButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  noProductsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
});
