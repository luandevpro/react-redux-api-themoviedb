import * as Types from './../constants/ActionTypes'

var initialState = {}

const appReducers = (state = initialState,action) => {
   switch(action.type){
      case Types.FETCH_MOVIEINFO:
         return action.movies
      default:
         return state
   }
}

export default appReducers