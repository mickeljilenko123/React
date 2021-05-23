import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from  './Logout';


class App extends Component {
         state = {
            isLoggin: false,
        }
    
    handleLogin = () => {
        this.setState({
            isLoggin: true,
        })
    }
    handleLogout = () => {
        this.setState({
            isLoggin: false,
        })
    }
    render() {
        return(
           <div className="panel">
               <Greeting isLoggin={this.state.isLoggin}/>
              {(this.state.isLoggin) 
  ? (<button
    onClick = {() => this.handleLogout()}
      className="btn logout">Выйти</button>)
  :  (<button
    onClick = {() => this.handleLogin()}
      className="btn login">Войти</button>)}
          </div>
        );
}
}
export default App;