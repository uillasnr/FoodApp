// AddressModal.js
import React, { useContext } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import THEMES from "../styles/themes";
import { AuthContext } from "../Context/AuthContext";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Button from "./Button";

const AddressModal = ({ visible, onClose }) => {
  const { user } = useContext(AuthContext);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContainer}>
              <View style={styles.modalTitleContainer}>
                <FontAwesome5
                  name="map-marker-alt"
                  size={20}
                  color={THEMES.light.colors.dark_gray}
                />
                <Text style={styles.modalTitle}>Endereço do Usuário</Text>
              </View>

              {/* Exibe os dados do usuário se existirem */}
              {user?.user ? (
                <View style={styles.modalContent}>
                  <DetailRow label="Endereço" value={user?.user.address} />
                  {user?.user.additional && (
                    <DetailRow
                      label="Complemento"
                      value={user?.user.additional}
                    />
                  )}
                  <DetailRow label="Bairro" value={user?.user.neighborhood} />
                  <DetailRow label="Cidade" value={user?.user.city} />
                  <DetailRow label="Estado" value={user?.user.state} />
                  <DetailRow label="CEP" value={user?.user.zip_code} />
                </View>
              ) : (
                <Text style={styles.modalContent}>Dados não disponíveis</Text>
              )}

              <Button label="Fechar" onPress={onClose} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

// Componente para exibir uma linha de detalhe com rótulo e valor
const DetailRow = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailTitle}>{label}:</Text>
    <Text style={styles.detailText}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: THEMES.light.FONT_SIZE.md,
    fontWeight: "bold",
    color: THEMES.light.colors.primary,
    marginLeft: 10,
  },
  modalContent: {
    fontSize: THEMES.light.FONT_SIZE.sm,
    marginBottom: 15,
    color: THEMES.light.colors.dark_gray,
    textAlign: "center",
  },
  detailRow: {
    marginBottom: 10,
    width: "100%",
  },
  detailTitle: {
    fontSize: THEMES.light.FONT_SIZE.sm,
    fontWeight: "bold",
    color: THEMES.light.colors.dark_gray,
    marginBottom: 5,
  },
  detailText: {
    fontSize: THEMES.light.FONT_SIZE.sm,
    color: THEMES.light.colors.dark_gray,
    textAlign: "left",
  },
  closeButton: {
    fontSize: THEMES.light.FONT_SIZE.sm,
    color: THEMES.light.colors.primary,
    marginTop: 20,
    fontWeight: "bold",
  },
});

export default AddressModal;
