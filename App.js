import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import initialState from './src/redux/initialState';
import reducer from './src/redux/reducer';
import Inventory from './src/components/inventory/Inventory'

const store = createStore(reducer, initialState)
const App = () => {
  return (
    <Provider store={store}>
      <Inventory />    
    </Provider>
  );
}

export default App;