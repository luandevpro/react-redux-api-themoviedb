import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions/index'
import MoviesDetail from './../components/MoviesDetail'


class MoviesDetailContainer extends Component {

   componentDidMount(){
      var { fetchRequestMovieInfo , match} = this.props
      fetchRequestMovieInfo(match.params.id)
   }
   
   render() {
      var { movies } = this.props
      return <MoviesDetail movies={movies} />
   }
}

var mapStateToProps = state => {
   return {
      movies: state.movieInfo
   }
}

var mapDispatchToProps = dispatch => {
   return {
      fetchRequestMovieInfo: (id) => {
         dispatch(actions.fetchRequestMovieInfo(id))
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesDetailContainer)