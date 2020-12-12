import React, { Component }from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Color extends Component {
    setBodyColor = color => {
        document.body.style.backgroundColor = color;
    } 
    render() {
        return (
            <div className="colors">
                <button style = {{
                    backgroundColor: RED,
                }} 
                onClick = {() => this.setBodyColor(RED)}
                className="colors_button"></button>
                <button style = {{
                    backgroundColor: GREEN,
                }}
                onClick = {() => this.setBodyColor(GREEN)}
                 className="colors_button"></button>
                <button style = {{
                    backgroundColor: BLUE,
                }}  
                onClick = {() => this.setBodyColor(BLUE)}
                className="colors_button"></button>
            </div>
        );
    }
}
export default Color;