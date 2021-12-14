
import {proceedPostRequest} from "./remote/ApiInteractionSupport"
import {API_VALIDATE_USER, API_CUSTOMER_LOGIN, API_CHANGE_PASSWORD, API_UPDATE_PROFILE, API_GET_PROFILE_DETAILS} from "../../ApiEndpoints"
import {KEY_USER_EMAIL, KEY_USER_LOGGED_IN, KEY_USER_PASSWORD, KEY_TOKEN_DETAILS, _storeData, _retrieveData} from "../../common/AsyncSupport" 

/**
 * Data source types
 */
const DT_TYPE_REMOTE_API_GET = 1
const DT_TYPE_REMOTE_API_POST = 2
const DT_TYPE_REMOTE_API_PUT = 3
const DT_TYPE_REMOTE_API_DELETE = 4
const DT_TYPE_LOCAL_ASYNC = 5


/**
 * data unique keys for processing further
 */
export const DT_VALIDATE_USER = 1
export const DT_CUSTOMER_LOGIN = 2
export const DT_CHANGE_PASSWORD = 3
export const DT_UPDATE_USER_DETAILS = 4
export const DT_GET_USER_DETAILS = 5


// export default class DataLayer {


    // {type, params, callbackSuccess, callbackFailure}
// console.log('getdata')
 export const  getData = async (inputParams)=>
{
    let {type=1,
        header,
        params = null,
        successCallBack = null,
        failureCallback = null
          } = inputParams 

    // console.log( successCallBack,'getdata')
    // console.log( failureCallback,'getdata')
    // console.log('inputParams',inputParams)
    let api =""  

switch(type){
  

    // header,
    // params,
    // successCallBack =null,
    // failureCallback = null,
  
    
    case DT_CUSTOMER_LOGIN:
        // console.log('validate1', API_VALIDATE_USER)
        console.log("reqqqqq===", "api")
         api = API_CUSTOMER_LOGIN
        //  console.log("reqqqqq===", api)
        //  console.log("reqqqqq===", params)
        //  let token_details2 = await _retrieveData(KEY_TOKEN_DETAILS)
        //  console.log("revvvtt", "token_details", token_details2);

        proceedPostRequest(api, header, params, successCallBack, failureCallback)
        break;

    case DT_VALIDATE_USER:
        // console.log('validate1', API_VALIDATE_USER)
         api = API_VALIDATE_USER
        //  {"data": {"access_token": "191f495c7381459eb24ab3e350e501d3", "expires_in": 3600, "refresh_token": "4ReqpldOyy94lvegdyIOwbQpdXN7z9RzQ6BdcIVzD4s", "scope": "offline_access openid pantry-svc", "token_type": "reference_token"}, "type": 1}
        // bearer_token = ""
        // let token_details = _retrieveData(KEY_TOKEN_DETAILS)
        // console.log("revvvtt", "token_details")
        // if(token_details != null)
        // bearer_token = token_details.data.access_token
        // let bearer = 'Bearer ' + bearer_token;
        // header= {'Authorization': bearer,}

        proceedPostRequest(api, header, params, successCallBack, failureCallback)
        break;

        case DT_CHANGE_PASSWORD:
            // console.log('validate1', API_VALIDATE_USER)
            {
             api = API_CHANGE_PASSWORD
    
    
            proceedPostRequest(api, header, params, successCallBack, failureCallback)
            
            bearer_token = ""
            let token_detailsstr = await _retrieveData(KEY_TOKEN_DETAILS)

            console.log("revvvtt", "token_details", token_detailsstr)

            token_details = JSON.parse(token_detailsstr)


            if(token_details != null)
            bearer_token = token_details.data.access_token
            let bearer = 'Bearer ' + bearer_token;
            header= {'Content-Type': 'application/json', 'Authorization': bearer,}


            console.log("semthhh", api, header)

            proceedPostRequest(api, header, params, successCallBack, failureCallback)
            }
            break;

        case DT_UPDATE_USER_DETAILS:
            {
            // console.log('validate1', API_VALIDATE_USER)
            api = API_UPDATE_PROFILE

            bearer_token = ""
            let token_detailsstr = await _retrieveData(KEY_TOKEN_DETAILS)

            console.log("revvvtt", "token_details", token_detailsstr)

            token_details = JSON.parse(token_detailsstr)


            if(token_details != null)
            bearer_token = token_details.data.access_token
            let bearer = 'Bearer ' + bearer_token;
            header= {'Content-Type': 'application/json', 'Authorization': bearer,}


            console.log("semthhh", api, header)

            proceedPostRequest(api, header, params, successCallBack, failureCallback)
            }
            break;
            
            case DT_GET_USER_DETAILS:
                {
                // console.log('validate1', API_VALIDATE_USER)
                api = API_GET_PROFILE_DETAILS
    
                bearer_token = ""
                let token_detailsstr = await _retrieveData(KEY_TOKEN_DETAILS)
                let email_ss = await _retrieveData(KEY_USER_EMAIL)
    
                console.log("revvvtt", "token_details", token_detailsstr)
    
                token_details = JSON.parse(token_detailsstr)
    
    
                if(token_details != null)
                bearer_token = token_details.data.access_token
                let bearer = 'Bearer ' + bearer_token;
                header= {'Content-Type': 'application/json', 'Authorization': bearer,
                'email':email_ss
            }
    
    
                console.log("semthhh", api, header)
    
                proceedPostRequest(api, header, params, successCallBack, failureCallback, true)
                }
                break;
                
            
        // console.log('validate success')
      //  console.log(successCallBack,'valiadate')
        // console.log(failureCallback,'vali')
}
}
