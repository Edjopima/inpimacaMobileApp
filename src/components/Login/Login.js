import React, { useState } from 'react';
import { View,Text,TextInput,Pressable,Image,StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import api from '../../libs/api';
import Storage from '../../libs/storage';

const Login = () => {
// dispatcher
  const dispatch = useDispatch()
// component variables
  const [user, setUser] = useState('')
  const [password,setPassword] = useState('')

//login function
  const handleLogin = async () => {
    const data = {
      user: user.toLowerCase(),
      password
    }
    try {
      const loggedUser = await api.login(data)
      if (loggedUser==='wrong credentials'){
        throw new Error('wrong credentials')
      }
      if (loggedUser.id) {
        dispatch({
          type:'SET_LOGGED_USER',
          payload:loggedUser,
        })
        const stringUser = JSON.stringify(loggedUser)
        await Storage.instance.store('user',stringUser)
      }
    } catch (error) {
      console.log(error)
      if (error.message==='wrong credentials'){
        Alert.alert('Usuario o contraseña invalidos')
      } else {
        Alert.alert('Error al iniciar sesion')
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.jpg')} style={styles.logo}/>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput 
        placeholder = 'Usuario' 
        style={styles.input} 
        onChangeText={(text=>setUser(text))}
        placeholderTextColor='#999'
        />
      <TextInput 
        placeholder = 'Contraseña' 
        secureTextEntry={true} 
        style={styles.input}
        onChangeText={(text=>setPassword(text))}
        placeholderTextColor='#999'
        />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttomText}>Iniciar Sesion</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  },
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
      color:'#000'
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
  },
})

export default Login;