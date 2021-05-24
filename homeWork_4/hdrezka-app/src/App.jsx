import React from 'react';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import { Link, Route, Switch } from 'react-router-dom';
import PageError from './PageError';
function App() {
  return (
    <>
    <ul className="navigation">
       <li className="navigation__item"><Link to="/">Home</Link></li>
       <li className="navigation__item"><Link to="/movies">Movies</Link></li>
    </ul>
    <div className="page">
      <Switch>
      <Route exact path="/">
         <HomePage />
      </Route>
      <Route path="/movies" component={MoviesPage} />
      <Route path="*">
         <PageError />
      </Route>
      </Switch>
    </div>
    </>
  );
}

export default App;
