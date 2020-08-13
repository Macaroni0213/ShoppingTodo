import { StatusBar } from "expo-status-bar";
import React, { useState, SyntheticEvent } from "react";
import { StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";

const Registration = () => {
  // 登録する買い物日付
  const [shoppingDate, setShoppingDate] = useState(new Date());
  // DateTimePickerを表示するかどうかのフラグ true: 表示, false: 非表示
  const [dispDateTimePicker, setDispDateTimePicker] = useState(false);
  const momentObject = moment(shoppingDate);
  const displayDate = momentObject.format("YYYY年M月D日");

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
   * カレンダーアイコンをタップした時にDateTimePickerを表示/非表示する
   */
  const handlePressCalendar = () => {
    if (dispDateTimePicker) {
      setDispDateTimePicker(false);
    } else {
      setDispDateTimePicker(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.shoppingDate}>
        <Text style={styles.formItemTitle}>買い物をする日</Text>
        <Text style={styles.formItemValue}>{displayDate}</Text>
        <Icon name="calendar" size={16} onPress={handlePressCalendar} />
      </View>
      <View>
        {dispDateTimePicker && (
          <DateTimePicker
            value={shoppingDate}
            mode="date"
            is24Hour={true}
            onChange={handleChange}
            locale="ja"
          />
        )}
      </View>
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
    fontSize: 15,
    paddingRight: 5
  },
  formItemValue: {
    fontSize: 15,
    paddingRight: 5
  }
});
