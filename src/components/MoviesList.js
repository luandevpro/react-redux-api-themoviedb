import React, { PureComponent } from 'react'
import styled from 'styled-components'

class MoviesList extends PureComponent {
   render() {
      var {children} = this.props
      return (
         <MovieGrid>
            { children }
         </MovieGrid>
      );
   }
}

export default MoviesList

export const MovieGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(6,1fr);
   padding: 1rem;
   grid-gap: 1rem;
`;
