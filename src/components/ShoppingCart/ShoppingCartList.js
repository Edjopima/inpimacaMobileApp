import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
import styles from './ShoppingListStyles';

const ShoppingCartList = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(state => state.shoppingCart)
  const dolar = useSelector(state => state.dolarOptions[1].value)
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const totalPrice = shoppingCart.reduce((acc, item) => acc + (item.price*item.quantity), 0)
    setTotal(totalPrice.toFixed(2))
  },[shoppingCart])

  const clearShoppingCart = () => {
    dispatch({ type: 'CLEAR_SHOPPING_CART' })
  }

  const removeItem = (item) => {
    console.log(item)
    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
  }

  return (
    <View style={styles.content}>
      <View style={styles.listContent}>
        <View style={styles.tableHeader}>
          <Text style={styles.text}>Producto</Text>
          <Text style={styles.text}>Precio Unit.</Text>
          <Text style={styles.text}>Cantidad</Text>
          <Text style={styles.text}>Total</Text>
        </View>
        {(shoppingCart.length >= 1) &&
        <FlatList
        style={styles.listContainer}
        data={shoppingCart}
        renderItem={({item}) => 
          <ShoppingCartItem 
            item={item}
            key={item.id}
            removeItem={removeItem}
        />} 
      />
      }
        <View style={styles.total}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>{`Monto total $: ${total}`}</Text>
          <Text style={{fontSize:18, fontWeight:'bold'}}>{`Monto total Bs: ${(total*dolar).toFixed(2)}`}</Text>
        </View>
        <View style={styles.row}>
        <Pressable style={styles.button} onPress={clearShoppingCart}>
          <Text>Limpiar Compra</Text>
        </Pressable>
      </View>
      </View>
    </View>
  );
}

export default ShoppingCartList;