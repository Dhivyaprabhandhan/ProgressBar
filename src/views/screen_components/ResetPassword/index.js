import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import InputPhoneNumber from '../../../common/view/baseComponents/inputs/InputPhoneNumber';
import InputText from '../../../common/view/baseComponents/inputs/InputText';

import ProfileImageContainer from '../../../common/view/baseComponents/inputs/ProfileImageContainer';
import images from '../../../common/view/resources/images';
import icons from '../../../common/view/resources/icons';
import fonts from '../../../common/view/resources/fonts';
import ProceedButton from '../../../common/view/baseComponents/actions/ProceedButton';
import {getData, DT_VALIDATE_USER} from '../../../common/data/index';
import {APP_BRAND_CODE, USER_LANG} from '../../../AppConstants';
import {
  validatePassword,
  validateCity,
  validateState,
  validatePincode,
  validateLastName,
  validateFirstName,
  validateForm,
  validatePhone,
  validateEmail,
  validateCountry,
  validateAddress2,
  validateAddress1,
} from '../../../DataValidator';
import {getFieldValueForm} from '../../../CommonMethods';
import styles from '../../../common/view/GenericStyles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreen = props => {

  // default, number-pad, decimal-pad, numeric, email-address, phone-pad

  const formFieldsMeta = {
    name__first: {
      uK: 'name__first',
      validator: validateFirstName,
      isManditory: true,
      criteriaI: {
        minLength: 3,
        maxLength: 15,
        keyboardType: 'default',
        validator: validateFirstName,
      },
    },
    name__last: {
      uK: 'name__last',
      isManditory: true,
      criteriaI: {
        minLength: 3,
        maxLength: 15,
        keyboardType: 'default',
        validator: validateLastName,
      },
    },
    address__addressLine1: {
      uK: 'address__addressLine1',
      isManditory: true,
      criteriaI: {
        minLength: 5,
        maxLength: 25,
        keyboardType: 'default',
        validator: validateAddress1,
      },
    },
    address__city: {
      uK: 'address__city',
      isManditory: true,
      criteriaI: {
        minLength: 5,
        maxLength: 25,
        keyboardType: 'default',
        validator: validateCity,
      },
    },
    address__stateCode: {
      uK: 'address__stateCode',
      isManditory: true,
      criteriaI: {
        minLength: 2,
        maxLength: 2,
        keyboardType: 'default',
        validator: validateState,
        criteriaI: {
          minLength: 2,
          maxLength: 2,
          keyboardType: 'default',
          validator: validatePhone,
        },
      },
    },
    address__countryCode: {
      uK: 'address__countryCode',
      isManditory: true,
      criteriaI: {
        minLength: 2,
        maxLength: 2,
        keyboardType: 'default',
        validator: validatePhone,
      },
    },
    address__postalCode: {
      uK: 'address__postalCode',
      isManditory: true,
      criteriaI: {
        minLength: 6,
        maxLength: 6,
        keyboardType: 'numeric',
        validator: validatePincode,
      },
    },
    phoneNumber__number: {
      uK: 'phoneNumber__number',
      isManditory: true,
      criteriaI: {
        minLength: 10,
        maxLength: 10,
        keyboardType: 'numeric',
        validator: validatePhone,
      },
    },
    old__password: {
      uK: 'credential__password',
      isManditory: true,
      criteriaI: {
        minLength: 6,
        maxLength: 15,
        keyboardType: 'default',
        validator: validatePassword,
      },
    },
    credential__password: {
      uK: 'credential__password',
      isManditory: true,
      criteriaI: {
        minLength: 6,
        maxLength: 15,
        keyboardType: 'default',
        validator: validatePassword,
      },
    },

    credential__confirm_password: {
      uK: 'credential__confirm_password',
      isManditory: true,
      criteriaI: {
        minLength: 3,
        maxLength: 15,
        keyboardType: 'default',
        validator: validatePassword,
      },
    },

    email: {
      uK: 'email',
      isManditory: true,
      criteriaI: {
        minLength: 5,
        maxLength: 30,
        keyboardType: 'default',
        validator: validateEmail,
      },
    },
  };
  // termsConditions

  let formFields = [
    {uK: 'name__first', isValid: false, inputVal: ''},
    {uK: 'name__last', isValid: false, inputVal: ''},
    {uK: 'address__addressLine1', isValid: false, inputVal: ''},
    {uK: 'address__city', isValid: false, inputVal: ''},
    {uK: 'address__stateCode', isValid: false, inputVal: ''},
    {uK: 'address__countryCode', isValid: false, inputVal: ''},
    {uK: 'address__postalCode', isValid: false, inputVal: ''},
    {uK: 'phoneNumber__number', isValid: false, inputVal: ''},
    {uK: 'old__password', isValid: false, inputVal: ''},
    {uK: 'credential__password', isValid: false, inputVal: ''},
    {uK: 'credential__confirm_password', isValid: false, inputVal: ''},
    {uK: 'email', isValid: false, inputVal: ''},
  ];

  const [showError, setShowError] = React.useState(false);
  const [formFields1, setFormFieldsDefault1] = React.useState([]);

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

  const proceedNextApi = () => {
    
  };

  const proceedApi = () => {
    // alert("dfsdf")
    let params = {
      customer: {
        name: {
          first: formFields.find((e)=> e.uK === formFieldsMeta.name__first.uK).inputVal ,
          // "middle": "{{$randomUserName}}",
          last: formFields.find((e)=> e.uK === formFieldsMeta.name__last.uK).inputVal ,
        },
        address: {
          addressLine1: formFields.find((e)=> e.uK === formFieldsMeta.address__addressLine1.uK).inputVal,
          // "addressLine2": "st1ring",
          city: formFields.find((e)=> e.uK === formFieldsMeta.address__city.uK).inputVal,
          stateCode: formFields.find((e)=> e.uK === formFieldsMeta.address__stateCode.uK).inputVal ,
          countryCode: formFields.find((e)=> e.uK === formFieldsMeta.address__countryCode.uK).inputVal,
          postalCode: formFields.find((e)=> e.uK === formFieldsMeta.address__postalCode.uK).inputVal,
        },
        phoneNumber: [
          {
            // "type": "HOME_PHONE",
            // "countryCode": "1",
            number: formFields.find((e)=> e.uK === formFieldsMeta.phoneNumber__number.uK).inputVal,
          },
        ],
        credential: {
          password: formFields.find((e)=> e.uK === formFieldsMeta.credential__password.uK).inputVal,
        },
        email: formFields.find((e)=> e.uK === formFieldsMeta.email.uK).inputVal,
        // "dateOfBirth": "1985-05-07T18:05:05.949Z",
        countryOfBirth: 'US',
        termsConditions: true,
      },
    };
    getData({
      DT_VALIDATE_USER,
      params,
      successCallBack: response => {
        //  LOG  {"type":1,"data":{"status":"CREATED","message":"The User has been created successfully."}}
        response = response.data;
        if (response?.status == 'CREATED') {
          alert(response.message);
        } else {
          if (response?.message) alert(response.message);
          else alert('Registration failed. Please check the fields');
        }
      },
      failureCallback: response => {
        alert('Error Occured, Please Try Again');
        // console.log('Failure 2');
        // proceedNavigation()
      },
    });
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

  const proceedNavigation = input => {
    input = true;
    if (input == true) {
      // console.log(input)
      // props.navigation.navigate("Registrationscreen")
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
     
        <View style={{...styles.container}}>

          
        <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height:60,
              alignContent: 'center',
              alignItems:'center',
              justifyContent:'flex-start'
            }}>
              <TouchableOpacity onPress={() => { props.navigation.pop()}} >
            <Image
              resizeMode={'contain'}
              style={{height: 20, padding: 5, marginRight: 15, marginLeft:20, width: 20}}
              source={images.back}
            />
            </TouchableOpacity >
            <View>
              <Text style={{fontSize: 23, fontFamily: fonts.gothamBlack}}>
                {'CHANGE PASSWWORD'}
                
              </Text>
            </View>
          </View>

          <View style={styles.containerForm}>

          <InputText
                  secureText={true}
                  showError = {showError}
          metaData = {formFieldsMeta.old__password}
          error = "Old Password is Invalid"
          criteriaI={formFieldsMeta.old__password.criteriaI}
          uK={formFieldsMeta.old__password.uK}
          validator={formFieldsMeta.old__password.validator}
          parentCallback={parentCallback}
          title="OLD PASSWORD"
        />


        <InputText
                  secureText={true}
                  showError = {showError}
          metaData = {formFieldsMeta.credential__password}
          error = "Pasword Combination Should min 1 Caps, 1 Small and 1 Special Character"
          criteriaI={formFieldsMeta.credential__password.criteriaI}
          uK={formFieldsMeta.credential__password.uK}
          validator={formFieldsMeta.credential__password.validator}
          parentCallback={parentCallback}
          title="PASSWORD"
        />
        <InputText
                  secureText={true}
          showError = {showError}
          metaData = {formFieldsMeta.credential__confirm_password}
          error = "Confirm Password should be same as Password"
          criteriaI={formFieldsMeta.credential__confirm_password.criteriaI}
          uK={formFieldsMeta.credential__confirm_password.uK}
          validator={formFieldsMeta.credential__confirm_password.validator}
          parentCallback={parentCallback}
          title="CONFIRM PASSWORD"
        />

          {/* 
        <InputPhoneNumber
          uK={formFieldsMeta.inputPhone.uK}
          validator={formFieldsMeta.inputPhone.validator}
          parentCallback={parentCallback}
          title="MOBILE NUMBER"
        /> */}

          <ProceedButton actionFunction={proceedNextApi} titleText="SUBMIT" />
        </View>
        </View>
     
    </ScrollView>
    
  );
};

export default LoginScreen;
