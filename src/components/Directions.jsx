import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import BarList from "./bar-list";

import { GOOGLE_API_KEY } from "../../.env.config";

const Directions = ({ navigation, route }) => {
  const { bars } = route.params;
  const bar = bars[0];
  const mapRegion = {
    latitude: 48.7519,
    longitude: -122.4787,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={mapRegion}>
        <MapViewDirections
          origin={{
            latitude: 48.7519,
            longitude: -122.4787,
          }}
          destination={{
            latitude: bar.geometry.location.lat,
            longitude: bar.geometry.location.lng,
          }}
          apikey={GOOGLE_API_KEY}
          mode={"WALKING"}
          strokeWidth={10}
          strokeColor="green"
        />
        {bars.map((bar) => (
          <MapView.Marker
            key={bar.place_id}
            coordinate={{
              latitude: bar.geometry.location.lat,
              longitude: bar.geometry.location.lng,
            }}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Directions;
