import React from 'react';

const Greeting = ({ isLoggin }) => isLoggin 
? (<h1>Добрый день пользователь</h1>)
: (false);
export default Greeting;
