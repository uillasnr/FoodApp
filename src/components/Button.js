import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Color from "../styles/Color";

export default Button = (props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: Color.COLORS.red,
    borderRadius: 6,
  },
  label: {
    textAlign: "center",
    padding: 14,
    color: Color.COLORS.white,
    fontSize: Color.FONT_SIZE.md,
  },
});
