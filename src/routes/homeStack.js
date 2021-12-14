import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../views/screen_components/Login/index';
import ChangePasswordScreen from '../views/screen_components/ChangePassword/index';
import ResetPasswordScreen from '../views/screen_components/ResetPassword/index';
import UpdateUserDetailsScreen from '../views/screen_components/UpdateUserDetails/index';
import SplashScreen from '../views/screen_components/Splash/Index';
import Registrationscreen from '../views/screen_components/Registration/index'
import DummyScreen from '../views/screen_components/DummyScreen';
import HomeTabs from './bottomStack'

const Stack= createStackNavigator();
const StackNavigator = () =>(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name ="SplashScreen" component={SplashScreen}></Stack.Screen>      
      <Stack.Screen name ="HomeScreen" component={HomeTabs}></Stack.Screen>
      <Stack.Screen name ="LoginScreen" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name ="ChangePasswordscreen" component={ChangePasswordScreen}></Stack.Screen>
      <Stack.Screen name ="ResetPasswordScreen" component={ResetPasswordScreen}></Stack.Screen>
      <Stack.Screen name ="Registrationscreen" component={Registrationscreen}></Stack.Screen>
      <Stack.Screen name ="UpdateUserDetailsScreen" component={UpdateUserDetailsScreen}></Stack.Screen>
      <Stack.Screen name ="DummyScreen" component={DummyScreen}></Stack.Screen>
   
    </Stack.Navigator>
)

export default function HomeStack() {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}




















