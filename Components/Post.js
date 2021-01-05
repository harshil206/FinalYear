import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableNativeFeedback, Platform, ImageBackground, Image } from 'react-native';

const Post = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}  >
        <View style={styles.post}>
          <ImageBackground source={{ uri: props.data }} style={styles.imagePost}></ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
  },
  post: {
    margin: '1%',
    paddingHorizontal: 2
  },
  imagePost: {
    width: 110,
    height: 110
  }
});

export default Post;