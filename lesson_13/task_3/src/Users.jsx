import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import User from './User.jsx';


const Users = ({ match }) => {
       return (
        <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to={`${match.path}/github`}>Github</Link>
          </li>
          <li className="navigation__item">
            <Link to={`${match.path}/facebook`}>Facebook</Link>
          </li>
        </ul>
        <Switch>
            <Route path={`${match.path}/:userId`}  component={User} ></Route>
        </Switch>
        </div>
)
}
export default Users;