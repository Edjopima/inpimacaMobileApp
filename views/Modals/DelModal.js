import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import styles from './ModalStyles';
import {useDispatch,useSelector} from 'react-redux';

const DelModal = ({element}) =>{
    const store = useSelector(state=>state)
    const dispatch=useDispatch();
    const hideModal = () => {
        dispatch({
            type:'SHOW_MODAL',
            payload:{
                showModal:false,
                editModalElement:null
            }
        });
    };

    const handleSubmit=()=>{
        fetch('https://inpimaca-api.herokuapp.com/eliminarProducto', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id:element.id,
                product:element.product,
                price:element.price,
                category:element.category
            })
        })
        .then(response => response.json())
        .then(data=>{
            const i = store.products.findIndex((e)=>e.product===element.product);
            store.products.splice(i,1);
        })
        .catch(error => console.error(error));
        hideModal();
    }

    return(
		<View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Text style= {styles.modalTitle}>Eliminar Producto</Text>
							<Text>Esta seguro que desea eliminar {element.product}</Text>
							<View style={styles.modalButtonsContainer}>
                <TouchableOpacity style={styles.modalButtom} onPress={()=>handleSubmit()}>
                    <Text>Eliminar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>hideModal()} style={styles.modalButtom}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
            	</View>

            </View>
        </View>
	);
};

export default DelModal;
