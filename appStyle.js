import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex: 1,
      height:500,
    },
    headwrapper:{
      flexDirection:'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      alignItems: 'center',
      paddingTop:5,
      paddingBottom:15
    },
    buttonwrapper:{
      backgroundColor:'black',
      paddingHorizontal:10,
      paddingVertical:10,
      borderRadius:7,
      borderWidth:1,
      flexDirection:'row'
    },
    button:{
      color:'white',
      fontSize:12,
    },
    arrow:{
      width:10,
      height:10,
      marginStart:8,
    },
    titlesWrapper:{
      marginTop:50,
      justifyContent: 'center',
      alignItems: 'center',
  
  
    },
    subtitles:{
      fontSize:15,
      fontWeight:'600',
      paddingBottom:10,
  },
    subtitles2:{
      fontSize:45,
      textAlign:'center',
      fontWeight: 'bold',
      // fontFamily:'Inter-SemiBold',
  },
  titleiconwrapper:{
    flexDirection:'row',
    justifyContent: 'center',
      alignItems: 'center',
      paddingVertical:30,
  },
  googleplaylogo:{
    width:30,
    height:30,
    paddingEnd:100,
  },
  applestorelogo:{
    width:30,
    height:30,
    paddingStart:100,
  },
  landingimage:{
    justifyContent: 'center',
      alignItems: 'center',
  },
  landingimageimage:{
    width: 400,
    height:440,
  },
  notifywrapper:{
    marginTop:30,
    marginHorizontal:50,
    borderWidth:1,
    borderRadius:50,
    borderColor:'black',
    paddingVertical:4,
    alignItems:'center',
    flexDirection:"row"
  },
  notifyInput:{
  flex:1,
  height:'100%',
  padding:10
  },
  notifywrapper2:{
    marginTop:0,
    marginHorizontal:4,
    borderWidth:2,
    borderRadius:30,
    borderColor:'black',
    paddingVertical:10,
    paddingHorizontal:20,
    alignItems:'flex-end',
    backgroundColor:'black',
  },
  notifytext:{
    fontSize: 15,
    color:'white',
  },
  textwrapper3:{
    marginTop:15,
    justifyContent:'center',
    alignItems:'center',
  },
  textwrapperfont3:{
    opacity:.5,
  },
  landingimage2:{
    width: 400,
    height:440,
    marginTop:30,
  },  
  socialmedia:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    paddingHorizontal:45,
    borderRadius:40,
    paddingTop:30,
    paddingBottom:30,
  
  },
  socialiconwrapper:{
    borderWidth:1,
    borderRadius:30,
    paddingVertical:8,
    paddingHorizontal:8,
  },
  facebooklogo:{
    width:20,
    height:20,
   
  },
  twitterlogo:{
    width:20,
    height:20,
   
  },
  instagramlogo:{
    width:20,
    height:20,
  
  },
  tiktoklogo:{
    width:20,
    height:20,
  
  },
  youtubepng:{
    width:20,
    height:20,
  
  },   
  footer:{
    paddingTop:13,
    justifyContent:'top',
    alignItems:'center',
    borderTopWidth: 1,
    borderColor:'black',
    height:100,
    opacity:.5,
  },
  footertext:{
    fontSize:12,
  
   
  },   
  });
  export default styles;