import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    FilterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingBottom:10
    },
    FilterSelected:{
        color:'#FF511B',
        borderBottomColor:'#FF511B',
        borderBottomWidth:1,
    },
    item:{
        color:'black'
    },
    tableContainer: {
        borderRadius: 40,
        backgroundColor: '#F5F8FA',
  },
    tableHeader:{
        backgroundColor:'#F5F8FA',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        borderBottomWidth:1,
        borderColor:'#FF511B',
        height:40
  },
    tableContent:{
        backgroundColor:'#F5F8FA',
  },
    searchBox:{
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
    },
    ActionButtons:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
    },
    icon:{
        color:'#FF511B',
        margin:10,
    },
})

export default styles
