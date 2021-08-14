import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
  const state = useSelector(state => state)
  const {shoppingCart,dolarOptions} = state

  return (
    <View>
      <Text>Detalles de la compra</Text>
      <View>
        {shoppingCart.map((element, index)=>
          <Text>{`Producto: ${element.product} Cantidad: ${element.quantity}`}</Text>
        )}
        <View>
          <Text>{`Monto total $:`}</Text>
          <Text>{`Monto total Bs:`}</Text>
        </View>
      </View>
      <View>
        <Pressable>
          <Text>Limpiar Compra</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ShoppingCart;