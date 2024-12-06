import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import THEMES from "../styles/themes";

const CardOrders = (props) => {
  const dt = new Date(props.order_date);
  
  const getStatusStyle = () => {
    const statusColorMap = {
      "Cancelado": THEMES.light.colors.red || "#FF4C4C",     
      "Entregue": THEMES.light.colors.green || "#38C682",     
      "A caminho": THEMES.light.colors.orange || "#FFA500",    
      "Preparando": THEMES.light.colors.blue || "#4682B4",     
    };
    
    return { 
      color: statusColorMap[props.description_status] || THEMES.light.colors.medium_gray 
    };
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.card} onPress={() => props.onClickOrders(props.order_id)}>
        <Image source={{ uri: props.icon }} style={styles.logotipo} />
        <View style={styles.containerText}>
          <Text style={styles.name}>{props.name}</Text>

          <View style={styles.containerValue}>
            <Text style={styles.value}>
              {(props.total || 0).toLocaleString("pt-BR", { 
                style: "currency", 
                currency: "BRL" 
              })}
            </Text>
            <Text style={styles.value}>{dt.toLocaleDateString("pt-BR", { 
                style: "currency", 
                currency: "BRL" 
              })}</Text>
          </View>
          
          <Text style={styles.value}>
            Pedido: {props.order_id}
          </Text>
          <Text style={[styles.status, getStatusStyle()]}>
           {props.description_status}
          </Text>
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
    backgroundColor: THEMES.light.colors.light_gray, 
    width: "100%", 
    height: 90, 
    alignItems: "center", 
    paddingHorizontal: 5, 
    borderRadius: 10,
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
  containerText: { 
    flex: 1, 
    padding: 8, 
  },
  containerValue: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
  },
  name: {
    color: "#000",
    fontSize: THEMES.light.FONT_SIZE.md,
  },
  value: { 
    fontSize: THEMES.light.FONT_SIZE.sm, 
    color: THEMES.light.colors.text,
  },
  status: { 
    fontSize: THEMES.light.FONT_SIZE.sm, 
  },
});

export default CardOrders;