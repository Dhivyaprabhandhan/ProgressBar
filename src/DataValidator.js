// [
//   { uK: "inputPhone", isValid:false, isManditory:false, inputVal:"" }
// ]

export const isValueExist = value => {
  if (value == undefined) return false;
  else if (value == null) return false;
  else if (typeof value == undefined) return false;
  else if (typeof value == null) return false;
  else return true;
};
export const validateForm = value => {
  let response = {canProceed: false};
  console.log("item_uk", value)
  try{
    response.canProceed = value.every((item)=> {
      console.log("item_uk1", item.uK, item.isValid, item.isManditory, item.inputVal)
      // return item.isValid || !item.isManditory
      ress = item.isValid || !item.isManditory
      console.log("ress=====", item.uK,  ress, item.isValid)

    return ress
    }
      )
  }
  catch(e){
    console.log("parsssexx", e)
  }
  return response;
};

export const validateEmail = value => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) 

export const validateCountry = value => (value.length >1)

export const validatePassword = value => (value.length >6)

export const validateCity = value => (value.length >1)

export const validateState = value => (value.length >1)

export const validatePincode = value => (value.length > 5)

export const validateAddress2 = value => !(value.length < 3) 

export const validateAddress1 = value => !(value.length < 3)

export const validateFirstName = value => !(value.length < 3) 

export const validateLastName = value => !(value.length < 3) 

export const validatePhone = value => !(value.length <10) 

export const validateTextDefault = value => {
  let isSuccess = false;
  isSuccess = isValueExist(value)
   return isSuccess;
};

export const validateAge = value => {
  let isSuccess = false;
  
  if(value==0) {
    isSuccess 
    console.log(isSuccess,'value')
  }
  else{
    isSuccess = isValueExist(value)
    console.log(isSuccess,'value123')
     return isSuccess;
     
  }
};

export const validateZipcode = value => {
  
  let isSuccess = false;
  isSuccess = isValueExist(value)
  return isSuccess;
  
};