import { StatusBar } from "expo-status-bar";
import React, { useState, SyntheticEvent } from "react";
import { StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";

interface ISTodoDateTimePickerProps {
  /** 日時のタイトル */
  dateTimeTitle: string;
  /** 表示、設定する日時 */
  date: Date;
  /** 日時を更新する関数 */
  setDate: Function;
}

const STodoDateTimePicker = (props: ISTodoDateTimePickerProps) => {
  // 登録する買い物日付
  const { dateTimeTitle, date, setDate } = props;
  // DateTimePickerを表示するかどうかのフラグ true: 表示, false: 非表示
  const [dispDateTimePicker, setDispDateTimePicker] = useState(false);
  // Date型をYYYY年M月D日に整形する
  // ex) 2020年1月1日
  const momentObject = moment(date);
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
    const currentDate = selectedDate || date;
    setDate(currentDate);
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
        <Text style={styles.dateTimeTitle}>{dateTimeTitle}</Text>
        <Text style={styles.dateTimeValue}>{displayDate}</Text>
        <Icon name="calendar" size={21} onPress={handlePressCalendar} />
      </View>
      <View>
        {dispDateTimePicker && (
          <DateTimePicker
            value={date}
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

export default STodoDateTimePicker;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "stretch"
  },
  shoppingDate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 5
  },
  dateTimeTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingRight: 5
  },
  dateTimeValue: {
    fontSize: 20,
    paddingRight: 5
  }
});
