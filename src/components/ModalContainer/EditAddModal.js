import React, { useEffect, useState } from 'react';
import {Text, View,Pressable,TextInput} from 'react-native';
import styles from './ModalStyles';
import {Picker} from '@react-native-picker/picker';

const EditAddModal = ({type, element, closeModal}) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const onSubmit = () => {
    const product = {
      product: productName,
      price: productPrice,
      category: productCategory,
    } 
    console.log(product);
    closeModal();
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