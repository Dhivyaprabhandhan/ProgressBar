import React from 'react'
import { Component } from 'react'
import {View, Text} from 'react-native'

export default class DummyScreen extends Component{
    constructor(props){
        super(props)
        // console.log(props.route.params,"propsssssss")

    }
render(){
    return(
        <View>
            <Text>DummyScreen</Text>
            <Text>{this.props.route.params}</Text>
        </View>
    )
}
}