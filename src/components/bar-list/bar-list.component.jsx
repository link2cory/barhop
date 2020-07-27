import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "react-native-elements";

import { ScrollView, StyleSheet, View } from "react-native";

import { searchForBars } from "../../redux/bars/bars.actions";
import { selectBarList } from "../../redux/bars/bars.selector";

const BarList = () => {
  const bars = useSelector(selectBarList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchForBars());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {bars.map((bar) => (
          <Card key={bar.id} title={bar.name} />
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
