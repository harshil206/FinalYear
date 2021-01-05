import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';


import Card from '../Components/Card';
import Appbutton from '../Components/Appbutton';

const Login = props => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.headertext}>
          <Text style={styles.text}>LOGIN</Text>
          <AntDesign name="login" size={40} color="black" />
        </View>
        <View style={styles.textContent}>
          <Text style={styles.text_style}>Username : </Text>
          <TextInput style={styles.texteditor_style}></TextInput>
        </View>
        <View style={styles.textContent}>
          <Text style={styles.text_style}>Password : </Text>
          <TextInput style={styles.texteditor_style} secureTextEntry={true}></TextInput>
        </View>
        <Appbutton style={styles.loginbutt}>Login</Appbutton>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, paddingTop: '4%', fontWeight: 'bold' }}>
            Forgot Password ??
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
          <Text style={{ fontSize: 15, paddingTop: '4%', fontWeight: 'bold' }}>
            Create account....
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  loginbutt: {
    marginTop: '10%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    marginTop: '30%',
    width: '80%',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: '#ccffff'
  },
  texteditor_style: {
    fontSize: 20,
    width: 140,
    borderBottomWidth: 2,
    borderRadius: 10,
    borderBottomColor: 'black',
    textAlign: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  headertext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  textContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '10%',
    width: '100%'
  },
  text_style: {
    fontSize: 20
  }
});

export default Login;