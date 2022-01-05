import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomerScreen from '../screens/CustomerScreen';

/**
 * Description: The main navigation logic
 * Screens: Customer
 * @author George Garcia
 */

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName='Customer'>
      <MainStack.Screen
        name='Customer'
        component={CustomerScreen}
        options={{
          headerTransparent: false,
          headerLargeTitle: true,
          headerTitle: 'Welcome',
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
