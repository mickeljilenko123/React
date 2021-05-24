import React from 'react'
import { Route, Link } from 'react-router-dom'
import MoviesDetails from './MoviesDetails';



function MoviesPage( { match } ) {
    return (
        <div className="page__content">
            <h1>Movies</h1>
            <ul className="navigation">
              <li className="navigation__item"><Link to={`${match.url}/batman`}>Batman</Link></li>
              <li className="navigation__item"><Link to={`${match.url}/hitman`}>Hitman</Link></li>
            </ul>
            <Route path={`${match.url}/:moviesId`}  component={MoviesDetails} />
            <Route exact path={match.url}>
               <span>Select a movies please!!</span>
            </Route>
        </div>
    )
}

export default MoviesPage
