import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import DelModal from './DelModal';
import EditAddModal from './EditAddModal';

const ModalContainer = ()=>{
    const store = useSelector(store=>store);
    const renderModal = () => {
        switch (store.modal.modalStyle){
            case 'edit':{
                return <EditAddModal element={store.modal.editModalElement} type={store.modal.modalStyle}/>
            }
            case 'del':{
                return <DelModal element={store.modal.editModalElement}/>
            }
            case 'add':{
                return <EditAddModal element={store.modal.editModalElement} type={store.modal.modalStyle}/>
            }
            default:{
                return <></>
            }
        }
    }
    return(
        renderModal()
    )
}

export default ModalContainer;
