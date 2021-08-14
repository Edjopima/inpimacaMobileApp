import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inventory from '../inventory/Inventory'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

const Tabs = createBottomTabNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          component = {Inventory}
          name='inventory'
        />
        <Tabs.Screen
          component = {ShoppingCart}
          name='shoppingCart'
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;