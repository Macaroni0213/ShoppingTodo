import { StatusBar } from "expo-status-bar";
//修正
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions, TextInput } from "react-native";
import { Badge, TouchableRipple, FAB } from "react-native-paper";
import Ripple from "react-native-material-ripple";
// 追加した
import { Table, Row, Rows } from 'react-native-table-component';
import STodoDateTimePicker from "./components/STodoDateTimePicker";

/**
 * トップ画面です
 * @param props
 */
const Top = props => {
  const size = Dimensions.get("window").width / 6;
  //追加
  const [shoppingDate, setShoppingDate] = useState(new Date());
  const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
  const tableData = [
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '456\n789'],
    ['a', 'b', 'c', 'd']
  ];
  return (
    <View style={styles.container}>
      <View style={styles.plusButton}>

        {/* kokokara */}

        <STodoDateTimePicker
          dateTimeTitle="買い物をする日"
          date={shoppingDate}
          setDate={setShoppingDate}
        />

        <TextInput
          style={styles.input}
          editable={false}
        />

        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={tableHead} />
          <Rows data={tableData} />
        </Table>
        {/* kokomade */}

        <Ripple onPress={() => props.navigation.navigate("Registration")}>
          <FAB icon="plus">＋</FAB>
        </Ripple>
      </View>
    </View>
  );
};
/*
 TODO:あとで使う
export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
*/

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
  },
  shoppingDate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
