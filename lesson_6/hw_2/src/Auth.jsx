import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';
import './index.scss';

class Auth extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isLoggedIn: false,
            isLoading: false
        };
    }
    loginHandler = () => {
        this.setState({
          // isLoggedIn: true,
          isLoading: true,
        });
        setTimeout(() => {
          this.setState({
            isLoading: false,
            isLoggedIn: true,
          });
        }, 2000)
      }
    
      logoutHandler = () => {
        this.setState({
          isLoggedIn: false,
        })
    
      }
    render() {
        const { isLoggedIn, isLoading } = this.state;

    if (isLoading) {
      return <Spinner size={60} />
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />
    }
    return <Login onLogin={this.loginHandler} />;
    }
}

export default Auth;
