import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDolarOptions from './useDolarOptions';
import useGetRequest from './useGetRequest';
import processInventoryElement from '../utils/processInventoryElement';
import Storage from '../libs/storage';

const useInventory = (modalActions) => {
  const [inventory, setInventory] = useState([]);
  const dipatch = useDispatch()

  const baseInventory=useGetRequest('https://inpimaca-api.herokuapp.com/inventario');
  const dolarOptions = useDolarOptions();

  useEffect(async () => {
    const stringInventory = await Storage.instance.get('inventory')
    setInventory(stringInventory ? JSON.parse(stringInventory) : []);
  } , [])

  useEffect(async () => {
    const stringDolarOptions = await Storage.instance.get('dolarOptions')
    const processedInventory = inventory.map(element => processInventoryElement(element, JSON.parse(stringDolarOptions), modalActions))
    dipatch({
      type:'SET_INVENTORY',
      payload:processedInventory
    })
    if (stringDolarOptions){
      dipatch({
        type:'SET_DOLAR_OPTIONS',
        payload:JSON.parse(stringDolarOptions)
      })
    }
  } , [inventory])

  useEffect(async ()=>{
    if (baseInventory){
      const stringInventory = JSON.stringify(baseInventory)
      await Storage.instance.store('inventory',stringInventory)
      const stringDolarOptions = JSON.stringify(dolarOptions);
      await Storage.instance.store('dolarOptions', stringDolarOptions);
      const processedInventory = baseInventory.map(element => processInventoryElement(element, dolarOptions, modalActions))
      dipatch({
        type:'SET_INVENTORY',
        payload:processedInventory
      })
    }
  },[baseInventory, dolarOptions]);

  return inventory;
}

export default useInventory;