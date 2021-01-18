import { 
    FETCH_REQUEST, FETCH_FAILURE, GET_MOVIES, GET_NOW_PLAYING, GET_POPULAR, GET_UPCOMING, GET_TOP_RATED, GET_TRENDING
} from '../actionTypes/movie'
import Client from '../../services/HTTPClient';
import { 
    BASE_URL_MOVIE, NOW_PLAYING_MOVIE, POPULAR_URL_MOVIE, TOP_RATED_URL_MOVIE, UPCOMING_MOVIE, TRENDING, BASE_URL 
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

export const getMovies = (category = "Popular" ) => {
    return{
        type: GET_MOVIES,
        payload: category
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

export const getTrending = (trending) => {
    return{
        type: GET_TRENDING,
        payload: trending
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

export const fetchTrending = () => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL)

        const res = await client.get(TRENDING)
        dispatch(getTrending(res.results))
    } catch (error) {
        dispatch(fetchFailure(error))
        console.log(error)
    }
}