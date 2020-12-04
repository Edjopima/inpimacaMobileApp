import React from 'react';
import {View, Text,Modal,SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import InventoryTable from './InventoryTable';
import DolarMonitor from './DolarMonitor'
import SearchBox from './SearchBox';
import FilterByCategory from './FilterByCategory'
import {useDispatch, useSelector} from 'react-redux';
import ModalContainer from '../Modals/ModalContainer';
import Header from '../Header/Header';
import setData from './setData'

const Inventory = () => {
    const dispatch = useDispatch();
    const state = useSelector((state)=> state)
    return(
        <SafeAreaView style={{flexDirection:'column'}}>
            <Header/>
            <Text style={{textAlign:'center', fontSize:30, fontWeight:'bold'}}>Inventario</Text>
            <DolarMonitor/>
            <SearchBox />
            <FilterByCategory/>
            <InventoryTable/>
            <Modal visible={state.modal.showModal} transparent={true}>
                <ModalContainer/>
            </Modal>
        </SafeAreaView>
    );
};

export default Inventory;
