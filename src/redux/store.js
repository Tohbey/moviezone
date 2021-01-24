import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import { Movie } from './reducers/movie'
import { Series } from './reducers/series'
import { Detail } from './reducers/detail'

const rootReducer = combineReducers({
    movie: Movie,
    serie: Series,
    detail: Detail
})

const configureStore = () =>  createStore(rootReducer, applyMiddleware(thunk))

export default configureStore;