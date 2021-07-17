import { StatusBar } from "expo-status-bar";
//修正
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions, TextInput } from "react-native";
import { Badge, TouchableRipple, FAB } from "react-native-paper";
import Ripple from "react-native-material-ripple";
// 追加した
import { Table, Row, Rows } from 'react-native-table-component';
import STodoDateTimePicker from "./components/STodoDateTimePicker";
import { getAll } from "../apis/T_BuyThingsApi";

/**
 * トップ画面です
 * @param props
 */
const Top = props => {
  const size = Dimensions.get("window").width / 6;
  //追加
  const [shoppingDate, setShoppingDate] = useState(new Date());
  /**
   * 
   */
  const [tableData, setTableData] = useState([0, '商品']);
  const [placeShopping, setPlaceShopping] = useState<string|undefined>('');
  

  const tableHandler = async () => {
    let arrayBuyThings = await getAll();    
    console.log('tableHandler開始');
    setTableData([arrayBuyThings[0].buyThings[0].nameBuyThing, arrayBuyThings[0].buyThings[0].countBuyThing]);
    setPlaceShopping(arrayBuyThings[0].placeShopping);
  };
  return (
    <View style={styles.container}>
      <STodoDateTimePicker
        dateTimeTitle="買い物をする日"
        date={shoppingDate}
        setDate={setShoppingDate} />
      {/* DBから取得した値を設定すると何も表示されないが
        ただの文字列を設定すると設定した文字列が表示される
        */}
      <TextInput
        style={styles.input}
        editable={false}
        value={placeShopping}
      />
      {/* このボタンはダミー(動確のためだけに存在するもの) 
        本来onloadに記載すべきだが、実装中にonloadで記載してしまうと毎回動くので料金が発生するため
        ボタンを押下時の処理として一時的に登録するものとする*/}
      <Table borderStyle={{ borderWidth: 1 }}>
        <Rows data={[tableData]} />
      </Table>
      <View style={styles.plusButton}>
        <Ripple onPress={tableHandler}>
          <FAB icon="minus"></FAB>
        </Ripple>
        <Ripple onPress={() => props.navigation.navigate("Registration")}>
          <FAB icon="plus">＋</FAB>
        </Ripple>
      </View>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff"
  // },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  plusButton: {
    position: "absolute",
    alignSelf: "flex-end"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
