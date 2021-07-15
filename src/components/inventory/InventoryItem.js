import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InventoryItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.product}</Text>
      <Text style={styles.text}>{item.priceUsd}</Text>
      <Text style={styles.text}>{item.priceBs}</Text>
      <Text style={styles.text}>{item.actions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:16,
  },
  text:{
    width:80,
  },
});

export default InventoryItem;