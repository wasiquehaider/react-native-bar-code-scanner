import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import ProductScanRNCamera from "./src/CameraComp";
import { createSwitchNavigator } from "react-navigation";
import Home from "./src/Home";
export default class App extends Component {
  render() {
    return <ProductScanRNCamera />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Home: Home,
  ScanningScreen: ProductScanRNCamera
});

const styles = StyleSheet.create({});
