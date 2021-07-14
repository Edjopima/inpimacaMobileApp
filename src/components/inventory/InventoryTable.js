import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import InventoryItem from './InventoryItem';

const InventoryTable = ({inventory}) => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>Producto</Text>
        <Text style={styles.text}>Precio $</Text>
        <Text style={styles.text}>Precio Bs</Text>
        <Text style={styles.text}>Acciones</Text>
      </View>
      <FlatList
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  text: {
    width:80,
    },
});

export default InventoryTable;