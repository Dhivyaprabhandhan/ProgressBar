import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import fonts from './resources/fonts';

    const styles=StyleSheet.create({
        screen: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            // padding: '4%',
            
          },
          container: {
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
            // paddingTop: '20%',
            justifyContent:'flex-start',
            alignItems: 'center',
          },
          containerForm: {
            width: '100%',
            backgroundColor: 'white',
            // paddingTop: '20%',
            justifyContent:'center',
            alignItems: 'center',
            paddingHorizontal: 40,
            paddingBottom:40
          },
         
        inputDefaultContainer:{
            width:'100%',
            marginTop:10,
            fontFamily:fonts.gothamMedium,
        },
        inputDefault:{
            height:40,
            width:'100%',
            borderRadius:20,
            backgroundColor:'#f2f2f2',
            marginTop:10,
            fontSize:15,
            position:'relative',
            paddingLeft:20,
            color:'black',
            fontFamily:fonts.gothamMedium
            
          },
          inputDefaultHeader:{
            width:'100%',
            fontSize:12,
            position:'relative',
            fontFamily:fonts.gothamBlack
            
          },
          buttonStyle:{
            justifyContent:'center',
            alignItems:'center',
            height:40,
            width:170,
            borderRadius:20,
            backgroundColor:'red',
            // backgroundColor:'#ff5d60',

          },
          header:{
            backgroundColor:'#ffc501',
            height:'9%'
          },
          footer:{
            marginLeft:20,
            marginRight:20,
            marginBottom:30,
            
            position:'relative'
          }
    })

export default styles