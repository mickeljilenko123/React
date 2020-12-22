import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';


class Auth extends React.Component {
    state = {
        isLoggedIn: false,
        isLoading: false
      }   
      loginHandler = () => {
        this.setState({
          isLoading: true,
        });  
        setTimeout(() => {
          this.setState({
            isLoading: false,
            isLoggedIn: true,
          });
        }, 1000)
      } 
      logoutHandler = () => {
        this.setState({
          isLoggedIn: false,
        })
      }
      render() {    
        
        if (this.state.isLoading) {
          return <Spinner size={60} />
        }
        if (this.state.isLoggedIn) {
          return <Logout onLogout={this.logoutHandler} />
        }
        return <Login onLogin={this.loginHandler} />;
    }
}
export default Auth;