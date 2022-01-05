import React, { useState, useEffect, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import LottieView from 'lottie-react-native';
import assets from '../assets/index';

// TODO: Figure out the autoplay for animation
const CustomerScreen = (props) => {
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current.play(0, 110);
  }, []);

  const handleButtonTap = () => {
    props.navigation.navigate('Beverage');
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      contentContainerStyle={{ flex: 1 }}
      behavior='position'
      keyboardVerticalOffset={50}
    >
      <StatusBar barStyle='dark-content' />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.animationContainer}>
            <LottieView
              ref={(animation) => {
                animationRef.current = animation;
              }}
              autoPlay={true}
              loop={false}
              style={{ flex: 1 }}
              source={assets.lottieFiles.sixPack}
            />
          </View>

          <View style={styles.bottomElementsContainer}>
            <Text style={styles.headerTextStyle}>Enter your name</Text>
            <TextInput placeholder='Tap here' style={styles.textInputStyle} />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => handleButtonTap()}
            >
              <Text style={styles.buttonTextStyle}>Choose bottles</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  animationContainer: {
    //backgroundColor: 'yellow',
    flex: 0.4,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  bottomElementsContainer: {
    //backgroundColor: 'cyan',
    flex: 0.35,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  textInputStyle: {
    backgroundColor: 'white',
    height: 50,
    width: '70%',
    paddingLeft: 10,
    borderRadius: 5,
  },

  buttonContainer: {
    backgroundColor: 'dodgerblue',
    flex: 0.3,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },

  buttonTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CustomerScreen;
