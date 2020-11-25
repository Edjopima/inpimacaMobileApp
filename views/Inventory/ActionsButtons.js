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

const ActionButtons = (element) => {
    const dispatch=useDispatch();
    const modalShow=useSelector((state)=>state.delModalShow);

    const setModalShow = (type) =>{
        (type==='edit')?
            dispatch({
                type:'SHOW_EDIT_MODAL',
                payload:true
            }):
            dispatch({
                type:'SHOW_DEL_MODAL',
                payload:true,
            })
    }

    return (
        <View style={styles.ActionButtons}>
            <TouchableOpacity
                onPress={()=>setModalShow('edit')}
            >
                <FontAwesomeIcon icon={faPencilRuler} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>setModalShow('del')}
            >
                <FontAwesomeIcon icon = {faTrash} style={styles.icon} />
            </TouchableOpacity>
    </View>
    );
};

export default ActionButtons;
