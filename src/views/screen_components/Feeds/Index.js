import React, { Component } from 'react';
import {View,Text, Image} from 'react-native';
import ProfileImageContainer from '../../../common/view/baseComponents/inputs/ProfileImageContainer';
import images from '../../../common/view/resources/images';
export default class SplashScreen extends Component {
constructor(props)
{
super(props)

}
render()
{
    return (
        <View style={{alignItems:'center', height:'100%', justifyContent:'center', paddingTop:'0%'}}>
          <Text>{"Store Listing"}</Text>
        </View>
    )
}
}