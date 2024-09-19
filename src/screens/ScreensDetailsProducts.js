import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
} from "react-native";
import Color from "../styles/Color";
import Button from "../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import produtoPizza from "../assets/produto-pizza.png";

export default function ScreensDetailsProducts() {
  return (
    <View style={styles.container}>
      <View style={styles.containeFoto}>
        <Image source={produtoPizza} style={styles.foto} resizeMode="cover" />

        <TouchableOpacity
          style={styles.containerBack}
          /*   onPress={props.navigation.goBack} */
        >
          <Ionicons
            name="arrow-back-circle-sharp"
            size={40}
            color={Color.COLORS.dark_gray}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.name}>Pizza de Calabresa</Text>
          <Text style={styles.description}>
            The error Text strings must be rendered within a component occurs
            when a text string is placed directly inside a or another non-text
            component. This error typically happens when you have forgotten to
            wrap text content{" "}
          </Text>
          <Text style={styles.value}>R$ 30,00</Text>
        </View>
      </View>

      <View style={styles.headerObs}>
        <Text style={styles.description}>Observações</Text>
        <TextInput
          style={styles.multiline}
          multiline={true}
          numberOfLines={5}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <AntDesign name="minuscircleo" size={40} color={Color.COLORS.dark_gray} />
        </TouchableOpacity>

        <Text style={styles.qtd}>1</Text>

        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={40} color={Color.COLORS.dark_gray} />
        </TouchableOpacity>

        <View style={styles.footerButton}>
          <Button label="Inserir" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.COLORS.white,
  },
  containeFoto: {
    alignItems: "center",
  },
  foto: {
    height: 200,
  },
  containerBack: {
    position: "absolute",
    top: 30,
    left: 15,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: Color.FONT_SIZE.md,
    fontWeight: "bold",
    color: Color.COLORS.dark_gray,
    marginBottom: 2,
  },
  description: {
    fontSize: Color.FONT_SIZE.md,
    color: Color.COLORS.medium_gray,
  },
  value: {
    fontSize: Color.FONT_SIZE.md,
    color: Color.COLORS.dark_gray,
    fontWeight: "bold",
    marginBottom: 2,
    marginTop: 15,
  },
  headerObs: {
    width: "100%",
    padding: 10,
  },
  multiline: {
    flex: 1,
    backgroundColor: Color.COLORS.light_gray,
    padding: 10,
    color: Color.COLORS.dark_gray,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Color.COLORS.gray,
    minHeight: 120,
    textAlignVertical: "top",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  qtd: {
    fontSize: Color.FONT_SIZE.lg,
    fontWeight: "bold",
    color: Color.COLORS.dark_gray,
    width: 35,
    textAlign: "center",
  },
  footerButton: {
    flex: 1,
    marginRight: 5,
    marginLeft: 15,
  },
});
