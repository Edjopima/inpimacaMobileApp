import React, { useEffect, useState } from 'react';
import useDolarOptions from './useDolarOptions';
import useGetRequest from './useGetRequest';

const useInventory = () => {
  const [inventory, setInventory] = useState([]);

  const processInventory = (inventory, dolarOptions) => {
    return inventory.map((item) => {
      return {
        ...item,
        priceUsd: item.price,
        priceBs: (item.price * dolarOptions[1].value).toFixed(2),
        actions:'lol'
      }
    })
  }

  const baseInventory=useGetRequest('https://inpimaca-api.herokuapp.com/inventario');
  const dolarOptions = useDolarOptions();

  useEffect(()=>{
    if (baseInventory){
      const processedInventory = processInventory(baseInventory, dolarOptions)
      setInventory(processedInventory);
    }
  },[baseInventory, dolarOptions]);

  return inventory;
}

export default useInventory;