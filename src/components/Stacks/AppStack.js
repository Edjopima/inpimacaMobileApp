import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inventory from '../inventory/Inventory'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import InventoryIcon from '../../assets/boxes-solid.svg'
import CartIcon from '../../assets/shopping-cart-solid.svg'

const Tabs = createBottomTabNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeBackgroundColor: '#F5F8FA',
          inactiveBackgroundColor: '#F5F8FA',
        }}
      >
        <Tabs.Screen
          component = {Inventory}
          name='inventory'
          options={{
            title: "Inventario",
            tabBarIcon: ({ color, size }) => (
              <InventoryIcon style={{width:size, height:size}} color={color} />
            )
          }}
        />
        <Tabs.Screen
          component = {ShoppingCart}
          name='shoppingCart'
          options={{
            title: "Carrito de Compras",
            tabBarIcon: ({ color, size }) => (
              <CartIcon style={{width:size, height:size}} color={color} />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;