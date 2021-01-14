import { 
    FETCH_REQUEST,
    GET_MOVIES,
    FETCH_FAILURE,
    GET_LATEST,
    GET_NOW_PLAYING,
    GET_POPULAR,
    GET_UPCOMING,
    GET_TOP_RATED
} from '../actionTypes/movie'
import Client from '../../services/HTTPClient';
import { 
    BASE_URL_MOVIE, 
    LATEST_MOVIE, 
    NOW_PLAYING_MOVIE, 
    POPULAR_URL_MOVIE, 
    TOP_RATED_URL_MOVIE, 
    UPCOMING_MOVIE 
} from '../../utils/constant'

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

export const getLatest = (latest) => {
    return{
        type: GET_LATEST,
        payload: latest
    }
}

export const getUpcoming = (upcoming) => {
    return{
        type: GET_UPCOMING,
        payload: upcoming
    }
}

export const getPopular = (popular) => {
    return{
        type: GET_POPULAR,
        payload: popular
    }
}

export const getNowPlaying = (nowPlaying) => {
    return{
        type: GET_NOW_PLAYING,
        payload: nowPlaying
    }
}

export const getTopRated = (topRated) => {
    return{
        type: GET_TOP_RATED,
        payload: topRated
    }
}

export const fetchPopular = () => async(dispatch) => {
    dispatch(fetchRequest())
    try{
        const client = new Client(BASE_URL_MOVIE)

        const res = await client.get(POPULAR_URL_MOVIE+"&page=1")
        dispatch(getPopular(res.results))
    }catch(error){
        dispatch(fetchFailure(error))
        console.log(error)
    }
}

export const fetchTopRated = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL_MOVIE)

        const res = await client.get(TOP_RATED_URL_MOVIE+"&page=1")
        dispatch(getTopRated(res.results))
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}

export const fetchNowPlaying = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL_MOVIE)
       
        const res = await client.get(NOW_PLAYING_MOVIE+"&page=1")
        dispatch(getNowPlaying(res.results))
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}

export const fetchUpcoming = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL_MOVIE)
        
        const res = await client.get(UPCOMING_MOVIE+"&page=1")
        dispatch(getUpcoming(res.results))
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}

export const fetchLatest = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL_MOVIE)

        const res = await client.get(LATEST_MOVIE+"&page=1")
        dispatch(getLatest(res.results))
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}