import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';
import './index.scss';

class Auth extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          showLogin: true,
          showSpinner: false,
        };
    }
    showSpinner1 = () => {
        this.setState({
            showLogin: false,
            showSpinner: true,
        });
        setTimeout(() => {
            this.setState({
                showLogin: true,
            showSpinner: false,
            });
        }, 2000);
    }
    showLogout = () => {
        this.setState({
            showLogin: false,
            showSpinner: false,
        });
    };
    render() {
        const { showLogin, showSpinner } = this.state;
        
        if (showSpinner) {
            return <Spinner size={20} />;
        }
        if (showLogin) {
            return <Logout onLogout={this.showLogout} />;
        }
        return <Login onLogin={this.showSpinner1} />;
    }
}

export default Auth;
