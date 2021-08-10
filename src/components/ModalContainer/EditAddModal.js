import React, { useEffect, useState } from 'react';
import {Text, View,Pressable,TextInput} from 'react-native';
import styles from './ModalStyles';
import {Picker} from '@react-native-picker/picker';
import api from '../../libs/api';
import { useDispatch } from 'react-redux';

const EditAddModal = ({type, element, closeModal, modalActions}) => {
  const dispatch = useDispatch()
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = async () => {
    const errorMessages = {
      edit:'Error editando el producto',
      add:'Error agregando el producto',
    }
    let product = {}
    setError(false);
    if (type==='edit'){
      product.id=element.id
      product.product= productName
      product.price= productPrice
      product.category= productCategory
    } else {
      product.product= productName
      product.price= productPrice
      product.category= productCategory
    }
    try {
      const response = await api.editAddProduct(type, product)
      if (!response){
        throw new Error(errorMessages[type])
      }else{
        if (type==='edit') {
          dispatch({
            type:'EDIT_ELEMENT',
            payload:{
              response,
              modalActions
            }
          })
          closeModal();
        } else {
          dispatch({
            type:'ADD_ELEMENT',
            payload:{
              response,
              modalActions
            }
          })
          closeModal();
        }
      }
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  };

  useEffect(()=>{
    if(type === 'edit') {
      setProductName(element.product);
      setProductPrice(element.price);
      setProductCategory(element.category);
    }
  },[type,element])

  return (
    <View>
      <Text style={styles.title} >{(type==='edit')?'Editar Producto':'Agregar Producto'}</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput 
        style={styles.textInput}
        onChangeText={text=>setProductName(text)}
        value={productName}
        placeholder="Nombre del Producto"
      />
      <TextInput 
        style={styles.textInput}
        onChangeText={text=>setProductPrice(text)}
        value={productPrice}
        placeholder="Precio"
        keyboardType="numeric"
      />
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={productCategory}
          onValueChange={(itemValue, itemIndex) =>
            setProductCategory(itemValue)
        }>
          <Picker.Item label="Categoria" value="" />
          <Picker.Item label="Viveres" value="V" />
          <Picker.Item label="Dulces" value="D" />
          <Picker.Item label="Lacteos" value="L" />
          <Picker.Item label="Aseo Personal" value="AP" />
          <Picker.Item label="Otros" value="O" />
        </Picker>
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
          <Text>{(type==='edit')?'Editar':'Agregar'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default EditAddModal;