  
import React from 'react';

//убираем рендер и переменную с пропсами для category
const ProductCategoryRow = ({ category }) =>
  <tr>
    <th colSpan="2">
      {category}
    </th>
  </tr>;

export default ProductCategoryRow;