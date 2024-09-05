import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import HeaderLogin from "../components/HeaderLogin";
import Input from "../components/Input";
import Button from "../components/Button";
import Color from "../styles/Color";

export default function ScreenLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email) {
      console.log("teu sertao", email);
    } else
      () => {
        Alert.alert("Erro", "Por favor, preencha todos os campos.");
      };
  };

  return (
    <View style={styles.container}>
      <HeaderLogin title="Acesse sua conta." />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <Input
            label="E-mail"
            onChangeText={(texto) => setEmail(texto)}
            value={email}
          />
        </View>
        <View style={styles.form}>
          <Input
            label="Senha"
            onChangeText={(texto) => setPassword(texto)}
            value={password}
            isPassword={true}
          />
        </View>

        <View>
          <Button label="Acessar" onPress={handleLogin} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ScreenRegistration")}
        >
          <Text style={styles.footerText}>Criar minha conta.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.COLORS.white,
  },
  formGroup: {
    width: "100%",
    marginTop: 50,
    marginBottom: 40,
  },
  form: {
    width: "100%",
    marginBottom: 25,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 40,
  },
  footerText: {
    textAlign: "center",
    color: Color.COLORS.dark_gray,
    fontSize: Color.FONT_SIZE.md,
  },
});
