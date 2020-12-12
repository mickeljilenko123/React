import React, { Component } from "react";

class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggler: 'Off',
        };
    }
    reset = () => {
        this.setState(state => ({
            toggler: !state.toggler,
        }));
    }

    render() {
        return (
            <button className = "toggler"
            onClick={this.reset}
            >
                {this.state.toggler ? 'Off': 'On'}
            </button>
        )
    }
}
export default Toggler;
