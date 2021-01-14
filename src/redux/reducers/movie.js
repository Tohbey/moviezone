import {
    GET_MOVIES,
    GET_LATEST,
    GET_NOW_PLAYING,
    GET_POPULAR,
    GET_UPCOMING,
    FETCH_FAILURE,
    FETCH_REQUEST
} from '../actionTypes/movie'


const initialState = {
    movies: [],
    lastest: [],
    nowPlaying: [],
    upComing: [],
    popular: [],
    loading: false,
    error:""
}

export const Movie = (state = initialState,action) => {
    switch(action.type){
        case FETCH_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_MOVIES:
            return{
                ...state,
                loading: false,
                movies: action.payload
            }
        case GET_LATEST:
            return{
                ...state,
                loading: false,
                lastest: action.payload
            }
        case GET_POPULAR:
            return{
                ...state,
                loading: false,
                popular: action.payload
            }
        case GET_NOW_PLAYING:
            return{
                ...state,
                loading: false,
                nowPlaying: action.payload
            }
        case GET_UPCOMING: 
            return{
                ...state,
                loading: false,
                upComing: action.payload
            }
        case FETCH_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
} 