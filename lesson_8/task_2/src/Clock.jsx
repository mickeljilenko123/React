import React, { Component } from "react";
import "./clock.scss";
import moment from 'moment';

const formatDate = offset => moment().utcOffset(offset).format('LTS');

class Clock extends Component {
  constructor(props) {
      super(props);
      this.state = {
          location: props.location,
          offset: formatDate(props.offset),
      };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
        this.setState({
            offset: formatDate(this.state.offset),
        });
    }, 1000);
}

  componentWillUnmount() {
      clearInterval(this.interval)
  }

  render() {
      return (
          <div className="clock">
              <div className="clock__location">{this.state.location}</div>
              <div className="clock__time">{this.state.offset}</div>
          </div>
      );
  }
}

export default Clock;


