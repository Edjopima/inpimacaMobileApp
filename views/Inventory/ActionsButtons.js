import React from 'react';
// eslint-disable-next-line prettier/prettier
import {View,TouchableOpacity,StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPencilRuler, faTrash } from '@fortawesome/free-solid-svg-icons'
import styles from './styles';

const ActionButtons = (setModalShow, product) => {
    return (
        <View style={styles.ActionButtons}>
            <TouchableOpacity
                onPress={()=>setModalShow('edit',product)}
            >
                <FontAwesomeIcon icon={faPencilRuler} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>setModalShow('del',product)}
            >
                <FontAwesomeIcon icon = {faTrash} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

export default ActionButtons;
