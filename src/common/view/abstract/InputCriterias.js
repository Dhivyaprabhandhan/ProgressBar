import {validatePhone, validateTextDefault,validateAge,validateZipcode} from '../../../DataValidator';

// default, number-pad, decimal-pad, numeric, email-address, phone-pad

export const INPUT_NAME = {
  minLength: 10,
  maxLength: 10,
  keyboardType: 'numeric',
  validator: validatePhone,
};

export const INPUT_PHONE = {
  minLength: 10,
  maxLength: 10,
  keyboardType: 'numeric',
  validator: validatePhone,
};

export const INPUT_TEXT_DETAULT = {
  minLength: 3,
  maxLength: 30,
  keyboardType: 'default',
  validator: validateTextDefault,
};
export const INPUT_Age = {
  minLength: 1,
  maxLength: 2,
  keyboardType: 'numeric',
  validator: validateAge,
};
export const INPUT_ZIPCODE = {
  minLength: 6,
  maxLength: 6,
  keyboardType: 'numeric',
  validator: validateZipcode,
};

