import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { productsId } = useParams();
  return(
      <div>
        {`Product is a ${productsId}`}
      </div>
  )
}
export default Product;