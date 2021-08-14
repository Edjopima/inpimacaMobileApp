import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  title:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
  },
  button:{
    height: 40,
    paddingLeft:20,
    paddingRight:20,
    borderRadius: 15,
    borderWidth:1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
  },
  content: {
    width:'100%',
  },
  listContent: {
    width:'100%',
    borderWidth:1,
    borderColor:'red',
    backgroundColor:'#F5F8FA',
    paddingBottom:10,
    paddingTop:10,
    borderRadius:25,
    marginTop:10,
    marginBottom:10,
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
});

export default styles;