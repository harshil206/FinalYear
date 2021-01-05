import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import AppButton from '../Components/Appbutton';
// import MemeditNavigator from'../AppNavigator/MemeditNavigator';

const Homepage = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../assets/coollogo_com-60063244.png")} />
      </View>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Username....."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password..."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          props.navigation.navigate({ routeName: 'sign' })
        }}>
          <Text style={{ fontSize: 15, paddingTop: '2%', fontWeight: 'bold' }}>
            Don't have account!!
          </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>   Create account....</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => { props.navigation.navigate({ routeName: 'Main' }) }}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => { props.navigation.navigate({ routeName: 'sign' }) }}>REGISTER</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity onPress={() => { props.navigation.navigate({ routeName: 'MyComponent' }) }} activeOpacity={0.9}>
        <Text style={styles.skip_button}>SKIP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginVertical: '20%',
    height: '15%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: '5%',
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: '2%',
    textAlign: 'center',
    alignSelf: 'center',
  },

  forgot_button: {
    marginTop: '1%',
    fontWeight: 'bold',
    // backgroundColor: 'blue',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15
  },

  skip_button: {
    height: 30,
    marginBottom: '10%',
    marginTop: '7%',
    fontSize: 15,
    fontWeight: 'bold',

  },

  loginBtn: {
    width: 80,
    borderRadius: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
  },
  alternativeLayoutButtonContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '20%',
    alignItems: "center",
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'
  }
});

export default Homepage;