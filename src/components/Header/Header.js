import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/logo.jpg')} style={styles.header__logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height:70,
    width:'100%',
    backgroundColor:'#282A2C',
    alignItems:'center',
    justifyContent:'center'
  },
  header__logo: {
    height:50,
    width:50,
    borderRadius:40,
  },
});

export default Header;