import React, { Component } from 'react'
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import routes from './routes'


class App extends Component {
   showMovies = (routes) => {
      var result = null
      if(routes.length > 0){
         result = routes.map((movies,index) => {
            return <Route
                     key={index}
                     exact={movies.exact}
                     path={movies.path}
                     component={movies.main}
                      
                     />
         })
      }
      return <Switch>{result}</Switch>
   }
   render() {
      return (
         <Router>
            <div>
               {
                  this.showMovies(routes)
               }
            </div>
         </Router>
      );
   }
}

export default App;
