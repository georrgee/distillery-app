import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomerScreen from '../screens/CustomerScreen';
import BeverageScreen from '../screens/BottlesScreen';

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

      <MainStack.Screen
        name='Beverage'
        component={BeverageScreen}
        options={{
          headerTransparent: false,
          headerLargeTitle: true,
          headerTitle: 'Beverages',
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
