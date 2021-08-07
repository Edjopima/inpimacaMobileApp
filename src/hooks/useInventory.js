import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDolarOptions from './useDolarOptions';
import useGetRequest from './useGetRequest';
import processInventoryElement from '../utils/processInventoryElement';

const useInventory = (modalActions) => {
  const [inventory, setInventory] = useState([]);
  const dipatch = useDispatch()

  const baseInventory=useGetRequest('https://inpimaca-api.herokuapp.com/inventario');
  const dolarOptions = useDolarOptions();

  useEffect(()=>{
    if (baseInventory){

      const processedInventory = baseInventory.map(element => processInventoryElement(element, dolarOptions, modalActions))
      setInventory(processedInventory);
      dipatch({
        type:'SET_INVENTORY',
        payload:processedInventory
      })
    }
  },[baseInventory, dolarOptions]);

  return inventory;
}

export default useInventory;