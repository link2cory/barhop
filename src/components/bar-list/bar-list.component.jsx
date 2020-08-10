import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "react-native-elements";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { searchForBars } from "../../redux/bars/bars.actions";
import { selectBarList } from "../../redux/bars/bars.selector";

import {
  GOOGLE_API_BASE_URL,
  PLACE_API,
  PHOTO_ENDPOINT,
  GOOGLE_API_KEY,
} from "../../../.env.config.js";

const BarList = ({ onConfirm }) => {
  const bars = useSelector(selectBarList);
  const dispatch = useDispatch();
  const request =
    GOOGLE_API_BASE_URL +
    PLACE_API +
    PHOTO_ENDPOINT +
    "?key=" +
    GOOGLE_API_KEY +
    "&" +
    "maxwidth=400";

  useEffect(() => {
    dispatch(searchForBars());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {bars.map((bar) => (
          <TouchableOpacity key={bar.place_id} onPress={() => onConfirm([bar])}>
            <Card
              pointerEvents="none"
              title={bar.name}
              image={{
                uri:
                  request + `&photoreference=${bar.photos[0].photo_reference}`,
              }}
            ></Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BarList;
