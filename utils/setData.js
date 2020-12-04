import {setDolar} from './setDolar'
import {getActualDate} from './getActualDate'

const setData = (dispatch) => {
    let dolarToday;
    let lastDolarData;
    fetch('https://inpimaca-api.herokuapp.com/inventario')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'SET_PRODUCTS',
            payload: data,
      }))
        .catch((err) => console.error(err));
    fetch('https://s3.amazonaws.com/dolartoday/data.json')
        .then(response=> response.json())
        .then(data=>{
            dolarToday=data.USD.dolarToday;
        })
        .catch((err)=>console.log(err))
    fetch('https://inpimaca-api.herokuapp.com/dolar')
        .then((response)=>response.json())
        .then(data => lastDolarData = data)
        .catch((err)=>console.log(err))
    const actualDate=getActualDate();
    const {lastDolar,lastDolarDate,lastDolarToday} = lastDolarData
    console.log(lastDolar,lastDolarDate,lastDolarToday,dolarToday,actualDate);
    setDolar(dispatch,lastDolar,lastDolarDate,lastDolarToday,dolarToday,actualDate);
    
}
export default setData
