import React, { useState, SyntheticEvent } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { color } from "react-native-reanimated";
import { BuyThing } from "../../models/T_BuyThings";

interface ISTodoListProps {
    /** リスト表示するデータ */
    aryData: Array<BuyThing>;
}

const STodoList = (props: ISTodoListProps) => {
    const { aryData } = props;
    return (
        <View style={styles.container}>
            {
                aryData.length > 0 && aryData.map(data => {
                    return(
                        <View>
                            <TextInput>{data.nameBuyThing}</TextInput>
                            <TextInput>{data.countBuyThing}</TextInput>
                        </View>
                    )
                })
            }
            <View style={styles.buyThingsWrapper}>
                <TextInput style={styles.buyThings}></TextInput>
                <TextInput style={styles.buyThings}></TextInput>
            </View>
        </View>
    );
};

export default STodoList;

const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "stretch",
      margin: 20
    },
    buyThingsWrapper: {
        display: "flex",
        alignItems: "flex-start",
    },
    buyThings: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white"
    }
});