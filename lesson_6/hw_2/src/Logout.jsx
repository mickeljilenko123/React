import React from 'react';

const Logout = ({ onLogout }) => {
   return(
    <button onClick={() => onLogout()} class="logout btn">Logout</button>
   )
}
export default Logout;