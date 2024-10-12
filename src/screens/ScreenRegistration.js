import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import HeaderLogin from "../components/HeaderLogin";
import Input from "../components/Input";
import Button from "../components/Button";
import Color from "../styles/Color";

export default function ScreenRegistration(props) {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = async () => {
    if (!Name || !email || !password || !confirmPassword) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    // Você pode adicionar aqui o código para enviar os dados para o backend e criar a conta

    // Navegar para a próxima tela
    props.navigation.navigate("ScreenRegistration2");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeaderLogin title="Criar sua conta." />

        <View style={styles.formGroup}>
          <View style={styles.form}>
            <Input
              label="Nome Completo"
              onChangeText={(texto) => setName(texto)}
              value={Name}
            />
          </View>

          <View style={styles.form}>
            <Input
              label="E-mail"
              onChangeText={(texto) => setEmail(texto)}
              value={email}
            />
          </View>

          <View style={styles.form}>
            <Input
              label="Escolha uma senha"
              isPassword={true}
              onChangeText={(texto) => setPassword(texto)}
              value={password}
            />
          </View>

          <View style={styles.form}>
            <Input
              label="Confirme a senha"
              isPassword={true}
              onChangeText={(texto) => setConfirmPassword(texto)}
              value={confirmPassword}
            />
          </View>

          <View>
            <Button label="Próximo passo" onPress={handleRegistration} />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ScreenLogin")}
        >
          <Text style={styles.footerText}>Acessar minha conta.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: Color.COLORS.white,
  },
  formGroup: {
    width: "100%",
    marginTop: 60,
    marginBottom: 0,
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  scrollView: {
    width: "100%",
    paddingTop: 80,
  },
  footer: {
    width: "100%",
    backgroundColor: Color.COLORS.white,
    position: "absolute",
    bottom: 0,
    padding: 20,
    height: 70,
  },
  footerText: {
    textAlign: "center",
    color: Color.COLORS.dark_gray,
    fontSize: Color.FONT_SIZE.md,
  },
});
