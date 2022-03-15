import axios from "axios";
import { ADD_GAME,GET_GAME,DELETE_GAME} from "./types";
import { GET_USER,DELETE_USER} from "./types";
import{ADD_ADMIN, GET_ADMIN} from "./types"
// GAME PART
//ADD GAME
export const addGame = async (game) => {
    const Game = await axios({
        method: 'post', 
        url: 'http://localhost:5000/Addgame',
        data: {...game},
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type":"application/json",
            'Access-Control-Allow-Credentials': true
        }
      })
    return {
        type:ADD_GAME,
        payload: Game
    }
}

//DELETE GAME

export const deleteGame = async () => {
    const games = await axios.delete("Localhost:5000/deletegame/:id")
    return {
        type:DELETE_GAME,
        payload: games.data.data,
    }
}
//GETGAME
export const getGame = async () => {
    const games = await axios.get("Localhost:5000/getallGames")
    return {
        type:GET_GAME,
    payload: games.data.data,
   };
};

// USER PART
//USER LIST
export const getUser= async () => {
    const user = await axios.get("Localhost:5000/userlist")
    
    return {
        type:GET_USER,
    payload:user.data.data,
   };
};

//DELETE USER
export const deleteUser = () => {
    return {
        type:DELETE_USER,
    
    }
}



//ADMIN PART
//REGISTER ADMIN
export const addadmin = async (admin) => {
    const Admin = await axios({
        method: 'post', 
        url: 'http://localhost:5000/Register/Admin',
        data: {...admin},
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type":"application/json",
            'Access-Control-Allow-Credentials': true
        }
      })
    return {
        type:ADD_ADMIN,
        payload: Admin
    }
}
//GET ADMIN
export const getadmin = async () => {
    const admin = await axios.get("Localhost:5000/Login/Admin")
    return {
        type:GET_ADMIN,
    payload:admin.data.data,
   };
};
