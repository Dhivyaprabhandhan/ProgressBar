
const API_RESPONSE_SUCCESS_DEFAULT = 1
const API_RESPONSE_ERROR_TYPE_NETWORK = 2
const API_RESPONSE_ERROR_TYPE_AUTH = 3
const API_RESPONSE_ERROR_TYPE_FAILURE = 4


console.log('beforeproceedpost')


export const proceedPostRequest = (
  api,
  header,
  params,
  successCallBack =null,
  failureCallback = null,
  isGetReq = false,

) => {
  // console.log(successCallBack,'9999999')
  // console.log(failureCallback,'........')
  console.log('params', params)
  
  
  let requestOptions = {
    method: 'POST',
    headers: header ? header : {'Content-Type': 'application/json'},
    body: JSON.stringify(params),
  };

  if(isGetReq)
  requestOptions = {
    method: 'GET',
    headers: header ? header : {'Content-Type': 'application/json'},
  };
 
  fetch(api, requestOptions)
    .then(response => response.json())
    .then(json => {
        if(successCallBack != null)
        {
          console.log('success', JSON.stringify(json))
          let response = {"type":API_RESPONSE_SUCCESS_DEFAULT, "data" : json} 
          successCallBack(response)

          // console.log('json',json)
          
        }
    })
    .catch(error => {
      console.log('jsonerr', error);
      
    if(failureCallback != null)
    
     {
        let response = {"type":API_RESPONSE_ERROR_TYPE_FAILURE, "data" : error} 
        failureCallback(response)
        console.log('api failure')
        
    }
    });
}
