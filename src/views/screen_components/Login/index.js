import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Text, Image, StyleSheet} from 'react-native';
import InputPhoneNumber from '../../../common/view/baseComponents/inputs/InputPhoneNumber';
import InputText from '../../../common/view/baseComponents/inputs/InputText';

import ProfileImageContainer from '../../../common/view/baseComponents/inputs/ProfileImageContainer';
import images from '../../../common/view/resources/images';
import ProceedButton from '../../../common/view/baseComponents/actions/ProceedButton';
import {getData, DT_CUSTOMER_LOGIN, DT_VALIDATE_USER} from '../../../common/data/index';
import {APP_BRAND_CODE, USER_LANG} from '../../../AppConstants';
import {validatePassword, validateCity, validateState, validatePincode, validateLastName, validateFirstName, validateForm, validatePhone, validateEmail, validateCountry, validateAddress2, validateAddress1, } from '../../../DataValidator';
import {getFieldValueForm} from "../../../CommonMethods";
import styles from '../../../common/view/GenericStyles'
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import {KEY_USER_EMAIL, KEY_USER_LOGGED_IN, KEY_USER_PASSWORD, KEY_TOKEN_DETAILS, _storeData, _retrieveData} from "../../../common/AsyncSupport" 

import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const LoginScreen = (props) => {
  //     {"RESPONSE_DATA": {"brand_details": {"brand_name": "Naturals", "code": 1, "contact": ""}, "brand_id": 1, "location_latitude": "13.4114003", "location_longitude": "13.4114003", "name": "vicky", "user_id": 21}, "RESPONSE_MESSAGE": "User Exist", "SUCCESS": true}
  //  LOG  {"RESPONSE_DATA": {"brand_id": 1}, "RESPONSE_MESSAGE": "User Not Exist", "SUCCESS": false

  // default, number-pad, decimal-pad, numeric, email-address, phone-pad

  const formFieldsMeta = {
    username: {uK: 'username', validator: validateFirstName, 
    isManditory: true, criteriaI: {
      minLength: 3,
      maxLength: 35,
      keyboardType: 'default',
      validator: validateFirstName,
    }},
    password: {uK: 'password', isManditory: true, criteriaI: {
      minLength: 3,
      maxLength: 20,
      keyboardType: 'default',
      validator: validatePassword,
    }}
  };
  // termsConditions

  // {"data": {"access_token": "191f495c7381459eb24ab3e350e501d3", "expires_in": 3600, "refresh_token": "4ReqpldOyy94lvegdyIOwbQpdXN7z9RzQ6BdcIVzD4s", "scope": "offline_access openid pantry-svc", "token_type": "reference_token"}, "type": 1}

   let formFields = [
    {uK: 'username', isValid: false, inputVal: 'Azhar@gmail.com'},
    {uK: 'password', isValid: false, inputVal: 'Welcome123!!!'},
];

const [showError, setShowError] = React.useState(false);
const [formFields1, setFormFieldsDefault1] = React.useState([]);

useEffect(() => {

}, [])

const mapManditory = formFields => {
  let formFieldsTemp = formFields.map(item => {
    let itemTemp = item;
    // cbData.uK
    itemTemp.isManditory = formFieldsMeta[item.uK].isManditory;
    // if (itemTemp.uK === cbData.uK) {
    //   itemTemp.isValid = cbData.isValid;
    //   itemTemp.inputVal = cbData.inputVal;
    // }
    return itemTemp;
  });

  return formFieldsTemp;
};

  let parentCallback = cbData => {

    let formFieldsTemp = formFields.map(item => {  
      let itemTemp = item;
      // cbData.uK
      itemTemp.isManditory = formFieldsMeta[cbData.uK].isManditory;
      if (itemTemp.uK === cbData.uK) {
        itemTemp.isValid = cbData.isValid;
        itemTemp.inputVal = cbData.inputVal;
      }
      return itemTemp;
    });
    formFields = formFieldsTemp;
  };

  const proceedNavigation=(input)=>{
    input=true
    if(input==true) {
      // console.log(input)
      // props.navigation.navigate("Registrationscreen")

    }
  }

  const proceedNavigationRegister = ()=>
  {
    props.navigation.navigate("Registrationscreen")
  }

  const proceedNextApi = () => {
    setShowError(true);
    let proceed_response = validateForm(mapManditory(formFields));

    proceedApi();

    // if (proceed_response.canProceed) {

    //   if(!(formFields.find((e)=> e.uK === formFieldsMeta.credential__confirm_password.uK).inputVal === formFields.find((e)=> e.uK === formFieldsMeta.credential__password.uK).inputVal))
    //   alert("Password doesn't match");
    //   else
    //   proceedApi();
    // } else {
    //   alert('Please correct the errors mentioned');
    // }
  };


  const proceedApi = () => {
    
    // alert("dfsdf")
    let params = {
      customer: {
        email:formFields.find((e)=> e.uK === formFieldsMeta.username.uK).inputVal,
        credential: {
          password: formFields.find((e)=> e.uK === formFieldsMeta.password.uK).inputVal,
        },
      },
    };
    // _storeData(KEY_USER_EMAIL, params.customer.email)
    // console.log("reqqqqq===s", params)
    getData({
      type: DT_CUSTOMER_LOGIN,
      params,
      successCallBack: response => {
        console.log("reqqqqq===s", response)
    //     {
    // "profile": {
    //     "firstName": "jamie",
    //     "middleName": "",
    //     "lastName": "Bondi",
    //     "email": "james1811@gmail.com",
    //     "login": "james1811@gmail.com",
    //     "credential": {
    //         "password": "Welcome789!!!"
    //     }
    // }
// }
// {"data": {"access_token": "191f495c7381459eb24ab3e350e501d3", "expires_in": 3600, "refresh_token": "4ReqpldOyy94lvegdyIOwbQpdXN7z9RzQ6BdcIVzD4s", "scope": "offline_access openid pantry-svc", "token_type": "reference_token"}, "type": 1}
        _storeData(KEY_USER_EMAIL, params.customer.email)
        _storeData(KEY_USER_PASSWORD, params.customer.credential.password)
        _storeData(KEY_TOKEN_DETAILS, JSON.stringify(response))
        _storeData(KEY_USER_LOGGED_IN, "true")
        

        props.navigation.replace("HomeScreen")
        //  LOG  {"type":1,"data":{"status":"CREATED","message":"The User has been created successfully."}}
        // response = response.data;
        // if (response?.status == 'CREATED') {
        //   alert(response.message);
        // } else {
        //   if (response?.message) alert(response.message);
        //   else alert('Registration failed. Please check the fields');
        // }
        // alert(JSON.stringify(response));
        console.log("reccress", "===", response)
      },
      failureCallback: response => {
        alert('Error Occured, Please Try Again');
        // console.log('Failure 2');
        // proceedNavigation()
      },
    });
  };


  const proceedChangePassword = () =>
  {
    props.navigation.navigate("ResetPasswordScreen")
  }
  // contentContainerStyle={{flexGrow: 1}}
 return (

  <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <KeyboardAvoidingView behavior="height" style={styles.screen}>
      
      
        <View style={{...styles.containerForm, flex:1, paddingTop:0}}>
        <ProfileImageContainer imageSource={images.logo} />
    
        <InputText
          inputVal = {formFields.find((e)=> e.uK === formFieldsMeta.username.uK).inputVal}
          showError = {showError}
          metaData = {formFieldsMeta.username}
          error = "USERNAME is not valid"
          criteriaI={formFieldsMeta.username.criteriaI}
          uK={formFieldsMeta.username.uK}
          validator={formFieldsMeta.username.validator}
          parentCallback={parentCallback}
          title="USER NAME"
        />

        <InputText
          inputVal = {formFields.find((e)=> e.uK === formFieldsMeta.password.uK).inputVal}
          secureText={true}
          showError = {showError}
          metaData = {formFieldsMeta.password}
          error = "Password is not valid"
          criteriaI={formFieldsMeta.password.criteriaI}
          uK={formFieldsMeta.password.uK}
          validator={formFieldsMeta.password.validator}
          parentCallback={parentCallback}
          title="PASSWORD"
        />


        <ProceedButton actionFunction={proceedNextApi} titleText="LOGIN" />
        
        <View style={{height:1, marginVertical:20, backgroundColor:'#DEDEDE', width:'100%'}} />

        <TouchableOpacity onPress={() => proceedChangePassword()}>
        <View style={{alignSelf:'flex-end'}} >
          <Text></Text>
          </View>
          </TouchableOpacity>

        <View style={{marginTop:30}} />
        
        <ProceedButton actionFunction={proceedNavigationRegister} titleText="REGISTER" />
      </View>
      
      </KeyboardAvoidingView>
      </ScrollView>
  );
};

export default LoginScreen;

