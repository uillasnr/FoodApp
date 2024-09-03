import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Color from "../styles/Color";

export default CardRestaurant = ({ restaurantes }) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {restaurantes.map((restaurant, index) => (
        <View key={index}>

          <TouchableOpacity style={styles.card}>

            <Image source={restaurant.logotipo} style={styles.logotipo} />
            <View style={styles.text}>
              <Text style={styles.name}>{restaurant.nome}</Text>
              <Text style={styles.address}>{restaurant.endereco}</Text>
            </View>

            <TouchableOpacity>
              <AntDesign name="heart" size={30} color={Color.COLORS.red} />
            </TouchableOpacity>

          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    backgroundColor:Color.COLORS.light_gray,
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
  text: {
    flex: 1,
    padding: 8,
    justifyContent: "flex-start",
  },
  name: {
    color: Color.COLORS.dark_gray,
    marginBottom: 3,
    fontSize: Color.FONT_SIZE.sm,
  },
  address: {
    color: Color.COLORS.medium_gray,
    fontSize: Color.FONT_SIZE.sm,
  },
});
