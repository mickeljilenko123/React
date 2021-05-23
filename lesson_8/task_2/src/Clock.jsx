import React, { Component } from "react";
import "./clock.scss";




class Clock extends Component {
    constructor(props) {
        super(props),
        this.state = {
            date: new Date(),
        }
    }
  render() {
      return (
          <div>{this.props.date.toLocaleTimeString()}</div>
      );
  }
}

export default Clock;


