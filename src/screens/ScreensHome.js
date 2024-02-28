import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../styles/Color";
import Search from "../components/Search";
import Category from "./ScreensCategory";

export default function ScreensHome() {
  return (
    <View style={styles.container}>
      <Search style={styles.search} />
      <Category />
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Ajustado para 'flex-start' para alinhar os itens no início do eixo principal
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingTop: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.light,
  },
  search: {
    alignSelf: "flex-start", // Alinha o componente no início do eixo transversal (horizontal)
  },
});
