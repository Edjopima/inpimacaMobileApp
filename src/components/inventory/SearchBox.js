import React, { useState } from 'react';
import {View, TextInput, Pressable, StyleSheet} from 'react-native';

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
      <TextInput
        style={styles.searchInput}
        onChangeText={onChange}
        value={query}
        placeholder="Buscar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {},
  searchBox__input:{},
});

export default SearchBox;