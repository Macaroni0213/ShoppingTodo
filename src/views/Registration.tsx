import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { LatLng, MapEvent, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Ripple from "react-native-material-ripple";
import { FAB } from "react-native-paper";
import STodoDateTimePicker from "./components/STodoDateTimePicker";
// import STodoLisat from "./components/STodoList";
import { T_BuyThingsApi } from "../apis/T_BuyThingsApi";
import STodoList from "./components/STodoList";
import { BuyThing } from "../models/T_BuyThings";

/**
 * 登録画面
 */
const Registration = () => {
  // 登録する買い物日付
  const [shoppingDate, setShoppingDate] = useState(new Date());
  // mapを表示する
  const [displayMap, setDisplayMap] = useState(false);
  // マーカーの情報
  const [mapTitle, setMapTitle] = useState("");
  // マーカーの位置
  const [mapLatlng, setMapLatlng] = useState<LatLng | null>(null);
  // 買う物リスト
  const [buyThings, setBuyThings] = useState<Array<BuyThing>>([]);

  return (
    <View style={styles.container}>
      <STodoDateTimePicker
        dateTimeTitle="買い物をする日"
        date={shoppingDate}
        setDate={setShoppingDate}
      />
      <View style={styles.mapButton}>
        <Ripple onPress={() => setDisplayMap(!displayMap)}>
          <FAB icon="map"></FAB>
        </Ripple>
      </View>
      {/* <STodoList
        aryData={buyThings}
       /> */}
      {/* ↓TODO 現状使用していないが、後々使う。 */}
      {/* {makeMapView(displayMap, mapTitle, mapLatlng, setMapLatlng)} */}
    </View>
  );
};

// TO-DO 現状使用していないが、後々使う。
const makeMapView = (
  displayMap: boolean,
  mapTitle: string,
  mapLatlng: LatLng | null,
  setMapLatlng: Function
) => {
  const handleOnpPress = (event: MapEvent) => {
    console.log("マップ押下");
    setMapLatlng(event.nativeEvent.coordinate);
  };

  if (displayMap) {
    return (
      <View style={styles.mapView}>
        <MapView
          style={styles.mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 36.28825,
            longitude: 136.7324,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
          }}
          onPress={handleOnpPress}
        >
          {makeMarker(mapLatlng)}
        </MapView>
      </View>
    );
  }
  return null;
};

const makeMarker = (mapLatlng: LatLng | null) => {
  if (mapLatlng) {
    return <Marker coordinate={mapLatlng} />;
  }
  return null;
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
  },
  mapButton: {
    position: "absolute",
    alignSelf: "flex-end"
  },
  mapView: {
    width: "100%",
    height: "100%",
    padding: 5
  }
});
