import React, { Component } from "react";

class Life extends Component {
   constructor(props) {
       super(props);
       console.log('=> 1 constructor');
   }
   componentDidMount() {
       console.log('=> 3 componentDidMount For http');
   }
   componentWillUnmount() {
       console.log('=> 4 componentWillUnmount delete cach');
   }
   shouldComponentUpdate(nextProps, nextState) {
       console.log('=> 5 shouldComponentUpdate');
       console.log(nextProps, nextState);
       return nextProps.number % 2;
   }
   componentDidUpdate(prevProps, prevState) {
       this.props
       console.log('=> componentDidUpdate');
       console.log(prevProps);
   }
   render(){
       console.log('=> 2 render');
       return (
        <div className="number">{this.props.number}</div>
       )
   }
}

export default Life;