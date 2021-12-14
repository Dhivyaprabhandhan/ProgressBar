import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
import styles from '../../GenericStyles';

const ContainerComponent= props =>{


    return(
<View style={styles.screen}>
    <View style={styles.container}>{props.children}</View>
        </View>
    )
}
export default ContainerComponent;