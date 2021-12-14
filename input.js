import React from 'react';
import {TextInput} from 'react-native';
export default class TextInputs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        <TextInput
        onChangeText={(a)=>('nice'+a)}
        />
    }
}