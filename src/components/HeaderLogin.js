import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Color from "../styles/Color";


export default function HeaderLogin(props) {
  return (
    <View style={styles.header}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: Color.COLORS.dark_gray,
    fontSize: Color.FONT_SIZE.md,
    textAlign: "center",
  },
  logo: {
    width: 170,
    height: 50,
  },
});
