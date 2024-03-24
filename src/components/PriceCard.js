import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CartContext } from "../hooks/CartContext";
import COLORS from "../styles/Color";

export default PriceCard = () => {
  const { cartProduct } = useContext(CartContext);

  // Função para calcular o preço total
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartProduct.forEach((item) => {
      totalPrice += item.price * item.quantity; 
    });
    return totalPrice.toFixed(2); 
  };

  // Função para calcular o número total de produtos
  const calculateTotalProducts = () => {
    return cartProduct.length;
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.TextLeft}>Produtos:</Text>
        <Text style={styles.TextRight}>{calculateTotalProducts()}</Text>
      </View>

      <View style={styles.line} />
      <View style={styles.row}>
        <Text style={styles.totalTextLeft}>Total:</Text>
        <Text style={styles.totalTextRight}> R$ {calculateTotalPrice()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextLeft: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.light,
    flex: 1,
    textAlign: "left",
  },
  TextRight: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.light,
    flex: 1,
    textAlign: "right",
  },
  totalTextLeft: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.light,
    flex: 1,
    textAlign: "left",
  },
  totalTextRight: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.light,
    textAlign: "right",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light,
    borderStyle: "dotted",
    marginVertical: 10,
  },
});
