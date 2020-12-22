import React from 'react';

const Login = ({ onLogin }) => {
   return(
    <button onClick={() => onLogin()} class="login btn">Login</button>
   )
}
export default Login;