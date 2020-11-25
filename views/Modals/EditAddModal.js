import React,{useState} from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './ModalStyles'
import { useDispatch, useSelector } from 'react-redux';

const EditAddModal = (element = '', type) => {
    const dispatch = useDispatch();
    const modalShow = useSelector((store)=>store.editModalShow)
    const [product,setProduct] = useState(type==='edit'? element.product: '' );
    const [price,setPrice] = useState( type==='edit'? element.price: '');
    const [category, setCategory] = useState( type==='edit'?element.category:'')

    const hideModal = () => {
        dispatch({
            type:'SHOW_EDIT_MODAL',
            payload:false
        });
    };

    return(
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Text style= {styles.modalTitle}>Agregar Producto</Text>
            <TextInput placeholder='Nombre Del Producto' style={styles.modalInput} value={product}/>
            <TextInput placeholder='Precio' style={styles.modalInput} keyboardType='numeric' value={price}/>
            <View style={styles.modalCategory}>
                <Picker
                    style={{height:30,width:140}}
                    selectedValue={category}>
                    <Picker.Item label='Categoria' value='' />
                    <Picker.Item label="Viveres" value="V" />
                    <Picker.Item label="Dulces" value="D" />
                    <Picker.Item label="Lacteos" value="L" />
                    <Picker.Item label="Aseo Personal" value="AP" />
                    <Picker.Item label="Otros" value="O" />
                </Picker>
            </View>
            <View style={styles.modalButtonsContainer}>
                <TouchableOpacity style={styles.modalButtom}>
                    <Text>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>hideModal()} style={styles.modalButtom}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
};

export default EditAddModal;
