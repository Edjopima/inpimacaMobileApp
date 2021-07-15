import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native'
import styles from './ModalStyles';

const DelModal = ({item,closeModal,deleteElement}) => {
  return (
    <View >
      <Text style={styles.title}>Eliminar Producto</Text>
      <Text style={styles.text}>Esta seguro de que desea eliminar el siguiente producto: {item.product}</Text>
      <View style={styles.buttonContainer}>
        <Pressable 
          onPress={closeModal}
          style={styles.button}
        >
          <Text>Cancelar</Text>
        </Pressable>
        <Pressable 
          onPress={() => deleteElement(item)}
          style={styles.button}  
        >
          <Text>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default DelModal;