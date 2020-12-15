import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = ({ isOnline }) => 
isOnline ? (<Online />) : (<Offline />);

export default Status;
   




