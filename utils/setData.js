import setDolar from './setDolar'
import getActualDate from './getActualDate'

const setData = async (dispatch) => {
    fetch('https://inpimaca-api.herokuapp.com/inventario')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'SET_PRODUCTS',
            payload: data,
    }))
        .catch((err) => console.error(err));

    const dolarToday = await fetch('https://s3.amazonaws.com/dolartoday/data.json')
        .then(response=> response.json())
        .then(data=> data.USD.dolartoday)
        .catch((err)=>console.log(err))
    const lastDolar = await fetch('https://inpimaca-api.herokuapp.com/dolar')
        .then((response)=>response.json())
        .then(data => data)
        .catch((err)=>console.log(err))
    const actualDate = getActualDate();

    console.log(parseFloat(lastDolar.dolar),lastDolar.date.slice(0,10),parseFloat(lastDolar.dolarToday),dolarToday,actualDate);
    setDolar(dispatch,parseFloat(lastDolar.dolar),lastDolar.date.slice(0,10),parseFloat(lastDolar.dolarToday),dolarToday,actualDate);
    
}
export default setData
