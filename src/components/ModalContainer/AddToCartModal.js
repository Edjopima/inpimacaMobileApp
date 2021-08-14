import React, { useState } from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './ModalStyles';

const AddToCartModal = ({element, closeModal}) => {
  const [quantity, setQuantity] = useState('')
  const dispatch = useDispatch()

  const reduceQuantity = () => {
    if (parseInt(quantity) > 0){
      const newQuantity = parseInt(quantity) - 1
      setQuantity(newQuantity.toString())
    } else {
      setQuantity('')
    }
  }

  const increaseQuantity = () => {
    if (quantity === ''){
      setQuantity('1')
    } else {
      const newQuantity = parseInt(quantity) + 1
      setQuantity(newQuantity.toString())
    }
  }

  const onSubmit = (element) => {
    const data = {
      ...element,
      quantity:parseInt(quantity),
    }
    console.log(data)
    dispatch({
      type: 'ADD_TO_CART',
      payload: data
    })
    closeModal()
  }

  return (
    <View>
      <Text style={styles.title}>Añadir al carrito</Text>
      <Text style={{textAlign:'center', marginBottom:10}}>{element.product}</Text>
      <View style={styles.row}>
        <Pressable
          onPress={reduceQuantity}
          style={styles.button}
          >
          <Text>-</Text>
        </Pressable>
        <TextInput 
          style={styles.textInputSmall}
          onChangeText={text=>setQuantity(text)}
          value={quantity}
          placeholder="Cantidad"
          keyboardType="numeric"
        />
        <Pressable 
          onPress={increaseQuantity}
          style={styles.button}
          >
          <Text>+</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={closeModal}
          style={styles.button}
        >
          <Text>Cancelar</Text>
        </Pressable>
        <Pressable 
          onPress={() => onSubmit(element)}        
          style={styles.button}
        >
          <Text>Agregar</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default AddToCartModal;