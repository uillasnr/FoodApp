import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Color from "../styles/Color";
import { restaurante } from "../dados";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Product from "../components/Product";

export default function ScreensMenu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containeFoto}>
        <Image
          source={restaurante.foto}
          style={styles.foto}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={styles.containerBack}
          onPress={props.navigation.goBack}
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
          <Text style={styles.name}>Nome estable</Text>
          <Text style={styles.rate}>Nome 5,00</Text>
        </View>
        <AntDesign name="heart" size={40} color={Color.COLORS.red} />
      </View>

      <View style={styles.location}>
        <FontAwesome5
          name="map-marker-alt"
          size={25}
          color={Color.COLORS.medium_gray}
          style={styles.ícone}
        />
        <Text style={styles.address}>
          Rua Rui Barbosa, 512 - Paraiso - São Paulo - SP
        </Text>
      </View>

      <ScrollView>
        {restaurante.cardapio.map((item) => {
          return (
            <View key={item.idCategoria} style={styles.containeProduct}>
              <Text style={styles.category}>{item.categoria}</Text>

              {item.itens.map((prod) => {
                return (
                  <Product
                    key={prod.idProduto}
                    idProduto={prod.idProduto}
                    foto={prod.foto}
                    nome={prod.nome}
                    descricao={prod.descricao}
                    valor={prod.valor}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
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
  rate: {
    fontSize: Color.FONT_SIZE.md,
    color: Color.COLORS.medium_gray,
  },
  location: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  ícone: {
    borderWidth: 1,
    borderColor: Color.COLORS.medium_gray,
    paddingLeft: 13,
    paddingTop: 8,
    borderRadius: 10,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  address: {
    flex: 1,
    fontSize: Color.FONT_SIZE.md,
    color: Color.COLORS.dark_gray,
  },
  containeProduct: {
    padding: 10,
  },
  category: {
    fontSize: Color.FONT_SIZE.md,
    color: Color.COLORS.dark_gray,
    fontWeight: "bold",
    padding: 2,
  },
});
