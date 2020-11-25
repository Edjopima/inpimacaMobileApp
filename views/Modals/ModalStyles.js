import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    modalContainer:{
        backgroundColor:'#0000007a',
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    modalContent:{
        width:300,
        backgroundColor:'white',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
    },
    modalTitle: {
        fontSize:25,
        fontWeight:'bold',
        margin:15,
    },
    modalInput:{
        fontSize:15,
        fontStyle:'italic',
        borderBottomWidth:1,
        borderColor:'red',
        width:180,
        borderColor:'#FC005F',
        padding:2
    },

    modalCategory:{
        marginVertical:10,
        height:30,
        width:140,
        borderWidth:1,
        borderColor:'red',
        borderRadius:30,
    },
    modalButtonsContainer:{
        flexDirection:'row',
    },
    modalButtom: {
        width:80,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        borderWidth:1,
        borderColor:'#FC005F',
        margin:2,
        marginTop:5,
        marginBottom:20
  },
});

export default styles
