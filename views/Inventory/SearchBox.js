import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux';
import styles from './styles';

const SearchBox = () => {
    const dispatch=useDispatch();

    const search =(text)=>{
        dispatch({
            type:'FILTER_BY NAME',
            payload: text.toLowerCase()
        })
    }

    const setModalShow = () => {
        dispatch({
            type:'SHOW_MODAL',
            payload:{
                showModal:true,
                editModalElement:null,
                modalStyle:'add'
            }
        });
    };

    return(
    <View
        style={styles.searchBox}>
        <TouchableOpacity>
            <FontAwesomeIcon style={{ color: '#0074D5' }} icon={faSearch} />
        </TouchableOpacity>
        <TextInput
            onChangeText={(text)=>search(text)}
            placeholder='Buscar'
            editable
            style={{width:246}}
            />
                <TouchableOpacity onPress={setModalShow}>
            <FontAwesomeIcon style = {{color:'#0074D5'}} icon={faPlus} />
        </TouchableOpacity>
    </View>);
};

export default SearchBox;
