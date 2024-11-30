import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import THEMES from "../styles/themes";

export default function Search(props) {
  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={24}
        color={THEMES.light.colors.tabBarInactive}
        style={styles.icon}
      />
       <TextInput
        style={styles.input}
        placeholder="O que vamos pedir hoje?"
        placeholderTextColor={THEMES.light.colors.tabBarInactive}
        onChangeText={props.onChangeText}
        value={props.value}
        returnKeyType="search"
        onSubmitEditing={() => props.onSubmit && props.onSubmit(props.value)}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    height: 50,
    backgroundColor: THEMES.light.colors.light_gray,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: THEMES.light.colors.light_gray,
    borderRadius: 10,
    height: 50,
    width: "100%",
    paddingLeft: 40,
    fontSize: 18,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 15,
  },
});
