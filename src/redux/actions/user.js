import { CREAT_USER,GET_USER } from "../actionTypes/user";

export const createUser = (user) => {
    return{
        type: CREAT_USER,
        payload: user
    }
}

export const getUser = (email) => {
    return{
        type: GET_USER,
        payload: email
    }
}