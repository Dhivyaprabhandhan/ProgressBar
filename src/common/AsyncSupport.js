// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const KEY_USER_BASIC = "KEY_USER_BASIC";
export const KEY_USER_EMAIL = "KEY_USER_EMAIL";
export const KEY_USER_PASSWORD = "KEY_USER_PASSWORD";
export const KEY_USER_FIRT_NAME = "KEY_USER_FIRT_NAME";
export const KEY_USER_LAST_NAME = "KEY_USER_LAST_NAME";
export const KEY_USER_PHONE = "KEY_USER_PHONE";

export const KEY_USER_LOGGED_IN = "KEY_USER_LOGGED_IN";

export const KEY_LOGIN_EXPIREY = "KEY_LOGIN_EXPIREY";
export const KEY_TOKEN_DETAILS = "KEY_TOKEN_DETAILS";


export const _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key,value);
    } catch (error) {
      // Error saving data
    }
  };

export const _retrieveData = async (key) => {
  console.log("fetcherr", "successful1", key)
    try {

      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
 
        return value
      }
      else{
        console.log("fetcherr", "successful3")
      }
    } catch (error) {
      console.log("fetcherr", error)
      // Error retrieving data
    }
  };