import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Top from "./src/views/Top";
import Registration from "./src/views/Registration";

/**
 * 画面をルーティングする
 */
const RootStack = createStackNavigator(
  {
    Top: {
      screen: Top,
      navigationOptions: {
        title: "買い物リスト"
      }
    },
    Registration: {
      screen: Registration,
      navigationOptions: {
        title: "新規買い物リスト登録"
      }
    }
  },
  {
    initialRouteName: "Top"
  }
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
