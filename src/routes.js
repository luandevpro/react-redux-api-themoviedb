import React from 'react'
import MoviesListContainer from './containers/MoviesListContainer'
import MoviesDetailContainer from './containers/MoviesDetailContainer'

const routes = [
   {
      path: '/',
      exact: true,
      main: () => <MoviesListContainer />
   },
   {
      path: '/:id',
      exact: false,
      main: ({match}) => <MoviesDetailContainer match={match}/>
   }
]

export default routes