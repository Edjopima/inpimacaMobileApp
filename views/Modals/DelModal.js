import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import styles from './ModalStyles';
import {useDispatch,useSelector} from 'react-redux';

const DelModal = ({element}) =>{
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

    return(
		<View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Text style= {styles.modalTitle}>Eliminar Producto</Text>
							<Text>Esta seguro que desea eliminar {element.product}</Text>
							<View style={styles.modalButtonsContainer}>
                <TouchableOpacity style={styles.modalButtom}>
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
