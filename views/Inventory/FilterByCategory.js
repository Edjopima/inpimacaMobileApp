import React from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';

const FilterByCategory = () => {
    return(
        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity>
                <Text style={{paddingHorizontal:6}}>Todo</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{paddingHorizontal:6}}>Viveres</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{paddingHorizontal:6}}>Dulces</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{paddingHorizontal:6}}>Lacteos</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{paddingHorizontal:6}}>Aseo Personal</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{paddingHorizontal:6}}>Otros</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FilterByCategory;