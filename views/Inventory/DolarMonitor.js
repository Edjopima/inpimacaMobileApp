import React, {useEffect,useState} from 'react';
import {View, Text, Alert} from 'react-native';
import { useSelector} from 'react-redux';

const DolarMonitor = () => {
    const state = useSelector((state)=>state);
    const {dolar, dolarToday} = state;
    useEffect(()=>{

    },[])

    return(
        <View>
            <Text style={{textAlign:'center'}}>Dolar Today: {dolarToday}</Text>
            <Text style={{textAlign:'center'}}>Dolar Compra: {dolar}</Text>
        </View>
    );
};

export default DolarMonitor;
