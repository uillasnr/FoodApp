import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import THEMES from "../styles/themes";

export default function CreativeSpinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color={THEMES.light.colors.medium_gray} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
