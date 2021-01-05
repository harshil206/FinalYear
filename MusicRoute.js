import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { Appbar, Avatar, Card, IconButton, TouchableRipple } from 'react-native-paper';


const MusicRoute = (props) => {
  return (

    <View >
      <Card>
        <View>
          <View style={styles.userbar}>
            <Avatar.Image size={40} source={require('./assets/champak.jpg')} />
            <Text style={styles.username}>Champaklal Jyantilal Gada</Text>
          </View>

          <TouchableRipple onPress={() => console.log('Pressed')}
            rippleColor="red">
            <View style={styles.gap}>
              <Image
                style={styles.post}
                source={require('./assets/champak.jpg')}
              />
            </View>
          </TouchableRipple>


        </View>
        <Card.Actions style={styles.btnaction}>
          <View style={styles.gapbtwn}>
            <IconButton icon="heart-outline" color="red" title="LIKE" />
            <Text >420</Text>
          </View>

          <IconButton icon="share-outline" title="SHARE" />
          <IconButton icon="bookmark-outline" title="SAVE" />
        </Card.Actions>
      </Card>
      <View>

      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  uprline: {
    width: 100 + "%",
    height: 56,
    marginTop: 0,

    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userbar:
  {
    paddingTop: 10,
    width: 100 + "%",
    //   paddingTop:50,
    height: 50,
    flexDirection: 'row',
    backgroundColor: "white",
    marginHorizontal: 5
  },
  headfont: {
    fontSize: 30,
    fontWeight: 'bold'

  },
  appbarheader: {
    height: 55,
    // backgroundColor:'#FF69B4'
  },
  post: {
    width: 100 + "%",
    paddingTop: 10
  },
  gap: {
    marginTop: 10
  },
  username: {
    marginLeft: 5,
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 18


  },
  btnaction: {
    padding: 10,
    marginLeft: 5,
    justifyContent: 'space-around'
  },
  gapbtwn: {
    flexDirection: 'column'
  }
});
export default MusicRoute;