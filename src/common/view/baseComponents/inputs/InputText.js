import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Value} from 'react-native-reanimated';
import fonts from '../../resources/fonts';
import InputDefault from '../../abstract/InputDefault';
import {INPUT_TEXT_DETAULT} from '../../abstract/InputCriterias';

const InputText = props => {
  // console.log(props,"input")
  const {uK, parentCallback = null} = props;
  let data = {...props};
  // console.log(data,'inputtext', data)

  let iCriteria = INPUT_TEXT_DETAULT;

  if(props?.criteriaI)
  {
    iCriteria = props.criteriaI
  }
  showError = false
  if(props?.showError)
  {
    showError = props.showError
  }

  error = ""
  if(props?.error)
  {
    error = props.error
  }
  let secureText= false
  if(props?.secureText)
  secureText= props.secureText

  let inputVal = ""
  if(props?.inputVal)
  inputVal= props.inputVal
  
  return (
    <InputDefault
    inputVal = {inputVal}
    secureText={secureText}
      showError = {showError}
      error = {error}
      uK={uK}
      metaData={props.metaData}
      data={data}
      validator={props.validator?props.validator:null }
      inputCriteria={iCriteria}
      parentCallback={parentCallback}
    />
  );
};
export default InputText;
