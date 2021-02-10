import React from "react";
import User from "./User";
import { Link, Route, Switch } from 'react-router-dom';


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
          <Route exact path={match.path} >
            <span>Select a user please</span>
          </Route>
          <Route exact path={`${match.path}/:userId`} component={User}></Route>
        </Switch>
      </div>
    )
  }

export default Users;