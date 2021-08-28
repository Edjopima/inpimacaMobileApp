import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native'
import styles from './ShoppingListStyles';
import TrashIcon from '../../assets/trash-solid.svg'

const ShoppingCartItem = ({item, removeItem}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{item.product}</Text>
      <Text style={styles.text}>{item.price}</Text>
      <Text style={styles.text}>{item.quantity}</Text>
      <Text style={styles.text}>{(item.price*item.quantity).toFixed(2)}</Text>
      <Pressable onPress={()=>removeItem(item)}>
        <TrashIcon style={{width: 15,height: 15,color: '#FF511B', marginRight:10}}/>
      </Pressable>
    </View>
  );
}

export default ShoppingCartItem;