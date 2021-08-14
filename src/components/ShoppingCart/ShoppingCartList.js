import React from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
import styles from './ShoppingListStyles';

const ShoppingCartList = () => {
  const shoppingCart = useSelector(state => state.shoppingCart)

  return (
    <View style={styles.content}>
      <View style={styles.listContent}>
        <View style={styles.row}>
          <Text style={{width:90}}>Producto</Text>
          <Text>Precio Unit.</Text>
          <Text>Cantidad</Text>
          <Text>Total</Text>
        </View>
        {(shoppingCart.length >= 1) &&
        <FlatList
        style={styles.listContainer}
        data={shoppingCart}
        renderItem={({item}) => 
          <ShoppingCartItem 
            item={item}
            key={item.id}
        />} 
      /> 
      }
        <View style={styles.row}>
          <Text>{`Monto total $:`}</Text>
          <Text>{`Monto total Bs:`}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Pressable style={styles.button}>
          <Text>Limpiar Compra</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ShoppingCartList;