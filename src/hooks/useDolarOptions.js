import React, { useEffect, useState } from 'react';
import useGetRequest from './useGetRequest';

const useDolarOptions = () => {
  const [dolarOptions, setDolarOptions] = useState([]);
  const [dolarToday, setDolarToday] = useState(0);

  const dolarData = useGetRequest('https://s3.amazonaws.com/dolartoday/data.json');

  useEffect(()=>{
    if (dolarData){
      setDolarToday(dolarData.USD.dolartoday);
    }
  },[dolarData]);

  useEffect(()=>{
    const newDolarOptions = [
      {name:'Dolar Today', value:dolarToday}, 
      {name: 'Dolar Compra', value:dolarToday + 100000}
    ];
    setDolarOptions(newDolarOptions);
  },[dolarToday]);

  return dolarOptions; 
}

export default useDolarOptions;