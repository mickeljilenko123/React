import React, { Component } from "react";

class Toggler extends Component {
    constructor() {
        super();
        this.state = {
            status: 'Off',
        }
    }
    reset = () => {
        this.setState({
            status: !this.state.status,
        });
    }
  render(){
      return(
          <button className= "toggler" onClick={this.reset}>{this.state.status ? 'Off': 'On'}</button>
      )
  }
}
export default Toggler;
