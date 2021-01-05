import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


import { Data } from '../DummyData/Data';
import Post from '../Components/Post';

const Profile = props => {

  const renderItem = (itemData) => {
    return (
      <Post data={itemData.item.image} />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.image} source={require('../assets/champak.jpg')} />
        <Text style={styles.textBold}>Harshil</Text>
      </View>
      <View style={styles.Likes}>
        <View style={styles.textContainer}>
          <Text style={{ ...styles.text, ...styles.textBold }}>1</Text>
          <Text style={{ ...styles.text }}>Post</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ ...styles.text, ...styles.textBold }}>200</Text>
          <Text style={styles.text}>Followers</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ ...styles.text, ...styles.textBold }}>100</Text>
          <Text style={styles.text}>Following</Text>
        </View>
      </View>


      <View style={styles.postgrid}>
        <FlatList data={Data} numColumns={3} renderItem={renderItem} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: '3%'
  },
  contentContainer: {
    marginHorizontal: '2%',
    marginVertical: '8%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  Likes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: 'grey'
  },
  textBold: {
    fontWeight: 'bold',
    color: 'black'
  },
  postgrid: {
    borderColor: 'black',
    // borderWidth: 1,
    marginTop: '15%',
    borderTopWidth: 1,
    flex: 1
  },
})



export default Profile;