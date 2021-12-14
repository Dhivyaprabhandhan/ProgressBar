import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../../GenericStyles';

const ProceedButton = props => {
  // console.log(props)
  return (
    <TouchableOpacity
      onPress={() => {
        props.actionFunction('ttrerd');
      }}
      style={styles.buttonStyle}>
      <Text style={{color: 'white'}}>{props.titleText}</Text>
    </TouchableOpacity>
  );
};
export default ProceedButton;
