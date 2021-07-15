import React, { useEffect, useState } from 'react';
import {View, Text, Pressable} from 'react-native';
import Header from '../Header/Header';
import DolarMonitor from '../DolarMonitor/DolarMonitor';
import InventoryTable from './InventoryTable';
import SearchBox from './SearchBox';
import useInventory from '../../hooks/useInventory';
import useDolarOptions from '../../hooks/useDolarOptions';

const Inventory = () => {
  const inventory = useInventory();
  const dolarOptions = useDolarOptions();
  const [filteredInventory, setFilteredInventory] = useState(inventory);

  const handleSearch = (query) => {
    const newInventory = inventory.filter((item) => {
      return item.product.toLowerCase().includes(query.toLowerCase());
    })
    setFilteredInventory(newInventory);
  }

  useEffect(() => {
    setFilteredInventory(inventory);
  }, [inventory]);

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