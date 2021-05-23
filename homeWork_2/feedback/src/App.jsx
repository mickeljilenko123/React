import React, { Component } from 'react';
import Statistics from './Statistics';
import Notification from './Notification';


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    handleGoodChange = () => {
        this.setState({
            good: this.state.good + 1,
        })
    }
    handleNeutralChange = () => {
        this.setState({
            neutral: this.state.neutral + 1,
        })
    }
    handleBadChange = () => {
        this.setState({
            bad: this.state.bad + 1,
        })
    }

    render() {  
        let currentTotal =  Object.values(this.state).reduce((e, acc) => e + acc);
        let procent = Math.round(this.state.neutral + this.state.bad < 1 ? this.state.good * 100 : this.state.good / (this.state.neutral + this.state.bad) * 100);     
     return(
          <div>
              <h1>Please leave feedback</h1>
              <button onClick={this.handleGoodChange}>Good</button>
              <button onClick={this.handleNeutralChange}>Neutral</button>
              <button onClick={this.handleBadChange}>Bad</button>
              <h1>Statics</h1>
              {this.state.good || this.state.neutral || this.state.bad > 1 
              ? <Statistics 
                  good={this.state.good} 
                  neutral={this.state.neutral} 
                  bad={this.state.bad}
                  total={currentTotal}
                  positivePercentage={procent}
              /> : <Notification />}
              
          </div>
        )
    }
}
export default App;