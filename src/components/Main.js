import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import BarList from "./bar-list";

const Main = () => (
  <View style={styles.container}>
    <Text>Main Component</Text>
    <BarList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
