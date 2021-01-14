import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import { Movie } from './reducers/movie'

const rootReducer = combineReducers({
    movie: Movie
})

const configureStore = () =>  createStore(rootReducer, applyMiddleware(thunk))

export default configureStore;