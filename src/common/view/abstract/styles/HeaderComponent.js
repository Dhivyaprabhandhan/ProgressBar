import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
import styles from '../../GenericStyles';

const HeaderComponent = props => {
  let {showHeader = true} = props;

  return showHeader ? (
    <View style={styles.header}>
      <Text style={{alignSelf: 'center', fontSize: 20, paddingTop: 20}}>
        {props.titleText}
      </Text>
      <View
        style={{
          backgroundColor: '#f0f0f0',
          height: 10,
          top:25,
          position: 'relative',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}></View>
    </View>

  ) : null;
  
};
export default HeaderComponent;
