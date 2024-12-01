import { StyleSheet, Text, TextInput } from "react-native";
import THEMES from "../styles/themes";

export default Input = (props) => {
  return (
    <>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
        onChangeText={(texto) => props.onChangeText(texto)}
        value={props.value}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    alignItems: "center",
    backgroundColor: THEMES.light.colors.light_gray,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: THEMES.light.colors.gray,
  },
  label: {
    marginLeft: 5,
    color: THEMES.light.colors.dark_gray,
    fontSize: THEMES.light.FONT_SIZE.md,
  },
});
