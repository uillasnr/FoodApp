import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import COLORS from "../styles/Color";
import { CartContext } from "../hooks/CartContext";
import CartItem from "../components/CartItem";

export default function CartScreen() {
  const {
    cartProduct,
    increaseProducts,
    decreaseProducts,
    deleteProductFromCart,
  } = useContext(CartContext);

  const handleBuyProducts = () => {
    console.log("🚀✨Produtos comprados!✨ 🚀", cartProduct);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Carrinho de Compras</Text>
      {cartProduct.length === 0 ? (
        <View style={styles.emptyCart}>
          <Feather name="shopping-bag" size={50} color={COLORS.light} />
          <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartProduct}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                increaseQuantity={increaseProducts}
                decreaseQuantity={decreaseProducts}
                deleteItem={deleteProductFromCart}
                key={item.id} 
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.cartList}
          />
          <TouchableOpacity
            style={styles.buyButton}
            onPress={handleBuyProducts}
          >
            <Text style={styles.buyButtonText}>Comprar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 20,
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.light,
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 16,
    color: COLORS.light,
    textAlign: "center",
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  cartList: {
    flexGrow: 1,
  },
  buyButton: {
    backgroundColor: COLORS.dark,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.light,
  },
});
