import React, { useState } from 'react';
import {View, TextInput, Pressable, StyleSheet} from 'react-native';
import AddIcon from '../../assets/plus-solid.svg'
import SearchIcon from '../../assets/search-solid.svg'

const SearchBox = ({handleSearch}) => {
  const [query, setQuery] = useState('');

  const onChange = (text) => {
    setQuery(text);
    if (handleSearch){
      handleSearch(text);
    }
  }

  return (
    <View style={styles.searchBox}>
      <SearchIcon style={styles.icon}/>
      <TextInput
        style={styles.searchBox__input}
        onChangeText={onChange}
        value={query}
        placeholder="Buscar"
      />
      <Pressable>
        <AddIcon style={styles.icon}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 15,
    marginBottom: 15,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    alignSelf:'center',
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    },
  searchBox__input:{
    width: '85%',
  },
  icon: {
    width: 20,
    height: 20,
    color: '#000',
  },
});

export default SearchBox;