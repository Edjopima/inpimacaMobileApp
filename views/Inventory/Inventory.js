import React from 'react';
import {View, Text} from 'react-native';
import InventoryTable from './InventoryTable';
import DolarMonitor from './DolarMonitor'
import SearchBox from './SearchBox';
import FilterByCategory from './FilterByCategory'

const Inventory = () => {
    return(
        <View style={{flexDirection:'column'}}>
            <Text style={{textAlign:'center', fontSize:30, fontWeight:'bold'}}>Inventario</Text>
            <DolarMonitor/>
            <SearchBox />
            <FilterByCategory/>
            <InventoryTable/>
        </View>
    );
};

export default Inventory;