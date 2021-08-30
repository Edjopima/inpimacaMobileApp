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
    marginTop:10,
    marginBottom:20,
  },
  text:{
    textAlign:'center',
    width:90,
  },
  button:{
    height: 40,
    paddingLeft:20,
    paddingRight:20,
    borderRadius: 15,
    borderWidth:1,
    borderColor: '#FF511B',
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
    marginTop:20,
    marginBottom:20,
  },
  content: {
    width:'100%',
  },
  listContent: {
    width:'100%',
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
  tableHeader:{
    borderBottomWidth:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingBottom:10,
    marginBottom:10,
    borderColor:'#FF511B',
    paddingRight:25,
  },
  total:{
    alignItems:'center',
    paddingTop:10,
  },
  listContainer:{
    height: '50%'
  },
  emptyCart:{
    height:'80%',
    alignItems:'center',
    justifyContent:'center',
  },
  emptyCartTitle:{
    fontSize:30,
    fontWeight:'bold',
    color:'gray',
    marginBottom:20,
  },
  icon:{
    width:80,
    height:80,
    color:'gray',
  },
});

export default styles;