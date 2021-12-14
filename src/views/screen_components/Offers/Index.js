import React, { Component } from 'react';
import {View,Text, Image, Button} from 'react-native';
import ProfileImageContainer from '../../../common/view/baseComponents/inputs/ProfileImageContainer';
import images from '../../../common/view/resources/images'
import DummyScreen from '../../screen_components/DummyScreen';
// class SplashScreen extends Component {
// constructor(props)
// {
// super(props)
// // console.log(props,"propssss")
// }
// render()
// {
//     return (
//         <View style={{alignItems:'center', height:'100%', justifyContent:'center', paddingTop:'0%'}}>
//           <Text>{"Offers"}</Text>
//         <Button title="Navigate" onPress={()=>{
//         this.props.navigation.navigate('DummyScreen')
//         }}/> 
//         </View>
//     )
// }
// }
// export default SplashScreen

const splashScreen =(props)=>{
  // console.log(props.route.params,"propssssss")
  return (
            <View style={{alignItems:'center', height:'100%', justifyContent:'center', paddingTop:'0%'}}>
              <Text>{"Offers"}</Text>
            <Button title="Navigate" 
            onPress={()=>{
            props.navigation.navigate('DummyScreen',content="Welcome to React Native")
            }}/> 
            </View>
        )
    }
export default splashScreen