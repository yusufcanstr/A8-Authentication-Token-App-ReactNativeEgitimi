import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#87cefa",
        },
        headerTintColor: "white",
        contentStyle: {
          backgroundColor: "#F8F6F4",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: "Kullanıcı Giriş" }}
      />
      <Stack.Screen name="Signup" component={SignupScreen} options={{headerTitle: "Kullanıcı Oluştur"}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NormalStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
