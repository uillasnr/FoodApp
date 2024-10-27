import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Color from "../styles/Color";

export default Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.btn, props.isLoading ? styles.loading : ""]}
      disabled={props.isLoading}
      onPress={props.onPress}
    >
      {props.isLoading ? (
        <ActivityIndicator color={Color.COLORS.white} />
      ) : (
        <Text style={styles.label}>{props.label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: Color.COLORS.red,
    borderRadius: 6,
    padding: 14,
  },
  label: {
    textAlign: "center",
    color: Color.COLORS.white,
    fontSize: Color.FONT_SIZE.md,
  },
  loading: {
    opacity: 0.5,
  },
});
