import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
   return(
    <div className="page__content">
     <h1>Contacts</h1>
    <span>We are a Contacts!!!</span>
    <Link to="/">Go home</Link>
    <Link to="/products">to Products</Link>
    </div> 
   )
}
export default Contacts;