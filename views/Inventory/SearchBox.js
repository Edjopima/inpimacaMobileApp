import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
    return(
    <View
        style={{
            height: 40,
            width: 300,
            borderWidth: 1,
            borderColor: 'red',
            flexDirection: 'row',
            alignItems:'center',
            alignSelf:'center',
            borderWidth:1,
            borderColor:'#0074D5',
            borderRadius:40,
            paddingLeft:10,
            paddingRight:10,
            margin:10
      }}>
        <TouchableOpacity>
            <FontAwesomeIcon style={{ color: '#0074D5' }} icon={faSearch} />
        </TouchableOpacity>
        <TextInput
            placeholder='Buscar'
            editable
            style={{width:246}}
            />
        <TouchableOpacity>
            <FontAwesomeIcon style = {{color:'#0074D5'}} icon={faPlus} />
        </TouchableOpacity>
    </View>);
};

export default SearchBox;