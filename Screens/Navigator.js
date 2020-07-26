import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./Chess";
import Theme from "./Theme";
import Setting from "./Setting";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
export default function Navigator() {
  return (
    <>
      <NavigationContainer>
        <AuthStack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName={"home"}
          headerMode={"none"}
        >
          <AuthStack.Screen
            name={"home"}
            component={Home}
            options={{ gestureEnabled: false, gestureDirection: "horizontal" }}
          />
          <AuthStack.Screen
            name={"theme"}
            component={Theme}
            options={{ gestureEnabled: false, gestureDirection: "horizontal" }}
          />
          <AuthStack.Screen
            name={"setting"}
            component={Setting}
            options={{
              gestureEnabled: false,
              gestureDirection: "horizontal-inverted",
            }}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
