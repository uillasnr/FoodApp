import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../styles/Color";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

export default function ScreenPerfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.item, styles.borderTop]}>
        <View style={styles.icons}>
          <FontAwesome5
            name="map-marker-alt"
            size={30}
            color={Color.COLORS.dark_gray}
          />
        </View>

        <View style={styles.text}>
          <Text style={styles.title}>Endereço</Text>
          <Text style={styles.subTitle}>Meu endereço de entrega</Text>
        </View>

        <View style={styles.icons}>
          <SimpleLineIcons
            name="arrow-right"
            size={25}
            color={Color.COLORS.dark_gray}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.icons}>
          <MaterialCommunityIcons
            name="account-cog"
            size={30}
            color={Color.COLORS.dark_gray}
          />
        </View>

        <View style={styles.text}>
          <Text style={styles.title}>Meus Dados</Text>
          <Text style={styles.subTitle}>Informações da minha conta</Text>
        </View>

        <View style={styles.icons}>
          <SimpleLineIcons
            name="arrow-right"
            size={25}
            color={Color.COLORS.dark_gray}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.icons}>
          <Entypo name="log-out" size={30} color={Color.COLORS.dark_gray} />
        </View>

        <View style={styles.text}>
          <Text style={styles.title}>Desconectar</Text>
          <Text style={styles.subTitle}>
            Desconectar seu usuário desse aparelho
          </Text>
        </View>

        <View style={styles.icons}>
          <SimpleLineIcons
            name="arrow-right"
            size={25}
            color={Color.COLORS.dark_gray}
          />
        </View>
      </TouchableOpacity>
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
  item: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: Color.COLORS.gray,
  },
  text: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    color: Color.COLORS.dark_gray,
    fontSize: Color.FONT_SIZE.md,
  },
  subTitle: {
    color: Color.COLORS.medium_gray,
    fontSize: Color.FONT_SIZE.sm,
  },
  icons: {
    justifyContent: "center",
  },
  borderTop:{
    borderTopWidth: 1,
    borderTopColor: Color.COLORS.gray,
  }
});
