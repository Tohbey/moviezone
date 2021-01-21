import {
    GET_POPULAR, 
    GET_SERIES, GET_TOP_RATED, GET_TV_AIRING_TODAY, GET_TV_ON_AIR, FETCH_REQUEST, FETCH_FAILURE
} from '../actionTypes/series';
import Client from '../../services/HTTPClient'
import {
    BASE_URL_TVSHOW, POPULAR_URL_TVSHOW, TOP_RATED_URL_TVSHOW, AIRING_TODAY, ON_AIR
} from '../../utils/constant'


export const fetchRequest = () => {
    return{
        type: FETCH_REQUEST
    }
}

export const fetchFailure = (error) => {
    return{
        type: FETCH_FAILURE,
        payload: error
    }
}

export const getTvShows = (category) => {
    return{
        type: GET_SERIES,
        payload: category
    }
}

export const getPopularTvShow = (popular) => {
    return{
        type: GET_POPULAR,
        payload: popular
    }
}

export const getTopRatedTvShow = (topRated) => {
    return{
        type: GET_TOP_RATED,
        payload: topRated
    }
}

export const getOnAirTvShows = (onAir) => {
    return{
        type: GET_TV_ON_AIR,
        payload: onAir
    }
}

export const getAiringToday = (airing) => {
    return{
        type: GET_TV_AIRING_TODAY,
        payload: airing
    }
}

export const fetchPopularShows = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL_TVSHOW)
        
        const res = await client.get(POPULAR_URL_TVSHOW+"&page=1")
        dispatch(getPopularTvShow(res.result))
    } catch (error) {
        dispatch(fetchFailure(error))
    }
}

export const fetchTopRatedShows = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL_TVSHOW)
    
        const res = await client.get(TOP_RATED_URL_TVSHOW+"&page=1")    
        
        dispatch(getTopRatedTvShow(res.result))
    } catch (error) {
        dispatch(fetchFailure(error))
    }
}

export const fetchOnAirShows = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL_TVSHOW)
        
        const res = await client.get(ON_AIR+"&page=1")

        dispatch(getOnAirTvShows(res.result)) 
    } catch (error) {
        dispatch(fetchFailure(error))
    }
}

export const fetchAiringTodayShows = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL_TVSHOW)
    
        const res = await client.get(AIRING_TODAY+"&page=1")

        dispatch(getAiringToday(res.result)) 
    } catch (error) {
        dispatch(fetchFailure(error))
    }
}