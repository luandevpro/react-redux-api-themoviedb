import React, { Component } from 'react'
import { connect } from 'react-redux'
import MoviesList from './../components/MoviesList'
import Movies from './../components/Movies'
import * as actions from './../actions/index'

class MoviesListContainer extends Component {

   componentDidMount(){
      this.props.fetchRequestMovies()
   }

   showMoviesList = (movies) => {
      var result = null
      if(movies.length > 0){
         result = movies.map((movie,index) => {
            return <Movies key={index} movie={movie}/>
         })
      }
      return result
   }
   
   render() {
      var { movies } = this.props
      return (
         <MoviesList>
            {
               this.showMoviesList(movies)
            }
         </MoviesList>
      );
   }
}

var mapStateToProps = state => {
   return {
      movies: state.movies
   }
}

var mapDispatchToProps = dispatch => {
   return {
      fetchRequestMovies: () => {
         dispatch(actions.fetchRequestMovies())
      }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(MoviesListContainer)