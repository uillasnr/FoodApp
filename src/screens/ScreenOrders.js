import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import CardOrders from "../components/CardOrders";
import THEMES from "../styles/themes";
import { getOrder } from "../services/api";
import Loading from "../components/Loading";

export default function ScreenOrders(props) {
  const [Order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const data = await getOrder();
        console.log(data);
        setOrder(data);
      } catch (error) {
        console.error("Erro ao carregar Order:", error);
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, []);

  function DetailsOrder() {
    props.navigation.navigate("ScreensDetailsOrder");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {Order.length > 0 ? (
        <FlatList
          data={Order}
          keyExtractor={(Ord) => Ord.order_id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardOrders
              icon={item.icon}
              name={item.name}
              total={item.total}
              order_date={item.order_date}
              order_id={item.order_id}
              description_status={item.description_status}
              onClickOrders={DetailsOrder}
            />
          )}
        />
      ) : (
        <View style={styles.empty}>
          <Image source={require("../../assets/empty.png")} />
          <Text style={styles.text}>Nenhum pedido encontrado.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.light.colors.white,
    paddingLeft: 12,
    paddingRight: 12,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
    backgroundColor: THEMES.light.colors.white,
  },
  text: {
    color: THEMES.light.colors.dark_gray,
    fontSize: THEMES.light.FONT_SIZE.sm,
    textAlign: "center",
    marginTop: 20,
  },
});
