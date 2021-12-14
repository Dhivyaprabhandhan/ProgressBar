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
import {getData, DT_UPDATE_USER_DETAILS} from '../../../common/data/index';
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
      isManditory: false,
      criteriaI: {
        minLength: 5,
        maxLength: 25,
        keyboardType: 'default',
        validator: validateAddress1,
      },
    },
    address__city: {
      uK: 'address__city',
      isManditory: false,
      criteriaI: {
        minLength: 5,
        maxLength: 25,
        keyboardType: 'default',
        validator: validateCity,
      },
    },
    address__stateCode: {
      uK: 'address__stateCode',
      isManditory: false,
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
      isManditory: false,
      criteriaI: {
        minLength: 2,
        maxLength: 2,
        keyboardType: 'default',
        validator: validateCountry,
      },
    },
    address__postalCode: {
      uK: 'address__postalCode',
      isManditory: false,
      criteriaI: {
        minLength: 6,
        maxLength: 6,
        keyboardType: 'numeric',
        validator: validatePincode,
      },
    },
    phoneNumber__number: {
      uK: 'phoneNumber__number',
      isManditory: false,
      criteriaI: {
        minLength: 10,
        maxLength: 10,
        keyboardType: 'numeric',
        validator: validatePhone,
      },
    },
    credential__password: {
      uK: 'credential__password',
      isManditory: false,
      criteriaI: {
        minLength: 6,
        maxLength: 15,
        keyboardType: 'default',
        validator: validatePassword,
      },
    },
    credential__confirm_password: {
      uK: 'credential__confirm_password',
      isManditory: false,
      criteriaI: {
        minLength: 6,
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
    setShowError(true);
    let proceed_response = validateForm(mapManditory(formFields));
    proceedApi();

//     {"profile": {"credential": {"password": "Welcome111!!!"}, "email": "testuser@gmail.com", "firstName": "Djtjtjjt", "lastName": "Gkfnfnfbf", "login": "testuser@gmail.com", "middleName": ""}}
//  LOG  success {"status":"PROFILE_UPDATE_COMPLETE","message":"User's profile updated successfully"}
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
      profile: {
        firstName: formFields.find((e)=> e.uK === formFieldsMeta.name__first.uK).inputVal ,
        middleName: "",
        lastName: formFields.find((e)=> e.uK === formFieldsMeta.name__last.uK).inputVal ,
        credential: {
          password: formFields.find((e)=> e.uK === formFieldsMeta.credential__password.uK).inputVal,
        },
        email: formFields.find((e)=> e.uK === formFieldsMeta.email.uK).inputVal,
        login: formFields.find((e)=> e.uK === formFieldsMeta.email.uK).inputVal,

      },
    };
    getData({
      type : DT_UPDATE_USER_DETAILS,
      params,
      successCallBack: response => {
        //  LOG  {"type":1,"data":{"status":"CREATED","message":"The User has been created successfully."}}
        // response = response.data;
        // if (response?.status == 'CREATED') {
        //   alert(response.message);
        // } else {
        //   if (response?.message) alert(response.message);
        //   else alert('Registration failed. Please check the fields');
        // }
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
              <TouchableOpacity  onPress={() => { props.navigation.pop()}} >
            <Image
              resizeMode={'contain'}
              style={{height: 20, padding: 5, marginRight: 15, marginLeft:20, width: 20}}
              source={images.back}
            />
            </TouchableOpacity >
            <View>
              <Text style={{fontSize: 23, fontFamily: fonts.gothamBlack}}>
                {'UPDATE DETAILS'}
                
              </Text>
            </View>
          </View>
          <View style={styles.containerForm}>
          <InputText
            showError={showError}
            metaData={formFieldsMeta.name__first}
            error="FIRST NAME is not valid"
            criteriaI={formFieldsMeta.name__first.criteriaI}
            uK={formFieldsMeta.name__first.uK}
            validator={formFieldsMeta.name__first.validator}
            parentCallback={parentCallback}
            title="FIRST NAME"
          />

          <InputText
            showError={showError}
            metaData={formFieldsMeta.name__last}
            error="LAST NAME is not valid"
            criteriaI={formFieldsMeta.name__last.criteriaI}
            uK={formFieldsMeta.name__last.uK}
            validator={formFieldsMeta.name__last.validator}
            parentCallback={parentCallback}
            title="LAST NAME"
          />



          <InputText
            showError={showError}
            metaData={formFieldsMeta.email}
            error="EMAIL is not valid"
            criteriaI={formFieldsMeta.email.criteriaI}
            uK={formFieldsMeta.email.uK}
            validator={formFieldsMeta.email.validator}
            parentCallback={parentCallback}
            title="EMAIL"
          />



          {/* <InputText
            showError={showError}
            metaData={formFieldsMeta.phoneNumber__number}
            error="Phone Number is not valid"
            criteriaI={formFieldsMeta.phoneNumber__number.criteriaI}
            uK={formFieldsMeta.phoneNumber__number.uK}
            validator={formFieldsMeta.phoneNumber__number.validator}
            parentCallback={parentCallback}
            title="MOBILE"
          /> */}
{/* 

          <InputText
            showError={showError}
            metaData={formFieldsMeta.address__addressLine1}
            error="Address is not valid"
            criteriaI={formFieldsMeta.address__addressLine1.criteriaI}
            uK={formFieldsMeta.address__addressLine1.uK}
            validator={formFieldsMeta.address__addressLine1.validator}
            parentCallback={parentCallback}
            title="ADDRESS 1"
          />

          <InputText
            showError={showError}
            metaData={formFieldsMeta.address__city}
            error="City is not valid"
            criteriaI={formFieldsMeta.address__city.criteriaI}
            uK={formFieldsMeta.address__city.uK}
            validator={formFieldsMeta.address__city.validator}
            parentCallback={parentCallback}
            title="CITY"
          /> */}

          {/* <InputText
            showError={showError}
            metaData={formFieldsMeta.address__postalCode}
            error="Postal code is not valid"
            criteriaI={formFieldsMeta.address__postalCode.criteriaI}
            uK={formFieldsMeta.address__postalCode.uK}
            validator={formFieldsMeta.address__postalCode.validator}
            parentCallback={parentCallback}
            title="PINCODE"
          /> */}
{/* 
          <InputText
            showError={showError}
            metaData={formFieldsMeta.address__stateCode}
            error="State code is not valid"
            criteriaI={formFieldsMeta.address__stateCode.criteriaI}
            uK={formFieldsMeta.address__stateCode.uK}
            validator={formFieldsMeta.address__stateCode.validator}
            parentCallback={parentCallback}
            title="STATE"
          />

          <InputText
            showError={showError}
            metaData={formFieldsMeta.address__countryCode}
            error="Country Code is not valid"
            criteriaI={formFieldsMeta.address__countryCode.criteriaI}
            uK={formFieldsMeta.address__countryCode.uK}
            validator={formFieldsMeta.address__countryCode.validator}
            parentCallback={parentCallback}
            title="COUNTRY"
          /> */}
          
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
