import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native'
import PencilIcon from '../../assets/pencil-ruler-solid.svg';
import TrashIcon from '../../assets/trash-solid.svg'

const ActionButtons = ({modalActions, item}) => {

  const {setModalElement, setShowModal, setModalType} = modalActions;

  const openModal = (type) => {
    setShowModal(true);
    setModalType(type);
    if (type != 'add') {
      setModalElement(item);
    }
  }

  return (
    <View style={styles.row}>
      <Pressable onPress={()=>openModal('edit')}>
        <PencilIcon style={styles.icon} />
      </Pressable>
      <Pressable onPress={()=>openModal('delete')} >
        <TrashIcon  style={styles.icon}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    width: 90,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    width: 15,
    height: 15,
    color: '#FF511B',
  },
});

export default ActionButtons;