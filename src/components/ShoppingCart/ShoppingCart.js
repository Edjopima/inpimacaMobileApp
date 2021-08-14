import React from 'react';
import {Text, View} from 'react-native';
import Header from '../Header/Header'
import styles from './ShoppingListStyles';
import ShoppingCartList from './ShoppingCartList';
const ShoppingCart = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.title}>Carrito de compra</Text>
      <ShoppingCartList/>
    </View>
  );
}

export default ShoppingCart;