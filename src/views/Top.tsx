import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { Badge, TouchableRipple, FAB } from "react-native-paper";
import Ripple from "react-native-material-ripple";

/**
 * トップ画面
 * @param props
 */
const Top = props => {
  const size = Dimensions.get("window").width / 6;
  return (
    <View style={styles.container}>
      <View style={styles.plusButton}>
        <Ripple onPress={() => props.navigation.navigate("Registration")}>
          <FAB icon="plus">＋</FAB>
        </Ripple>
      </View>
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
  },
  plusButton: {
    position: "absolute",
    alignSelf: "flex-end"
  }
});
