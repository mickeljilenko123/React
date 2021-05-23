import React from 'react';
import { Link } from 'react-router-dom';


const Products = () => {
   return(
    <div className="page__content">
    <h1>Products</h1>
    <span>We are a products!!!</span>
    <Link to="/contacts">to Contacts</Link>
    <Link to="/">Go home</Link>
    </div>
   )
}
export default Products;