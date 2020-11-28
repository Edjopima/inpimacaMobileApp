import React,{useState} from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './ModalStyles'
import { useDispatch, useSelector } from 'react-redux';

const EditAddModal = ({element,type}) => {
    const dispatch = useDispatch();
    const store = useSelector((store)=>store)

    const [product,setProduct] = useState(type==='edit'? element.product: '' );
    const [price,setPrice] = useState( type==='edit'? element.price: '');
    const [category, setCategory] = useState( type==='edit'?element.category:'')

    const onChange = (text,setState,state)=>{
        if (state===price){
            setState(text);
        }else{
            setState(text);
        }
    }

    const hideModal = () => {
        dispatch({
            type:'SHOW_MODAL',
            payload:{
                showModal:false,
                editModalElement:null
            }
        });
    };

    const handleSubmit = (type) => {
        if (type==='edit'){
            fetch('https://inpimaca-api.herokuapp.com/actualizarProducto', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id:element.id,
                    product,
                    price,
                    category
                })
            })
            .then(response => response.json())
            .then(data=>{
                const i = store.products.findIndex((e)=>e.product===product);
                store.products.splice(i,1,data);
            })
            .catch(error => console.error('error'));
            hideModal();
        }else{
            fetch('https://inpimaca-api.herokuapp.com/agregarProducto', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    product,
                    price,
                    category
                })
            })
            .then(response => response.json())
            .then(data=> {
                store.products.push(data)
            })
            .catch(error => console.error(error));
            hideModal();
        }
    }

    return(
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Text style= {styles.modalTitle}>Agregar Producto</Text>
            <TextInput 
                placeholder='Nombre Del Producto' 
                style={styles.modalInput} 
                value={product}
                onChangeText={(text)=>{onChange(text,setProduct,product)}}
                />
            <TextInput 
                placeholder='Precio' 
                style={styles.modalInput} 
                keyboardType='numeric' 
                value={price}
                onChangeText={(text)=>{onChange(text,setPrice,price)}}
                />
            <View style={styles.modalCategory}>
                <Picker
                    style={{height:30,width:140}}
                    selectedValue={category}
                    onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                    >
                    <Picker.Item label='Categoria' value='' />
                    <Picker.Item label="Viveres" value="V" />
                    <Picker.Item label="Dulces" value="D" />
                    <Picker.Item label="Lacteos" value="L" />
                    <Picker.Item label="Aseo Personal" value="AP" />
                    <Picker.Item label="Otros" value="O" />
                </Picker>
            </View>
            <View style={styles.modalButtonsContainer}>
                <TouchableOpacity style={styles.modalButtom} onPress={()=>handleSubmit(type)}>
                    <Text>{type==='edit'?'Editar':'Añadir'}</Text>
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
