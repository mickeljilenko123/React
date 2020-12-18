import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Greeting from './Greeting';


const rootElement = document.querySelector('#root');

const user = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '2001-01-01T11:11:11.819Z'
}

ReactDOM.render(
<Greeting user = {user}
/>, 
rootElement);