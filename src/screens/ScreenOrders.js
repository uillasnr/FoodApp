import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Color from "../styles/Color";
import { pedidos } from "../dados";

import CardOrders from "../components/CardOrders";

export default function ScreenOrders() {
  return (
    <View style={styles.container}>
      {pedidos.length > 0 ? (
        <FlatList
          data={pedidos}
          keyExtractor={(Ord) => Ord.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardOrders
              logotipo={item.logotipo}
              nome={item.nome}
              valor={item.vl_total}
              dt_pedido={item.dt_pedido}
              status={item.status}
            />
          )}
        />
      ) : (
        <View style={styles.empty}>
          <Image source={require("../../assets/empty.png")} />
          <Text style={styles.text}>
            Nenhum pedido encontrado.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.COLORS.white,
    paddingLeft: 12,
    paddingRight: 12,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
    backgroundColor: Color.COLORS.white,
  },
  text: {
    color: Color.COLORS.dark_gray,
    fontSize: Color.FONT_SIZE.sm,
    textAlign: "center",
    marginTop: 20,
  },
});
