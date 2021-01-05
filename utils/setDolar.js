const setDolar=(dispatch, lastDolar,lastDolarDate,lastDolarToday,dolarToday,actualDate)=>{
    let message;
    console.log(dolarToday,lastDolarToday,actualDate,lastDolarDate)
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
                dolar: dolarToday+100000
            }
            console.log(message);
        }else{
            message={
                date:actualDate,
                dolarToday:dolarToday,
                dolar:dolarToday+100000
            }
            console.log(message);
        }
        dispatch({
            type:'SET_DOLAR',
            payload:{
                dolarToday,
                dolar:dolarToday+100000
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
