import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../styles/Color";
import { CartContext } from "../hooks/CartContext";

export default function CartItem({ item }) {
  const { increaseProducts, decreaseProducts, deleteProductFromCart } =
    useContext(CartContext);

  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.url }} style={styles.itemImage} />

      <View style={styles.text}>
        <Text style={styles.itemName}>{item.name}</Text>

        <Text style={styles.itemPrice}>
          R$ {(item.price * item.quantity).toFixed(2)}
        </Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => decreaseProducts(item.id)}
        >
          <AntDesign name="minus" size={15} color={COLORS.light} />
        </TouchableOpacity>

           <Text style={styles.quantityText}>{item.quantity}</Text>
           
        <TouchableOpacity

          style={styles.quantityButton}
          onPress={() => increaseProducts(item.id)}
        >
          <AntDesign name="plus" size={15} color={COLORS.light} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteProductFromCart(item.id)}
      >
        <AntDesign name="delete" size={20} color={COLORS.light} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 10,
  },
  itemImage: {
    width: 50,
    height: 60,
    marginRight: 10,
  },
  text: {
    flex: 1,
    justifyContent: "center",
  },
  itemName: {
    flex: 1,
    fontWeight: "bold",
    paddingLeft: 15,
    fontSize: 16,
    color: COLORS.light,
    textTransform: "uppercase",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: COLORS.dark,
    padding: 5,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 16,
    color: COLORS.light,
    marginHorizontal: 10,
  },
  itemPrice: {
    paddingLeft: 15,
    fontSize: 14,
    color: COLORS.light,
    paddingBottom: 10,
  },
  deleteButton: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 15,
  },
});
