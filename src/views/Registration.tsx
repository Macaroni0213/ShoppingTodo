import React, { useState, SyntheticEvent } from "react";
import { StyleSheet, Text, View } from "react-native";
import STodoDateTimePicker from "./components/STodoDateTimePicker";

const Registration = () => {
  // 登録する買い物日付
  const [shoppingDate, setShoppingDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <STodoDateTimePicker
        dateTimeTitle="買い物をする日"
        date={shoppingDate}
        setDate={setShoppingDate}
      />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff"
  },
  shoppingDate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },
  formItemTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingRight: 5
  },
  formItemValue: {
    fontSize: 20,
    paddingRight: 5
  }
});
