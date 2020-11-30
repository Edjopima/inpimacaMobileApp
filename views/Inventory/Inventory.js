import React from 'react';
import {View, Text,Modal} from 'react-native';
import InventoryTable from './InventoryTable';
import DolarMonitor from './DolarMonitor'
import SearchBox from './SearchBox';
import FilterByCategory from './FilterByCategory'
import EditAddModal from '../Modals/EditAddModal'
import DelModal from '../Modals/DelModal'
import {useSelector} from 'react-redux';
import ModalContainer from '../Modals/ModalContainer';
import Header from '../Header/Header';

const Inventory = () => {
    const state = useSelector((state)=> state)
    return(
        <View style={{flexDirection:'column'}}>
            <Header/>
            <Text style={{textAlign:'center', fontSize:30, fontWeight:'bold'}}>Inventario</Text>
            <DolarMonitor/>
            <SearchBox />
            <FilterByCategory/>
            <InventoryTable/>
            <Modal visible={state.modal.showModal} transparent={true}>
                <ModalContainer/>
            </Modal>
        </View>
    );
};

export default Inventory;
