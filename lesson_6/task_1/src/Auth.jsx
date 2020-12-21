import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';
import './index.scss';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }
  render() {
    return (
      <div className="panel">
        <Greeting/>
      </div>
    )
  }

}

export default Auth;