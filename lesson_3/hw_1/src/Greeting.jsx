import React from "react";
import moment from 'moment';



const Greeting = props => {
    const years = Math.floor((new Date() - new Date(props.user.birthDate)) / (1000 * 60 * 60 * 24 * 365.25));
    return (
        <div className="greeting">
          {`My name is ${props.user.firstName} ${props.user.lastName}. I'm ${years} years old`}
        </div>
    )
}
export default Greeting;