import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InventoryItem = ({item}) => {

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {width:100}]}>{item.product}</Text>
      <Text style={styles.text}>{item.priceUsd}</Text>
      <Text style={styles.text}>{item.priceBs}</Text>
      {item.actions}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight:10,
    paddingLeft:10,
    paddingBottom:10,
  },
  text:{
    width:90,
    textAlign:'center',
    fontSize:14,
  },
});

export default InventoryItem;