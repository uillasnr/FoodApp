import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Color from "../styles/Color";

export default CardOrders = (props) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.card} onPress={() => props.onClickOrders()}>
        <Image source={props.logotipo} style={styles.logotipo} />

        <View style={styles.conatinerText}>
          <Text style={styles.nome}>{props.nome}</Text>

          <View style={styles.conatinerValue}>
            
            <Text style={styles.value}>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(props.valor)}
            </Text>
            <Text style={styles.value}>{props.dt_pedido}</Text>
          </View>

          <Text style={styles.status}>{props.status}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: Color.COLORS.light_gray,
    width: "100%",
    height: 90,
    alignItems: "center",
    paddingHorizontal: 5,
    borderRadius: 10,
    // Sombra
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  logotipo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
  },
  conatinerText: {
    flex: 1,
    padding: 8,
  },
  conatinerValue: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  value: {
    color: Color.COLORS.medium_gray,
    fontSize: Color.FONT_SIZE.sm,
  },
  status: {
    color: Color.COLORS.green,
  },
});
