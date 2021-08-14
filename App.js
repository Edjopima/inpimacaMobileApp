import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import initialState from './src/redux/initialState';
import reducer from './src/redux/reducer';
import Inventory from './src/components/inventory/Inventory'
import Login from './src/components/Login/Login';
import AppStack from './src/components/Stacks/AppStack';
import Storage from './src/libs/storage';

const store = createStore(reducer, initialState)
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(async () => {
    const user = await Storage.instance.get('user')
    if (user) {
      setLoggedIn(true)
    }
  },[])
  return (
    <Provider store={store}>
      {!loggedIn?
        <Login />:
        <AppStack />
      }
    </Provider>
  );
}

export default App;