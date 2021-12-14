import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Value} from 'react-native-reanimated';
import {isValueExist} from '../../../DataValidator';
import styles from '../GenericStyles';
const InputDefault = props => {
  let {
    title = 'dummy',
    inputVal = '',
    placeholder = '',
    isFocused = false,
    isValid = false,
    parentCallback = null,
    returnData = {},
  } = props.data;

  const uK = props.uK;

  const error = props.error
  const metaData = props.metaData
  const secureText = props?.secureText ? props.secureText : false  
  let {
    minLength = 10,
    maxLength = 10,
    validator = null,
    keyboardType = 'number-pad',
  } = props.inputCriteria;

  validator = isValueExist(props.validator) ? props.validator : validator;
  

    
  const [inputValue, setInputValue] = React.useState(inputVal);
  const[enteredValue,setEnteredValue]=useState('')
  const[showError,setshowError]=useState(false)

  
  
  const initiateCallback = (text, canShowE) => {

    let cbData = {
      uK: uK,
      isValid: validator(text),
      inputVal: text,
      isManditory: metaData.isManditory
    };
    
    if (props.parentCallback) props.parentCallback(cbData);
    
    // console.log("testsss01", showError, cbData.isValid, text)

    if(canShowE)
    if((cbData.isValid && metaData.isManditory) || !metaData.isManditory)
    {
      setshowError(false)  
    }
    else
    {
      setshowError(true)
    }

    // if(((!cbData.isValid) && metaData.isManditory) || showError)
    // {
    //   if(canShowE)
    //   setshowError(true)
    // }
    // else
    // {
    //   setshowError(false)
    // }

  }

  useEffect(() => {

    if(props.showError)
    {
      setshowError(true)
    }
    else
    {
      setshowError(false)
    }

    initiateCallback(inputVal, false)
  }, []);



   const handleInputChange = (text) => {
    setInputValue(text);
    initiateCallback(text, true);
    
  }

    

    let proceedShowError = (props.showError && !validator(inputValue)) || (showError && !validator(inputValue))
    // console.log("showeeer", proceedShowError, validator(inputValue), showError, props.showError, inputValue, )
  return (
    <View style={{...styles.inputDefaultContainer,  marginBottom:'5%'}}>
      <Text style={styles.inputDefaultHeader}>{title}</Text>
      <TextInput
      secureTextEntry = {secureText}
       value={inputValue}
       selectionColor={'black'}
       onChangeText={(text) => {
        handleInputChange(text);
      }} 
      
      style={styles.inputDefault}
      minLength={minLength}
      maxLength={maxLength}
      keyboardType={keyboardType}

      />
  
      {
        proceedShowError ? <Text style={{ width:'100%', color:'red', fontSize:12, fontWeight:'bold'}}>{props.error}</Text> :null
      }

    </View>
  );
};
export default InputDefault;
