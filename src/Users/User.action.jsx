import axios from "axios"
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./User.type"
import { BASE_URL } from "../Constants/config";
import { json } from "react-router-dom";

export const getUser=(email,password)=>async(dispatch)=>{

    dispatch({type:LOGIN_USER_LOADING})
    try {  
        
        let data = await axios.post(BASE_URL+"/user/login",{
                  email : email,
                  password: password
        });
        let {message ,token, status} = data.data
        console.log(data);
        console.log(message);
        if(status==1){
            alert(message)
            dispatch({ type:LOGIN_USER_SUCCESS, 
                       payload:token
                    })
            localStorage.setItem("authToken",json.token);
        }else{
            alert(message)
            dispatch({type:LOGIN_USER_ERROR})
        }

      
    } catch (error){
        dispatch({type:LOGIN_USER_ERROR})
    }
  
}   
// export default getUser;