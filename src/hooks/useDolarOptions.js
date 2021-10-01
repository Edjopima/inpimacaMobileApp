import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useGetRequest from './useGetRequest';

const useDolarOptions = () => {
  const [dolarOptions, setDolarOptions] = useState([]);
  const [dolarToday, setDolarToday] = useState(0);
  const dispath = useDispatch()

  const dolarData = useGetRequest('https://s3.amazonaws.com/dolartoday/data.json');

  useEffect(()=>{
    if (dolarData){
      setDolarToday(parseFloat(dolarData.USD.dolartoday.toFixed(2)));
    }
  },[dolarData]);

  useEffect(()=>{
    const newDolarOptions = [
      {name:'Dolar Today', value:dolarToday}, 
      {name: 'Dolar Compra', value:dolarToday + 0.1}
    ];
    setDolarOptions(newDolarOptions);
    dispath({
      type:'SET_DOLAR_OPTIONS',
      payload:newDolarOptions
    })
  },[dolarToday]);

  return dolarOptions; 
}

export default useDolarOptions;