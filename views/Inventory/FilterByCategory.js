import React from 'react';
import {Text,View, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';

let todo=styles.FilterSelected;
let viveres,dulces,lacteos,aseoPersonal,otros = styles.item;

const FilterByCategory = () => {
    const dispatch = useDispatch();
    const dispatchFilter = (data)=>{
        dispatch({
            type:'FILTER_BY_CATEGORY',
            payload:data
        })
    }
    const clearSelection= ()=>{
        todo=styles.item;
        viveres=styles.item;
        dulces=styles.item;
        lacteos=styles.item;
        aseoPersonal=styles.item;
        otros=styles.item;
    }
    const handleFilter = (category) =>{
        switch(category){
            case 'T':{
                clearSelection();
                todo=styles.FilterSelected;
                dispatchFilter(category);
                break;
            }
            case 'V':{
                clearSelection();
                viveres=styles.FilterSelected;
                dispatchFilter(category);
                break
            }
            case 'D':{
                clearSelection();
                dulces=styles.FilterSelected;
                dispatchFilter(category)
                break
            }
            case 'L':{
                clearSelection();
                lacteos=styles.FilterSelected;
                dispatchFilter(category);
                break
            }
            case 'AP':{
                clearSelection();
                aseoPersonal=styles.FilterSelected;
                dispatchFilter(category);
                break
            }
            case 'O':{
                clearSelection();
                otros=styles.FilterSelected;
                dispatchFilter(category);
                break
            }
            default:{
                clearSelection();
                break;
            }
        }
    }

    return(
        <View style={styles.FilterContainer}>
            <TouchableOpacity onPress={()=>handleFilter('T')}>
                <Text style={todo}>Todo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleFilter('V')}>
                <Text style={viveres}>Viveres</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>handleFilter('D')}>
                <Text style={dulces}>Dulces</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleFilter('L')}>
                <Text style={lacteos}>Lacteos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleFilter('AP')}>
                <Text style={aseoPersonal}>Aseo Personal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleFilter('O')}>
                <Text style={otros}>Otros</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FilterByCategory;
