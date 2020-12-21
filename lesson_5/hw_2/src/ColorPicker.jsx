import React, { Component } from "react";

const CORAL = "Coral";
const AQUA = "Aqua";
const BISQUE = "Bisque";

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            colorText: '', 
        };
    }
    showText = value => {
        this.setState({
            colorText: value,
        })
    }
    reset = () => {
        this.setState({
            colorText: '',
        })
    }
   render() {
       return(
        <div>
        <div className="picker__title">
          {this.state.colorText}
        </div>
        <div>
          <button className="picker__button picker__button_coral"
          onMouseOver={() => this.showText(CORAL)}
          onMouseOut={this.reset}
          ></button>
          <button className="picker__button picker__button_aqua"
          onMouseOver={() => this.showText(AQUA)}
          onMouseOut={this.reset}
          ></button>
          <button className="picker__button picker__button_bisque"
          onMouseOver={() => this.showText(BISQUE)}
          onMouseOut={this.reset}
          ></button>
        </div>
      </div>
       )
   }
}

export default ColorPicker;