import { StyleSheet, Text, TextInput } from "react-native";
import Color from "../styles/Color";

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
    backgroundColor: Color.COLORS.light_gray,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Color.COLORS.gray,
  },
  label: {
    marginLeft: 5,
    color: Color.COLORS.dark_gray,
    fontSize: Color.FONT_SIZE.md,
  },
});
