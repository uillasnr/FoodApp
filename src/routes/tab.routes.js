import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import COLORS from "../styles/Color";
import ScreensHome from "../screens/ScreensHome";
import ScreensSearch from "../screens/ScreensSearch";
import ScreensProducts from "../screens/ScreensProducts";
import ScreensCart from "../screens/ScreensCart";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: COLORS.secondary,
          borderTopColor: COLORS.secondary,
          padding: 5,
          paddingBottom: 5,
          borderTopWidth: 2,
          display: "flex",
        },
        tabBarItemStyle: {
          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={ScreensHome}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Busca"
        component={ScreensSearch}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Products"
        component={ScreensProducts}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Carrinho"
        component={ScreensCart}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name={focused ? "shopping-bag" : "shopping-bag"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
