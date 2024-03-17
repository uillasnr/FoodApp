import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import COLORS from "../styles/Color";
import { CartContext } from "../hooks/CartContext";

export default function Header() {
  const { cartProduct } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.userImage} source={{ uri: "URL_DA_SUA_IMAGEM" }} />
        <View>
          <Text style={styles.text}>Olá, uillas</Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Carrinho")}
      >
        <Feather name="shopping-bag" size={20} color="white" />
        {cartProduct.length > 0 && ( 
          <View style={styles.cartBadge}>
            <Text style={styles.cartText}>{cartProduct.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 12,
    gap: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 99,
    backgroundColor: "blue",
  },
  cartBadge: {
    backgroundColor: "white",
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 5,
    right: 8,
    width: 20,
    height: 20,
  },
  cartText: {
    color: COLORS.dark,
    fontSize: 12,
    fontWeight: "bold",
  },
});
