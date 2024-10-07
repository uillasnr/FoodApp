import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ScreenRegistration from "../screens/ScreenRegistration";
import ScreenRegistration2 from "../screens/ScreenRegistration2";
import ScreenLogin from "../screens/ScreenLogin";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreenLogin"
          component={ScreenLogin}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ScreenRegistration"
          component={ScreenRegistration}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ScreenRegistration2"
          component={ScreenRegistration2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
