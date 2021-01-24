import {
    GET_MOVIE_DETAIL, FETCH_FAILURE, FETCH_REQUEST, GET_SERIE_DETAIL
} from '../actionTypes/detail';
import Client from '../../services/HTTPClient';
import{
    BASE_URL_MOVIE, BASE_URL_TVSHOW, API_KEY
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

export const getMovieDetail = (movie) => {
    return{
        type: GET_MOVIE_DETAIL,
        payload: movie
    }
}

export const getSerieDetail = (serie) => {
    return{
        type: GET_SERIE_DETAIL,
        payload: serie
    }
}

export const fetchMovie = (movieId) => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL_MOVIE)

        const res = await client.get("/"+movieId+API_KEY)
        console.log('movie detail',res)
        dispatch(getMovieDetail(res))
    } catch (error) {
        dispatch(fetchFailure(error))
    }
}

export const fetchSerie = (serieId) => async(dispatch) => {
    dispatch(fetchRequest())
    try {
        const client = new Client(BASE_URL_TVSHOW);

        const res = await client.get("/"+serieId+API_KEY);
        console.log('serie detail',res)
        dispatch(getSerieDetail(res))
    } catch (error) {
        dispatch(fetchFailure(error))
    }
}