import axios from "axios";
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./User.type";
import { BASE_URL } from "../../Constants/config";


export const getUser = (email, password) => async (dispatch) => {
    dispatch({ type: LOGIN_USER_LOADING });
    try {
        const data = await axios.post(BASE_URL+ "/user/login", {
            email: email,
            password: password,
        });
        const { message, token, user, status } = data.data;
        console.log(data);
        console.log(message);
        if (status === 1) {
            alert(message);
            dispatch({ 
                type: LOGIN_USER_SUCCESS, 
                payload: { token, user }
            });
        } else {
            alert(message);
            dispatch({ type: LOGIN_USER_ERROR });
        }
    } catch (error) {
        dispatch({ type: LOGIN_USER_ERROR });
    }
};