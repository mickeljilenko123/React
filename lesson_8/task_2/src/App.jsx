import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            visible: !this.state.visible,
        });
    }
    
    render() {
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>

                {this.state.visible && (
                    <>
                        <Clock location="New York" offset={-5} />
                        <Clock location="Kyiv" offset={2} />
                        <Clock location="London" offset={0} />
                    </>
                )}
            </div>
        );
    }
}

export default App;