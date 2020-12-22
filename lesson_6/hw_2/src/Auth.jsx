import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';


class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: true
        };
      }
      handleLogin = () => {
        this.setState({
          isLoggedIn: false,
          isSpinner: true,
        })
      
      setTimeout(() => {
        this.setState({
          isLoggedIn: true,
          isSpinner: false,
        });
      }, 1000)
    }

      handleLogout = () => {
        this.setState({
          isLoggedIn: false,
        })
      }
      
      render() { 
          if (this.state.isSpinner) {
              <Spinner size={60}/>
          }
 if (this.state.isLoggedIn) {
    <Logout onLogout={this.handleLogout}/>
 }
 <Login onLogin={this.handleLogin}/>

}
}
export default Auth;