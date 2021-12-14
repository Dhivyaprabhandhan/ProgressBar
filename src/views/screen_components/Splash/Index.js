import React, { Component } from 'react';
import {View,Text, Image} from 'react-native';
import ProfileImageContainer from '../../../common/view/baseComponents/inputs/ProfileImageContainer';
import images from '../../../common/view/resources/images';
import {KEY_USER_EMAIL, KEY_USER_LOGGED_IN, KEY_USER_PASSWORD, KEY_TOKEN_DETAILS, _storeData, _retrieveData} from "../../../common/AsyncSupport" 

export default class SplashScreen extends Component {
constructor(props)
{
super(props)
setTimeout(()=>{
  
  // _retrieveData(KEY_USER_LOGGED_IN)
        

  // props.navigation.replace("HomeScreen")
  // // this.props.navigation.replace("HomeScreen")
  //   this.props.navigation.replace("LoginScreen")
},1000);
this.proceedNav();

}

proceedNav = async () => {
  let is_loggedin = await _retrieveData(KEY_USER_LOGGED_IN)
   
  this.props.navigation.replace("HomeScreen")
  // if(is_loggedin && is_loggedin === 'true')
  // {
  //   this.props.navigation.replace("HomeScreen")
  // }
  // else
  // {
  //   this.props.navigation.replace("LoginScreen")
  // }


}

render()
{
    return (
        <View style={{alignItems:'center', height:'100%', justifyContent:'center', paddingTop:'0%'}}>
          {/* <View style={{
        height:180,
        width:360,
        alignItems:'center',
        // borderRadius:40,
        // backgroundColor:'#f2f2f2',
        position:'relative',
        justifyContent:'center',        
      }}> */}
        <Image resizeMode={"contain"} style={{height:130, width:260}}  source={images.logo}/>
    {/* </View> */}
        </View>
    )
}
}