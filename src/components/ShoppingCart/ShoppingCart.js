import React from 'react';
import {Text, View} from 'react-native';
import Header from '../Header/Header'
import styles from './ShoppingListStyles';
import ShoppingCartList from './ShoppingCartList';
import { useSelector } from 'react-redux';
import CartIcon from '../../assets/shopping-cart-solid.svg'

const ShoppingCart = () => {
  const shoppingCart = useSelector(state => state.shoppingCart)

  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.title}>Carrito de compra</Text>
      {shoppingCart.length > 0 ? 
        <ShoppingCartList/>
        :
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartTitle} >Tu carrito está vacío</Text>
          <CartIcon style={styles.icon}/>
        </View>
      }
    </View>
  );
}

export default ShoppingCart;