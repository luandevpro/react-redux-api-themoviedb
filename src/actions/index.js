import * as Types from './../constants/ActionTypes'
import {CallAPI , CallAPIInfo } from './../utils/api'

export const fetchRequestMovies = () => {
   return dispatch => {
      return CallAPI('', 'get',null)
         .then(res => dispatch(fetchMovies(res.data)))
   }
}

export const fetchMovies = (movies) => {
   return {
      type: Types.FETCH_MOVIES,
      movies
   }
}

export const fetchRequestMovieInfo = (id) => {
   return dispatch => {
      return CallAPIInfo(`${id}`, 'get',null)
         .then(res => dispatch(fetchMovieInfo(res.data)))
   }
}

export const fetchMovieInfo = (movies) => {
   return {
      type: Types.FETCH_MOVIEINFO,
      movies
   }
}