import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Color from "../styles/Color";
import { pedido } from "../dados";
import Product from "../components/Product";

export default function ScreensDetailsOrder(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={pedido.itens}
        keyExtractor={(item) => item.idItem}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Product
              key={item.idItem}
              foto={item.foto}
              nome={item.nome}
              descricao={item.descricao}
              valor={item.vlTotal}
            />
          );
        }}
      />
      <View>
        <View style={styles.values}>
          <Text style={styles.total}>Resumo dos Valores</Text>
        </View>

        <View style={styles.values}>
          <Text style={styles.value}>Subtotal</Text>
          <Text style={styles.value}>R$ 66,00</Text>
        </View>

        <View style={styles.values}>
          <Text style={styles.value}>Taxa de entrega</Text>
          <Text style={styles.value}>R$ 5,00</Text>
        </View>

        <View style={styles.values}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>R$ 74,00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.COLORS.white,
    padding: 20,
  },
  header: {
    width: "100%",
    height: 40,
    justifyContent: "center",
  },
  title: {
    fontSize: Color.FONT_SIZE.md,
    color: Color.COLORS.dark_gray,
    textAlign: "center",
  },
  containeBack: {
    position: "absolute",
    top: -3,
    left: 0,
  },

  values: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 4,
  },
  value: {
    fontSize: Color.FONT_SIZE.sm,
    color: Color.COLORS.dark_gray,
  },
  total: {
    fontSize: Color.FONT_SIZE.sm,
    color: Color.COLORS.dark,
    fontWeight: "bold",
  },
});
