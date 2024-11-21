import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "../screens/Tab-navigation";

import ScreensMenu from "../screens/ScreensMenu";
import ScreensSearch from "../screens/ScreensSearch";
import ScreensDetailsProducts from "../screens/ScreensDetailsProducts";
import ScreensDetailsOrder from "../screens/ScreensDetailsOrder";
import ScreensChechout from "../screens/ScreensChechout";

import { Text, TouchableOpacity } from "react-native";
import themes from "../styles/themes";


const Stack = createNativeStackNavigator();

export default function RoutesAuth() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab-navigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ScreensChechout"
          component={ScreensChechout}
          options={{
            headerShadowVisible: false,
            title: "Meu Pedido",
            headerTitleAlign: "center",
            animation: "slide_from_bottom",
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => alert("OK")}>
                  <Text style={{ color: themes.light.colors.red }}>Limpar</Text>
                </TouchableOpacity>
              );
            },
          }}
        />

        <Stack.Screen
          name="ScreensDetailsOrder"
          component={ScreensDetailsOrder}
          options={{
            headerShadowVisible: false,
            title: "Detalhes do Pedido",
            headerTitleAlign: "center",
            animation: "slide_from_bottom",
          }}
        />

        <Stack.Screen
          name="ScreensProductsDetails"
          component={ScreensDetailsProducts}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ScreensMenu"
          component={ScreensMenu}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ScreensSearch"
          component={ScreensSearch}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
