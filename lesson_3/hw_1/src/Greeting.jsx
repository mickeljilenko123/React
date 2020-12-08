import React from "react";


const Greeting = (props) => {

  const age = Math.floor((new Date() - new Date(props.birthDate)) / 1000 / 60 / 60 / 24 / 365.25);
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}
    </div>
  );
};

export default Greeting