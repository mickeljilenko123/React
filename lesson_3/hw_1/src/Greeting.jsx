import React from "react";
import "./index.scss";
import moment from "moment";

const Greeting = props => {
   return (
    <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName} . I'm ${props.birthDate} years old`}
    </div>
   )
}
export default Greeting;