import React from 'react';

const NumbersList = ({ numbers }) => {
    const numbersList = numbers.map(num => 
        <li key={num}>{num}</li>);
        
    const e = <ul>{numbersList}</ul>
    return (e);
}
export default NumbersList;