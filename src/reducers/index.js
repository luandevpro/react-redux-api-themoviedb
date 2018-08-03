import { combineReducers } from "redux"
import movies from './movies'
import movieInfo from './movieInfo'

const reducers = combineReducers({
   movies,
   movieInfo
})

export default reducers