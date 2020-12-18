import React from "react";
import ReactDOM from "react-dom";
import Greeting from './Greeting';

const App = () => {
    return (
        <Greeting 
        firstName = "John"
        lastName = 'Doe'
        birthDate = {new Date('2001-01-01T11:11:11.819Z')}
        />
    )
}
export default App;

