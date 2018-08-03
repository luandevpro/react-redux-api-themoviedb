import * as Types from './../constants/ActionTypes'

var initialState = []

const appReducers = (state = initialState,action) => {
   switch(action.type){
      case Types.FETCH_MOVIES:
         return [...action.movies.results]
      default:
         return [...state]
   }
}

export default appReducers