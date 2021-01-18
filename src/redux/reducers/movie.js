import {
    GET_MOVIES,
    GET_NOW_PLAYING,
    GET_POPULAR,
    GET_UPCOMING,
    FETCH_FAILURE,
    FETCH_REQUEST,
    GET_TOP_RATED,
    GET_TRENDING
} from '../actionTypes/movie'


const initialState = {
    movies: [],
    nowPlaying: [],
    upComing: [],
    popular: [],
    topRated: [],
    trending: [],
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
            if(action.payload === "Popular"){
                return{
                    ...state,
                    movies: state.popular
                }
            }else if(action.payload === "Now Playing"){
                return{
                    ...state,
                    movies: state.nowPlaying
                }
            }else if(action.payload === "Upcoming"){
                return{
                    ...state,
                    movies: state.upComing
                }
            }else{
                return{
                    ...state,
                    movies: state.topRated
                }
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
        case GET_TOP_RATED:
            return{
                ...state,
                loading: false,
                topRated: action.payload
            }
        case GET_TRENDING:
            return{
                ...state,
                loading: false,
                trending: action.payload
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