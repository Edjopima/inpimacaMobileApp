const setDolar=(dispatch, lastDolar,lastDolarDate,lastDolarToday,dolarToday,actualDate)=>{
    let message;
    if (dolarToday===lastDolarToday && actualDate===lastDolarDate){
        console.log('no hay cambios en el dolar');
        dispatch({
            type:'SET_DOLAR',
            payload:{
                dolarToday,
                dolar:dolarToday
            }
        });
    }else{
        if(lastDolar>=dolarToday){
            message={
                date:actualDate,
                dolarToday:dolarToday,
                dolar: lastDolar
            }
            console.log(message);
        }else{
            message={
                date:actualDate,
                dolarToday:dolarToday,
                dolar:dolarToday
            }
            console.log(message);
        }
        dispatch({
            type:'SET_DOLAR',
            payload:{
                dolarToday,
                dolar:message.dolar
            }
        });
        fetch('https://inpimaca-api.herokuapp.com/addDolar', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        }).then(response=>response.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
}

export default setDolar;