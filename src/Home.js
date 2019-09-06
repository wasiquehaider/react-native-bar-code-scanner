import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
const WIDTH = Dimensions.get("window").width;
export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    const barcodeData = navigation.getParam("BarcodeData", "Can not Find");
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            console.log("scan clicked");
          }}
          style={styles.btnStyle}
        >
          <Text style={[styles.text, styles.white]}>SCAN</Text>
        </TouchableOpacity>
        <Text>{}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  white: {
    color: "#fff"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  },
  btnStyle: {
    width: WIDTH - 50,
    height: 40,
    borderRadius: 50,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  }
});
