import React from 'react';

const Spinner = ({ size }) => {
    const style = {
        width: `${size}px`,
        height: `${size}px`
    }
   return(
    <span class="spinner" style={style}></span>
   )
}
export default Spinner;