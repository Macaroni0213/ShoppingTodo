import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { Badge, TouchableRipple } from "react-native-paper";
import Ripple from "react-native-material-ripple";

export default class TopScreen extends React.Component {
  constructor(props) {
    super(props);
    this.size = Dimensions.get("window").width / 6;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>トップ画面</Text>
        <StatusBar style="auto" />
        <Ripple onPress={() => this.props.navigation.navigate("Registration")}>
          <Badge size={this.size} visible>
            ＋
          </Badge>
        </Ripple>
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
