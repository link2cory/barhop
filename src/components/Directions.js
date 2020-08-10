import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import BarList from "./bar-list";

const Directions = ({ navigation, route }) => {
  const { bars } = route.params;
  return (
    <View style={styles.container}>
      <Text>Directions Component</Text>
      <Text>Placeholder for directions to {bars.pop().name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Directions;
