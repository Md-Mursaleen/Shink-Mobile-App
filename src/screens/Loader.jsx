/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
const Loader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/loader-image.gif')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100, // Set the width and height as needed
    height: 100,
  },
});

export default Loader;
