import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.jsx";
import moment from "moment";

const rootElement = document.querySelector('#root');



ReactDOM.render(
<Greeting 
firstName = "John"
lastName = "Doe"
birthDate = {new Date("1995-01-01T05:01:01.566Z")}
/>, 
rootElement);