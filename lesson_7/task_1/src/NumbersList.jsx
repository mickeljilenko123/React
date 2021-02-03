import React from 'react';

const NumbersList = ({ numbers }) => {
    const numbersList = numbers.map(num => 
        <li key={num}>{num}</li>);
        
     return (<ul>{numbersList}</ul>)
     
}
export default NumbersList;