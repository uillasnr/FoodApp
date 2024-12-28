import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Product from "../components/Product";
import THEMES from "../styles/themes";
import Loading from "../components/Loading";
import { useRoute } from "@react-navigation/native";
import {
  addFavoriteRestaurant,
  deleteFavoriteRestaurant,
  getMenu,
} from "../services/api";

export default function ScreensMenu(props) {
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { restaurantId } = route.params;
  const [menu, setMenu] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  var lastCategory = null;

  useEffect(() => {
    const loadGetMenu = async () => {
      try {
        setLoading(true);
        const data = await getMenu(restaurantId);
        setMenu(data);
        setIsFavorite(data.favorite === "S");
      } catch (error) {
        console.error("Erro ao carregar os Menu:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGetMenu();
  }, []);

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await deleteFavoriteRestaurant(restaurantId);
      } else {
        await addFavoriteRestaurant(restaurantId);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  };

  function DetailsProducts(product_id) {
    props.navigation.navigate("ScreensDetailsProducts", {
      product_id,
      id_company: menu.id_company, 
    });
  }
  
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containePhoto}>
        <Image
          source={{ uri: menu.photo }}
          style={styles.photo}
          resizeMode="cover"
        />

        <TouchableOpacity
          style={styles.containerBack}
          onPress={props.navigation.goBack}
        >
          <Ionicons
            name="arrow-back-circle-sharp"
            size={40}
            color={THEMES.light.colors.dark_gray}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.name}>{menu.name}</Text>
          <Text style={styles.rate}>
            Taxa de entrega:{" "}
            {menu.delivery_fee.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </View>
        <TouchableOpacity onPress={toggleFavorite}>
          {isFavorite ? (
            <AntDesign name="heart" size={30} color={THEMES.light.colors.red} />
          ) : (
            <AntDesign
              name="hearto"
              size={30}
              color={THEMES.light.colors.text}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.location}>
        <FontAwesome5
          name="map-marker-alt"
          size={25}
          color={THEMES.light.colors.medium_gray}
          style={styles.ícone}
        />
        <Text style={styles.address}>{menu.address}</Text>
      </View>

      <ScrollView>
        {menu.itens?.map((item) => {
          const showCategory = lastCategory !== item.category;
          lastCategory = item.category;

          return (
            <View key={item.product_id} style={styles.containeProduct}>
              {showCategory && (
                <Text style={styles.category}>{item.category}</Text>
              )}

              <Product
                idProduto={item.product_id}
                icon={item.icon}
                name={item.name}
                description={item.description}
                price={item.price}
                onClick={DetailsProducts}
              />
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
    backgroundColor: THEMES.light.colors.white,
  },
  containePhoto: {},
  photo: {
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
    fontSize: THEMES.light.FONT_SIZE.md,
    fontWeight: "bold",
    color: THEMES.light.colors.dark_gray,
    marginBottom: 2,
  },
  rate: {
    fontSize: THEMES.light.FONT_SIZE.md,
    color: THEMES.light.colors.medium_gray,
  },
  location: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: THEMES.light.colors.gray,
  },

  ícone: {
    borderWidth: 1,
    borderColor: THEMES.light.colors.medium_gray,
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
    fontSize: THEMES.light.FONT_SIZE.md,
    color: THEMES.light.colors.dark_gray,
  },
  containeProduct: {
    padding: 10,
  },
  category: {
    fontSize: THEMES.light.FONT_SIZE.md,
    color: THEMES.light.colors.dark_gray,
    fontWeight: "bold",
    padding: 2,
  },
});
