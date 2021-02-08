import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Users from "./Users";

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/users" component={Users}></Route>
        </Switch>

      </div>
    )
  }

};

export default App;