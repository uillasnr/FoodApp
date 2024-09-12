import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Color from "../styles/Color";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Product(props) {
  return (
    <TouchableOpacity style={styles.product}>
      <Image source={props.foto} style={styles.foto} />

      <View style={styles.text}>
        <Text style={styles.name}>{props.nome}</Text>
        <Text style={styles.description}>{props.descricao}</Text>
      </View>

      <View>
        <Text style={styles.value}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.valor)}
        </Text>

        {props.showDeleteButton && (
          <TouchableOpacity
            style={styles.delete}
            onPress={() => props.onClickDelete()}
          >
            <Ionicons name="trash-bin" size={28} color={Color.COLORS.red} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  product: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },

  foto: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  text: {
    flex: 1,
    padding: 8,
  },

  name: {
    fontSize: Color.FONT_SIZE.sm,
    color: Color.COLORS.dark_gray,
  },

  description: {
    fontSize: Color.FONT_SIZE.sm,
    color: Color.COLORS.medium_gray,
  },
  value: {
    fontSize: Color.FONT_SIZE.sm,
    color: Color.COLORS.dark_gray,
    marginTop: 8,
  },
  delete: {
    alignItems: "flex-end",
    marginTop: 8,
  },
});
