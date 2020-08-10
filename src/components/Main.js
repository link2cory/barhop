import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import BarList from "./bar-list";

const Main = ({ navigation }) => {
  const onBarListConfirmed = (bars) => {
    navigation.navigate("Directions", { bars });
  };
  return (
    <View style={styles.container}>
      <BarList onConfirm={onBarListConfirmed} />
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

export default Main;
