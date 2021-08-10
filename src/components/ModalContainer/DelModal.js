import React, { useState } from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native'
import { useDispatch } from 'react-redux';
import api from '../../libs/api';
import styles from './ModalStyles';

const DelModal = ({item,closeModal}) => {
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  const deleteElement = async (item) => {
    setError(false)
    try {
      const element = await api.deleteElement(item)
      if (!element) {
        throw new Error('Error al eliminar el prodcuto')
      }
      dispatch({
        type:'DELETE_ELEMENT',
        payload: element
      })
    } catch (error) {
      setError(error.message)
    }
    closeModal();
  };

  return (
    <View >
      <Text style={styles.title}>Eliminar Producto</Text>
      {error && <Text style={styles.error}>{error}</Text>}
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