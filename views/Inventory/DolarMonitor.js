import React, {useEffect,useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const DolarMonitor = () => {
    const dolar = useSelector((state)=>state.dolar);
    const dispatch = useDispatch();
    const [dolarToday, setDolarToday]=useState(0);
    useEffect(()=>{
        fetch('https://s3.amazonaws.com/dolartoday/data.json')
        .then(response=> response.json())
        .then(data=> {
            setDolarToday(data.USD.dolartoday);
            dispatch(
                (data.USD.dolartoday>dolar)?
                {
                    type:'SET_DOLAR',
                    payload: data.USD.dolartoday
                }:{
                    type:'SET_DOLAR',
                    payload:dolar
                }
        )})
        .catch(err=> console.error(err));
    },[])

    return(
        <View>
            <Text style={{textAlign:'center'}}>Dolar Compra: {dolar}</Text>
            <Text style={{textAlign:'center'}}>Dolar Today: {dolarToday}</Text>
        </View>
    );
};

export default DolarMonitor;