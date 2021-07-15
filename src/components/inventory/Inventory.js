import React, { useEffect, useState } from 'react';
import {View, Text, Pressable} from 'react-native';
import Header from '../Header/Header';
import DolarMonitor from '../DolarMonitor/DolarMonitor';
import InventoryTable from './InventoryTable';
import SearchBox from './SearchBox';
import useInventory from '../../hooks/useInventory';
import useDolarOptions from '../../hooks/useDolarOptions';
import ModalContainer from '../ModalContainer/ModalContainer';

const Inventory = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalElement, setModalElement] = useState({});

  const modalActions = {setModalElement, setShowModal, setModalType}

  const inventory = useInventory(modalActions);
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
      <SearchBox 
        handleSearch={handleSearch}
        modalActions={modalActions}
      />
      <InventoryTable 
        inventory={filteredInventory}
        setModalElement = {setModalElement}
      />
      <ModalContainer 
        show={showModal}
        type = {modalType}
        element = {modalElement}
        modalActions={modalActions}
      />
    </View>
  );
};

export default Inventory;