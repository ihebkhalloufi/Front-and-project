import axios from "axios";
import{ADD_USER, GET_USER} from "./types"


//USER PART
//REGISTER USER
export const adduser = async (users) => {
    const User = await axios({
        method: 'post', 
        url: 'http://localhost:5000/User/Register',
        data: {...users},
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type":"application/json",
            'Access-Control-Allow-Credentials': true
        }
      })
    return {
        type:ADD_USER,
        payload: User
    }
}
//LOGIN USER
export const getuser = async () => {
    const users = await axios.get("Localhost:5000/User/Login")
    return {
        type:GET_USER,
    payload:users.data.data,
   };
};
