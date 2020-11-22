import React from 'react';
// eslint-disable-next-line prettier/prettier
import {View,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPencilRuler, faTrash } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
    ActionButtons:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
    },
    icon:{
        color:'#FF511B',
        margin:10,
    }
});

const ActionButtons = () => {
    return (
        <View style={styles.ActionButtons}>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faPencilRuler} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesomeIcon icon = {faTrash} style={styles.icon} />
            </TouchableOpacity>
    </View>
    );
};

export default ActionButtons;