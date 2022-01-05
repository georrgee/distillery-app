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
} from 'react-native';

const BeverageScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>BeverageScreen Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BeverageScreen;
