import {
    GET_MOVIE_DETAIL, GET_SERIE_DETAIL,FETCH_FAILURE,FETCH_REQUEST
} from '../actionTypes/detail'

const intialState = {
    loading: false,
    movieDetail: {},
    serieDetail: {},
    error: ""
}

export const Detail = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_SERIE_DETAIL:
            return{
                ...state,
                loading: false,
                serieDetail: action.payload
            }
        case GET_MOVIE_DETAIL:
            return{
                ...state,
                loading: false,
                movieDetail: action.payload
            }
        case FETCH_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state;
    }
}