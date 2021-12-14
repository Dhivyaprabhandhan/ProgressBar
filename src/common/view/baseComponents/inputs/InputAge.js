import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Value} from 'react-native-reanimated';
import fonts from '../../resources/fonts';
import InputDefault from '../../abstract/InputDefault';
import {INPUT_Age} from '../../abstract/InputCriterias';

const InputAge = props => {
  const {uK, parentCallback = null} = props;
  let data = {...props};
   
  let iCriteria = INPUT_Age;

  return (
    <InputDefault
      uK={uK}
      data={data}
      validator={props.validator?props.validator:null }
      inputCriteria={iCriteria}
      parentCallback={parentCallback}
    />
  );
};
export default InputAge;
