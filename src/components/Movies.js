import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import { Link } from 'react-router-dom'
import { POSTER_PATH } from './../constants/ActionTypes'


class Movies extends Component {
   render() {
      var {movie} = this.props
      return (
         <Link to={`/${movie.id}`}>
            <Overdrive id={movie.id}>
               <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={`${movie.title}`}/>
            </Overdrive>
         </Link>
      );
   }
}

Movies.propTypes = {
   movie: PropTypes.shape({
      title: PropTypes.string.isRequired
   }).isRequired
}

export default Movies

export const Poster = styled.img`
   background-size: cover;
   width: 100%;
   box-shadow: 0 0 35px black;
`;