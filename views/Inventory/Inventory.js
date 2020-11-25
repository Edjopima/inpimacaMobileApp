import React from 'react';
import {View, Text} from 'react-native';
import InventoryTable from './InventoryTable';
import DolarMonitor from './DolarMonitor'
import SearchBox from './SearchBox';
import FilterByCategory from './FilterByCategory'
import EditAddModal from '../Modals/EditAddModal'
import DelModal from '../Modals/DelModal'

const Inventory = () => {
    return(
        <View style={{flexDirection:'column'}}>
            <Text style={{textAlign:'center', fontSize:30, fontWeight:'bold'}}>Inventario</Text>
            <DolarMonitor/>
            <SearchBox />
            <FilterByCategory/>
            <InventoryTable/>
            <Modal visible={modalShow} transparent={true}>
                <EditAddModal type='edit' />
            </Modal>
        </View>
    );
};

export default Inventory;
