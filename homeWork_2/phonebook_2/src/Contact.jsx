import React from 'react';

const Contact = ({ id, name, number, onDelete }) => {
   return(
       <li>
           <span>{name}: </span>
           <span>{number}</span>
           <button onClick={() => onDelete(id)}>Delete</button>
       </li>
   )
}
export default Contact;