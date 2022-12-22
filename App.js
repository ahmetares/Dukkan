import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./Products";
import ProductsDetails from "./ProductsDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: "Dukkan",
            headerStyle: { backgroundColor: "papayawhip" },
            headerTintColor: 'gray',
            headerTitleStyle: {
              fontWeight: 'bold',}
          }}
        />
        <Stack.Screen
          name="ProductsDetails"
          component={ProductsDetails}
          options={{
            title: "Ürün Detayları",
            headerStyle: { backgroundColor: "papayawhip" },
            headerTintColor: 'red',
            headerTitleStyle: {
              fontWeight: 'bold',
              color:'gray'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
