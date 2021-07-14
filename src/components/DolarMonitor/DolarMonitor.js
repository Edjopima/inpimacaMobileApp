import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const DolarMonitor = ({options}) => {
  return (
    <View style={styles.dolarMonitor}>
      {options.map((option, index) => {
        return (
          <Text key={index} style={styles.dolarMonitor__text}>
            {`${option.name}: ${option.value}`}
          </Text>
        )})}
    </View>
  );
}

const styles = StyleSheet.create({
  dolarMonitor: {},
  dolarMonitor__text: {
    textAlign:'center', 
    fontSize:20, 
  },
});
export default DolarMonitor;