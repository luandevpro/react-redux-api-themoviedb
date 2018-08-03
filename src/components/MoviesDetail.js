import React, { Component } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import { Poster } from './Movies'
import { POSTER_PATH , BACKDROP_PATH } from './../constants/ActionTypes'

class MoviesDetail extends Component {
   render() {
      var { movies} = this.props
      return (
         <MovieWrapper backdrop_path={`${BACKDROP_PATH}${movies.backdrop_path}`}>
            <MovieInfo>
               <div>
                  <Overdrive id={movies.id}>
                     <Poster src={`${POSTER_PATH}${movies.poster_path}`} alt={`${movies.title}`}/>
                  </Overdrive>
               </div>   
               <div>
                  <h1>{movies.title}</h1>
                  <p>{movies.release_date}</p>
                  <p>{movies.overview}</p>
               </div>
            </MovieInfo>
         </MovieWrapper>
      );
   }
}

export default MoviesDetail

const MovieWrapper = styled.div`
   position: relative;
   background: url(${props => props.backdrop_path}) no-repeat;
   padding-top: 50vh;
   background-size: cover;
`;

const MovieInfo = styled.div`
   background: white;
   padding: 2rem 10%;
   text-align: left;
   display: flex;
   > div {
      margin-left: 20px
      > p {
         text-align: justify;
      }
   }
   img {
      position: relative;
      top: -5rem;
      width: 180px;
   }
   
`;

