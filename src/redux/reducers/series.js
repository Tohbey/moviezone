import {
    FETCH_REQUEST,
    GET_POPULAR, GET_SERIES, GET_TOP_RATED, GET_TV_AIRING_TODAY, GET_TV_ON_AIR
} from '../actionTypes/series';

const initialState = {
    series: [],
    onAir: [],
    airingToday: [],
    popularTvShow: [],
    topRatedTvShow: [],
    loading: false,
    error:""
}

export const Series = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_SERIES:
            if(action.payload === "Popular"){
                return{
                    ...state,
                    series: state.popularTvShow
                }
            }else if(action.payload === "On Air"){
                return{
                    ...state,
                    series: state.onAir
                }
            }else if(action.payload === "Top Rated"){
                return{
                    ...state,
                    series: state.topRatedTvShow
                }
            }else{
                return{
                    ...state,
                    series: state.airingToday
                }
            }
        case GET_POPULAR:
            return{
                ...state,
                loading: false,
                popularTvShow: action.payload
            }
        case GET_TOP_RATED:
            return{
                ...state,
                loading: false,
                topRatedTvShow: action.payload
            }
        case GET_TV_AIRING_TODAY:
            return{
                ...state,
                loading: false,
                airingToday: action.payload
            }
        case GET_TV_ON_AIR:
            return{
                ...state,
                loading: false,
                onAir: action.payload
            }
        default: return state
    }
}