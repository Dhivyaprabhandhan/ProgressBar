import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../../GenericStyles'


const RegisterButton=(props)=>{ 
    return(
        
        <TouchableOpacity onPress={
()=>{
          console.log('clicked')
        
          
}}
         style={styles.buttonStyle}>
     
        <Text style={{color:'white'}} >{props.titleText}</Text>
     
      </TouchableOpacity>
     
    )
}
export default RegisterButton;

