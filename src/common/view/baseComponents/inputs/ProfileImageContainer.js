import React from 'react';
import {View, Image, Text, TextInput, StyleSheet} from 'react-native';
const profileImageContainer=(props)=>{
    return(
    // <View style={styles.mobileNum}>
        <Image resizeMode={"contain"} style={{height:80, width:160,borderRadius:160}}  source={props.imageSource}/>
    // </View>
    )
}
export default profileImageContainer;

const styles=StyleSheet.create({
    mobileNum:{
        height:80,
        width:80,
        alignItems:'center',
        // borderRadius:40,
        backgroundColor:'#f2f2f2',
        
        fontSize:15,
        position:'relative',
        justifyContent:'center',
        
      }
})