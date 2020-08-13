import { StatusBar } from "expo-status-bar";
import React, { useState, SyntheticEvent } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "react-native-paper";

const Registration = () => {
  // 登録する買い物日付
  const [shoppingDate, setShoppingDate] = useState(new Date());
  // DateTimePickerを表示するかどうかのフラグ true: 表示, false: 非表示
  const [dispDateTimePicker, setDispDateTimePicker] = useState(false);

  /**
   * DateTimePickerで選択した日付を設定する
   * @param event
   * @param selectedDate
   */
  const handleChange = (
    event: SyntheticEvent<Readonly<{ timestamp: number }>, Event>,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || shoppingDate;
    setShoppingDate(currentDate);
  };

  /**
   * 買い物日付入力欄にフォーカスした時にDateTimePickerを表示する
   */
  const handleFocus = () => {
    setDispDateTimePicker(true);
  };

  /**
   * 買い物日付入力欄にフォーカスした時にDateTimePickerを表示する
   */
  const handleBlur = () => {
    setDispDateTimePicker(false);
  };

  return (
    <View style={styles.container}>
      <TextInput onFocus={handleFocus}></TextInput>
      {dispDateTimePicker && (
        <DateTimePicker
          value={shoppingDate}
          mode="date"
          is24Hour={true}
          onChange={handleChange}
        />
      )}
      {dispDateTimePicker && <Button onPress={handleBlur}>確定</Button>}
      <Text>登録</Text>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
