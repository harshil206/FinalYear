import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 9,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: '7%'
  }
});

export default Card;