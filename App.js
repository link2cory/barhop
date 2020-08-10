import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./src/redux/store";

import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./src/components/Main";
import Directions from "./src/components/Directions";

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Navigator initialRouteName="Main">
            <Screen name="Main" component={Main} />
            <Screen name="Directions" component={Directions} />
          </Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
