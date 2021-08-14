import React from 'react';
import {View, Text} from 'react-native'
import styles from './ShoppingListStyles';

const ShoppingCartItem = ({item}) => {
  return (
    <View style={styles.row}>
      <Text style={{width:90}}>{item.product}</Text>
      <Text>{item.price}</Text>
      <Text>{item.quantity}</Text>
      <Text>{item.price*item.quantity}</Text>
    </View>
  );
}

export default ShoppingCartItem;