import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    logo:{
        width:90,
        height:90,
        borderRadius:80,
        margin:10
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:"center",
        margin:10,
        marginBottom:20
    },
    input:{
        fontSize:15,
        fontStyle:'italic',
        borderBottomWidth:1,
        borderColor:'red',
        width:250,
        marginBottom:10,
        borderColor:'#FC005F',
        padding:2,
    },
    button: {
        width:110,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        borderWidth:1,
        borderColor:'#FC005F',
        margin:10,
    },
    buttomText:{
        color:'#FC005F',
        fontSize:12,
    }
});

export default styles;
