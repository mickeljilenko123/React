import React from 'react';
import Offline from './Offline';
import Online from './Online';

const Status = ({ isOnline }) => isOnline
  ? (<Offline />)
  : (<Online />)
export default Status;