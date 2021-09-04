import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal : 40,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize:22,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
    marginBottom: 20,
  },
  text:{
    color: '#000',
    width: 250,
    marginBottom:20,
  },
  textInput:{
    color: '#000',
    height:40,
    width:220,
    marginBottom:10,
    borderBottomWidth:1,
    borderColor:'#FF511B',
  },
  pickerContainer:{
    color: '#000',
    borderWidth:1,
    borderColor:'#FF511B',
    borderRadius:15,
    height:30,
    marginBottom:20,
    width:180,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  picker:{
    color: '#000',
    height:30,
    width:180,
  },
  buttonContainer:{
    flexDirection: 'row',
    alignSelf:'center',
    width: 200,
    justifyContent:'space-between',
  },
  button:{
    height: 30,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth:1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error:{
    color:'red',
    fontSize:12,
    marginBottom:10,
    textAlign:'center',
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10,
  },
  textInputSmall:{
    color: '#000',
    height:40,
    width:65,
    marginBottom:10,
    borderBottomWidth:1,
    textAlign:'center',
    borderColor:'#FF511B',
  },
});

export default styles;