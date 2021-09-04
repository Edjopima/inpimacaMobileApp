import React, { useEffect, useState } from 'react';
import {View, TextInput, Pressable, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import AddIcon from '../../assets/plus-solid.svg'
import SearchIcon from '../../assets/search-solid.svg'

const SearchBox = ({handleSearch, modalActions}) => {
// component variables
  const [query, setQuery] = useState('');
  const inventory = useSelector(state => state.inventory)

// Define modal variables and functions
  const {setShowModal, setModalType} = modalActions;

  const openModal = (type) => {
    setShowModal(true);
    setModalType(type);
  }

// On change function to trigger the search 
  const onChange = (text) => {
    setQuery(text);
    if (handleSearch){
      handleSearch(text);
    }
  }

// render function
  return (
    <View style={styles.searchBox}>
      <SearchIcon style={styles.icon}/>
      <TextInput
        style={styles.searchBox__input}
        onChangeText={onChange}
        value={query}
        placeholder="Buscar"
        placeholderTextColor="#999"
      />
      <Pressable
        onPress={() => openModal('add')}
      >
        <AddIcon style={styles.icon}/>
      </Pressable>
    </View>
  );
}


// Styles
const styles = StyleSheet.create({
  searchBox: {
    marginTop: 15,
    marginBottom: 15,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#0074D5',
    borderWidth: 1,
    alignSelf:'center',
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    },
  searchBox__input:{
    color: '#000',
    width: '85%',
  },
  icon: {
    width: 20,
    height: 20,
    color: '#0074D5',
  },
});

export default SearchBox;