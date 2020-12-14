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
    setColor = (value) => {
        this.setState({
          colorText: value,
        });
      };
    reset() {
        this.setState({
            colorText: this.state.colorText = '',
        });
    }

    render() {
        return (
            <div>
    <div className="picker__title">
    {this.state.colorText}
    </div>
    <div>
    <button className="picker__button picker__button_coral" onMouseEnter={() => this.setColor("Coral")} onMouseLeave={this.reset}></button>
          <button className="picker__button picker__button_aqua" onMouseEnter={() => this.setColor("Aqua")} onMouseLeave={this.reset}></button>
          <button className="picker__button picker__button_bisque" onMouseEnter={() => this.setColor("Bisque")} onMouseLeave={this.reset}></button>
    </div>
</div>
        );
    }
}

export default ColorPicker;