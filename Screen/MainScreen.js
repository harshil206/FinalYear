import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MainScreen = () => {

  return (
    <View >
      <View style={styles.uprline}>
        <Text style={styles.headfont}>M</Text>

      </View>
      <View style={styles.userbar}>

      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  uprline: {
    width: 100 + "%",
    height: 56,
    marginTop: 0,
    backgroundColor: "pink",
    borderBottomColor: "red",
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userbar:
  {
    width: 100 + "%",
    height: 56,

    backgroundColor: "rgb(250,250,250)",
  },
  headfont: {
    fontSize: 30,
    fontWeight: 'bold'

  }
});

export default MainScreen;