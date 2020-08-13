import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { Badge, TouchableRipple } from "react-native-paper";
import Ripple from "react-native-material-ripple";

const Top = props => {
  const size = Dimensions.get("window").width / 6;
  return (
    <View style={styles.container}>
      <Text>トップ画面</Text>
      <StatusBar style="auto" />
      <Ripple onPress={() => props.navigation.navigate("Registration")}>
        <Badge size={size} visible>
          ＋
        </Badge>
      </Ripple>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
