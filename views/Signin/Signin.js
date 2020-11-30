import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet,Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styles from './styles'

const Signin = () => {
    const navigation=useNavigation();

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
                 dispatch({
                    type:'SET_LOGED_USER',
                    payload:user
                });
                navigation.navigate('Inventory')
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
