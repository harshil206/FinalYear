import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


import Card from '../Components/Card';
import Appbutton from '../Components/Appbutton';
import { ScrollView } from 'react-native-gesture-handler';

const Signup = props => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <ScrollView contentContainerStyle={styles.scrollstyle} >
          <View style={styles.headertext}>
            <Text style={styles.text}>Create Account</Text>
            <MaterialIcons name='account-circle' size={40} color='black' />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.text_style}>Full Name : </Text>
            <TextInput style={styles.texteditor_style}></TextInput>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.text_style}>Email: </Text>
            <TextInput style={styles.texteditor_style} keyboardType='email-address' ></TextInput>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.text_style}>User-Name: </Text>
            <TextInput style={styles.texteditor_style} ></TextInput>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.text_style}>Contact:</Text>
            <TextInput style={styles.texteditor_style} keyboardType='numeric' ></TextInput>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.text_style}>Password: </Text>
            <TextInput style={styles.texteditor_style} secureTextEntry={true}></TextInput>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.text_style}>Confirm Password: </Text>
            <TextInput style={styles.texteditor_style} secureTextEntry={true} ></TextInput>
          </View>
          <View style={styles.buttoncontainer}>
            <Appbutton style={styles.butt}>SignUp</Appbutton>
            <Appbutton style={styles.butt}>RESET</Appbutton>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate({ routeName: 'Home' })}>
            <Text style={{ fontSize: 15, paddingTop: '4%', fontWeight: 'bold' }}>
              Have Account ??Login
          </Text>
          </TouchableOpacity>
        </ScrollView>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  butt: {
    marginTop: '10%',
    marginHorizontal: '7%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    marginTop: '30%',
    width: '80%',
    borderColor: 'black',
    backgroundColor: '#FFC0CB',
    maxHeight: '70%'
  },
  scrollstyle: {
    alignItems: 'center',

  },
  texteditor_style: {
    fontSize: 20,
    width: '100%',
    borderBottomWidth: 2,
    borderRadius: 10,
    borderBottomColor: 'black',
    textAlign: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  headertext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  },
  textContent: {
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    marginTop: '10%',
    width: '100%'
  },
  text_style: {
    fontSize: 20,
    textAlign: 'left',
    opacity: 0.4,
    color: 'black'
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Signup;