  import React, { Component } from "react";
import Greeting from "./Greeting";
import Logout from "./Logout";
import Login from "./Login";


class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }

    handleLogIn = () => {
        this.setState({
            isLoggedIn: true,
        });
    };
    handleLogOut = () => {
        this.setState({
            isLoggedIn: false,
        });
    };

    render() {
        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                <div>
                    {this.state.isLoggedIn ? (
                        <Logout onLogout={this.handleLogout} />
                    ) : (
                        <Login onLogin={this.handleLogIn} />
                    )}
                </div>
            </div>
        );
    }
}

export default Auth;