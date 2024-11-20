import AsyncStorage from "@react-native-async-storage/async-storage";

async function SaveUser(user) {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (erro) {
    console.log("Erro ao salvar storage");
  }
}

async function LoadUser() {
  try {
    const storage = await AsyncStorage.getItem("user");

    return storage ? JSON.parse(storage) : {};
  } catch (erro) {
    console.log("Erro ao carregar storage");
  }
}

async function LogoutUser() {
  try {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem('token');
    console.log("Usuário deslogado com sucesso.");
  } catch (erro) {
    console.log("Erro ao realizar logout", erro);
  }
}

export { SaveUser, LoadUser, LogoutUser };
