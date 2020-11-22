import React from 'react';
import {View, Image, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    Header : {
        height:70,
        width:'100%',
        backgroundColor:'#282A2C',
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        height:50,
        width:50,
        borderRadius:40,
    }    
});
const Header = () => {
    return(
        <View style = {styles.Header}>
            <Image source={require('../../images/logo.jpg')} style={styles.logo}/>
        </View>
    );
};

export default Header;
