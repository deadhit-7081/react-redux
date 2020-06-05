import axios from 'axios'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FALIURE } from "./UserTypes"

const fetchUserRequest = () =>
{
    return{
        type : FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = (users) =>{
    return{
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

const fetchUserFaliure = (error) =>{
    return{
        type : FETCH_USERS_FALIURE,
        payload : error 
    }
}

export const fetchUsers = () =>{
    return (dispatch) =>{
        dispatch(fetchUserRequest)
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            const users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errMsg = error.message
            dispatch(fetchUserFaliure(errMsg))
        })
    }
}