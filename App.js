/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './views/Header/Header';
import Inventory from './views/Inventory/Inventory.js';
import Signin from './views/Signin/Signin';

const initialState = {
  isSignedIn: false,
  user: {
    id: 0,
    userName: '',
    email: '',
    permissions: 0,
  },
  dolar: 0,
  products: [],
  productsFiltered: [],
  editModalShow:false,
  delModalShow:false,
};

function reducer(state, action) {
  switch(action.type){
    case 'SET_LOGED_USER': {
      return {...state, isSignedin:true, user:{
        id:action.payload.id,
        userName:action.payload.user,
        email:action.payload.email,
        permissions:action.payload.permissions
      }}
    }
    case 'LOGOUT':{
      return {initialState}
    }
    case 'SET_DOLAR':{
      return {...state, dolar:action.payload}
    }
    case 'SET_PRODUCTS':{
      return {...state,products:action.payload,productsFiltered:action.payload}
    }
    case 'FILTER_BY NAME':{
      let productsByName = state.products.filter(product=> product.product.toLowerCase().includes(action.payload));
      return {...state,productsFiltered:productsByName}
    }
    case 'FILTER_BY_CATEGORY':{
      if (action.payload==='T'){
        return{...state,productsFiltered:state.products}
      }else{
        let productsByCategory = state.products.filter(product=> product.category.includes(action.payload));
        return{...state,productsFiltered:productsByCategory}
      }
    }
    case 'SHOW_EDIT_MODAL':{
      return {...state,editModalShow:action.payload}
    }
    case 'SHOW_DEL_MODAL':{
      return {...state,delModalShow:action.payload}
    }
    default:{
      return state
    }
  }
}

const store = createStore(reducer, initialState);

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex:1}}>
        <Header/>
        <Inventory/>
      </View>
    </Provider>
  );
};

export default App;
