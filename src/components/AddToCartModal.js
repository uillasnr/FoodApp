import React from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../styles/Color";

const AddToCartModal = ({ visible, onClose }) => {
    const navigation = useNavigation();
   
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Produto adicionado ao carrinho!</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Carrinho")} style={styles.button}>
                <Text style={styles.buttonText}>Ir para o Carrinho</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
                <Text style={styles.buttonText}>Continuar Comprando</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 30,
  },
  modalView: {
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    color: COLORS.light,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: COLORS.dark,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: "45%",
  },
  buttonText: {
    color: COLORS.light,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AddToCartModal;
