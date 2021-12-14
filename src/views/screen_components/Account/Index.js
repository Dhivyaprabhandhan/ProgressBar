import React, { useState, useEffect, Component} from 'react';
import {View, ActivityIndicator, TouchableOpacity, Text, Image} from 'react-native';
import ProfileImageContainer from '../../../common/view/baseComponents/inputs/ProfileImageContainer';
import images from '../../../common/view/resources/images';
import ProceedButton from '../../../common/view/baseComponents/actions/ProceedButton';
import icons from '../../../common/view/resources/icons';
import fonts from '../../../common/view/resources/fonts';
import {getData, DT_GET_USER_DETAILS} from '../../../common/data/index';
import {KEY_USER_EMAIL, KEY_USER_LOGGED_IN, KEY_USER_PASSWORD, KEY_TOKEN_DETAILS, _storeData, _retrieveData} from "../../../common/AsyncSupport" 

const AccountScreen  = (props) => {

  const [dataLoaded, setDataLoaded] = React.useState(true);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");


  const proceedGetDetails = () => {
    let params = {
      
    };
    getData({
      type :DT_GET_USER_DETAILS,
      params,
      successCallBack: response => {
        response = response.data[0]
        if(response?.profile)
        {
          setFirstName(response.profile.firstName)
          setLastName(response.profile.firstName)
          setEmail(response.profile.email)
          setDataLoaded(true)
        }


      },
      failureCallback: response => {
        alert('Error Occured, Please Try Again');
        // console.log('Failure 2');
        // proceedNavigation()
      },
    });
  };


  useEffect(() => {
    proceedGetDetails()
  }, []);
  

const proceedUpdateUser = () => {
  props.navigation.navigate("UpdateUserDetailsScreen")
};




const proceedChangePassword = () => {
  props.navigation.navigate("ChangePasswordscreen")
};



    return (
        <View style={{alignItems:'flex-start', height:'100%', backgroundColor:'#fff', justifyContent:'flex-start', paddingTop:'0%'}}>
            
            {/* proceedUpdateUser */}

{ dataLoaded ?
<View style={{width:'100%'}}>
          <Text style={{fontSize: 20, marginTop:24, marginLeft:24, fontFamily: fonts.gothamBlack}} >{"PERSONAL"}</Text>
          <View style={{position:'absolute', top:24, right:24}} >
                        <TouchableOpacity 
                  onPress={() => {
                    console.log("calledddonpp")
                    proceedUpdateUser()
                  }}
    >
          <Image
            source={icons.edit_bg_c}
            style={{ width: 30, height: 30}}
          />
                </TouchableOpacity>
          </View>
          <Text style={{fontSize: 9, marginTop:24, marginLeft:24, fontFamily: fonts.gothamBlack}} >{"FIRST NAME"}</Text>
          <Text style={{fontSize: 16, marginTop:0, marginLeft:24, fontFamily: fonts.gothamBlack}} >{firstName}</Text>

          <Text style={{fontSize: 9, marginTop:24, marginLeft:24, fontFamily: fonts.gothamBlack}} >{"LAST NAME"}</Text>
          <Text style={{fontSize: 16, marginTop:0, marginLeft:24, fontFamily: fonts.gothamBlack}} >{lastName}</Text>

          <Text style={{fontSize: 9, marginTop:24, marginLeft:24, fontFamily: fonts.gothamBlack}} >{"PHONE"}</Text>
          <Text style={{fontSize: 16, marginTop:0, marginLeft:24, fontFamily: fonts.gothamBlack}} >{phone}</Text>

          <Text style={{fontSize: 9, marginTop:24, marginLeft:24, fontFamily: fonts.gothamBlack}} >{"EMAIL"}</Text>
          <Text style={{fontSize: 16, marginTop:0, marginLeft:24, fontFamily: fonts.gothamBlack}} >{email}</Text>

<View style={{width:'100%'}}>
<Text style={{fontSize: 9, marginTop:24, marginLeft:24, fontFamily: fonts.gothamBlack}} >{"PASSWORD"}</Text>
          <Text style={{fontSize: 16, marginTop:0, marginLeft:24, fontFamily: fonts.gothamBlack}} >{"**********"}</Text>

<View style={{position:'absolute', top:24, right:24}} >
                        <TouchableOpacity 
                  onPress={() => {
                    console.log("calledddonpp")
                    proceedChangePassword()
                  }}
    >
          <Image
            source={icons.edit_bg_c}
            style={{ width: 30, height: 30}}
          />
                </TouchableOpacity>
          </View>

</View>
</View>
          :

<ActivityIndicator size="small" color="#0000ff" 
style={{flex:1,alignSelf:"center"}}/>}
{/* <View style={{backgroundColor:'#cdcdcd', height:1, width:'100%'}} ></View> */}

                  {/* <ProceedButton actionFunction={proceedUpdateUser} titleText="Update User Details" /> */}
                  {/* <ProceedButton actionFunction={proceedChangePassword} titleText="Change Password" /> */}

        </View>
    )

}

export default AccountScreen;