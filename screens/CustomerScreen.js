import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import assets from '../assets/index';

const CustomerScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay={true}
          loop={false}
          style={styles.animationStyle}
          source={assets.lottieFiles.sixPack}
        />
      </View>
      <Text>Customer Shit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  animationContainer: {
    backgroundColor: 'yellow',
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  animationStyle: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default CustomerScreen;
