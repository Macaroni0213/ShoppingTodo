import React, { useState, SyntheticEvent } from "react";
import { StyleSheet, Text, View } from "react-native";
import STodoDateTimePicker from "./components/STodoDateTimePicker";
import MapView, { Marker, LatLng, MapEvent } from "react-native-maps";
import Ripple from "react-native-material-ripple";
import { Badge, TouchableRipple, FAB } from "react-native-paper";

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
      {makeMapView(displayMap, mapTitle, mapLatlng, setMapLatlng)}
    </View>
  );
};

const makeMapView = (
  displayMap: boolean,
  mapTitle: string,
  mapLatlng: LatLng | null,
  setMapLatlng: Function
) => {
  const handleOnpPress = (event: MapEvent) => {
    console.log(event);
    setMapLatlng(event.nativeEvent.coordinate);
  };
  if (displayMap) {
    return (
      <View style={styles.mapView}>
        <MapView
          style={styles.mapView}
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
