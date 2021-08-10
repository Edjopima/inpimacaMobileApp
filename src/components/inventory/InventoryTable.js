import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import InventoryItem from './InventoryItem';

const InventoryTable = ({inventory}) => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={[styles.text, {width:100}]}>Producto</Text>
        <Text style={styles.text}>Precio $</Text>
        <Text style={styles.text}>Precio Bs</Text>
        <Text style={styles.text}>Acciones</Text>
      </View>
      <FlatList
        style={styles.listContainer}
        data={inventory}
        renderItem={({item}) => 
          <InventoryItem 
            item={item}
            key={item.id}
        />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor:'#F5F8FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor:'#FF511B',
    borderTopLeftRadius:40,
    borderTopRightRadius:40
  },
  text: {
    width:90,
    textAlign: 'center',
    },
  listContainer:{
    paddingTop:10,
    backgroundColor:'#F5F8FA'
  },
});

export default InventoryTable;