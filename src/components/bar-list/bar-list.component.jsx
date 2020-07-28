import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "react-native-elements";

import { ScrollView, StyleSheet, View } from "react-native";

import { searchForBars } from "../../redux/bars/bars.actions";
import { selectBarList } from "../../redux/bars/bars.selector";

import { PLACES_BASE_URL, GOOGLE_API_KEY } from "../../../.env.config.js";

const BarList = () => {
  const bars = useSelector(selectBarList);
  const dispatch = useDispatch();
  const request = `${PLACES_BASE_URL}photo?key=${GOOGLE_API_KEY}&maxwidth=400`;
  useEffect(() => {
    dispatch(searchForBars());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {bars.map((bar) => (
          <Card
            key={bar.id}
            title={bar.name}
            image={{
              uri: request + `&photoreference=${bar.photos[0].photo_reference}`,
            }}
          />
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
