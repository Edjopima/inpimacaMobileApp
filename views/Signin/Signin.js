import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet,Button} from 'react-native';
import { Row } from 'react-native-table-component';
import {useDispatch} from 'react-redux';

const styles = StyleSheet.create({
    logo:{
        width:90,
        height:90,
        borderRadius:80,
        margin:10
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:"center",
        margin:10,
        marginBottom:20
    },
    input:{
        fontSize:15,
        fontStyle:'italic',
        borderBottomWidth:1,
        borderColor:'red',
        width:250,
        marginBottom:10,
        borderColor:'#FC005F',
        padding:2,
    },
    button: {
        width:110,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        borderWidth:1,
        borderColor:'#FC005F',
        margin:10,
    },
    buttomText:{
        color:'#FC005F',
        fontSize:12,
    }
});

const Signin = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const handleSignin = () => {
        console.log(user,password)
        fetch('https://inpimaca-api.herokuapp.com/iniciarSesion', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user,
                password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id){
/*                 dispatch({
                    type:'SET_LOGED_USER',
                    payload:user
                }); */
                console.log('sesion inciada')
            }else {
                throw 'Usuario/contraseña invalido';
            }
        })
        .catch((error) => {
            Alert.alert('Usuario/contraseña invalido');
        });
    };

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../../images/logo.jpg')} style={styles.logo}/>
            <Text style={styles.title}>Iniciar Sesion</Text>
            <TextInput style={styles.input} placeholder = 'Usuario' onChangeText = {(text) => setUser(text.toLocaleLowerCase())} />
            <TextInput style={styles.input} placeholder = 'Contraseña' secureTextEntry={true} onChangeText = {(text) => setPassword(text)} />
            <TouchableOpacity style={styles.button} onPress = {handleSignin} >
                <Text style={styles.buttomText}>Iniciar Sesion</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Signin;
