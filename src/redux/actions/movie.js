import { 
    FETCH_REQUEST,
    GET_MOVIES,
    FETCH_FAILURE
} from '../actionTypes/movie'


export const fetchRequest = () => {
    return{
        type: FETCH_REQUEST
    }
}

export const getMovies = (movies) => {
    return{
        type: GET_MOVIES,
        payload: movies
    }
}

export const fetchFailure = (error) => {
    return{
        type: FETCH_FAILURE,
        payload: error
    }
}

export const getMovies = () => async(dispatch) => {
    
}