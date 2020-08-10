import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { Card } from "react-native-elements";

import useBars from "../../hooks/useBars";
import {
  GOOGLE_API_BASE_URL,
  PLACE_API,
  PHOTO_ENDPOINT,
  GOOGLE_API_KEY,
} from "../../../.env.config.js";

const BarList = ({ onConfirm }) => {
  const request =
    GOOGLE_API_BASE_URL +
    PLACE_API +
    PHOTO_ENDPOINT +
    "?key=" +
    GOOGLE_API_KEY +
    "&" +
    "maxwidth=400";

  const bars = useBars();

  return (
    <View style={styles.container}>
      {!bars ? (
        <Text>Fetching nearby Bars...</Text>
      ) : (
        <ScrollView style={styles.container}>
          {bars.map((bar) => (
            <TouchableOpacity
              key={bar.place_id}
              onPress={() => onConfirm([bar])}
            >
              <Card
                pointerEvents="none"
                title={bar.name}
                image={{
                  uri:
                    request +
                    `&photoreference=${bar.photos[0].photo_reference}`,
                }}
              ></Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BarList;
