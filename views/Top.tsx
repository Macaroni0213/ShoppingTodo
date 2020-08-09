import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Badge } from "react-native-paper";

export default class TopScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>トップ画面</Text>
        <StatusBar style="auto" />
        <Badge
          visible
          onPress={() => this.props.navigation.navigate("Registration")}
        >
          ＋
        </Badge>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
