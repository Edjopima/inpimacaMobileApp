import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import initialState from './src/redux/initialState';
import reducer from './src/redux/reducer';
import Inventory from './src/components/inventory/Inventory'
import Login from './src/components/Login/Login';
import AppStack from './src/components/Stacks/AppStack';

const store = createStore(reducer, initialState)
const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

export default App;