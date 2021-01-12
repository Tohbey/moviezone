import { 
    FETCH_REQUEST,
    GET_TOKEN,
    FETCH_FAILURE
} from '../actionTypes/auth'


export const fetchRequest = () => {
    return{
        type: FETCH_REQUEST
    }
}

export const getToken = (token) => {
    return{
        type: GET_TOKEN,
        payload: token
    }
}

export const fetchFailure = (error) => {
    return{
        type: FETCH_FAILURE,
        payload: error
    }
}

export const auth = () => async(dispatch) => {
    
}