import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Header from '../Header/Header';
import DolarMonitor from '../DolarMonitor/DolarMonitor';
import InventoryTable from './InventoryTable';
import SearchBox from './SearchBox';

const Inventory = () => {
  const initialInventory = [{id:1, name:'Harina de maiz pan',priceUsd:1,priceBs:3000,actions:'lol' },{id:2, name:'Harina ',priceUsd:2,priceBs:3100,actions:'lol' }]
  const [inventory, setInventory] = React.useState(initialInventory);
  const [filteredInventory, setFilteredInventory] = React.useState(inventory);

  const handleSearch = (query) => {
    const newInventory = inventory.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    })
    setFilteredInventory(newInventory);
  }

  const dolarOptions = [{name:'Dolar Today', value: 3000}, {name:'Dolar Compra', value:3100}];

  return(
    <View>
      <Header />
      <Text style={{textAlign:'center', fontSize:30, fontWeight:'bold'}}>Inventario</Text>
      <DolarMonitor options={dolarOptions} />
      <SearchBox handleSearch={handleSearch}/>
      <InventoryTable inventory={filteredInventory}/>
    </View>
  );
};

export default Inventory;