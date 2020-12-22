import React from 'react';
import Offline from './Offline';
import Online from './Online';

const Status = ({ isOnline }) => isOnline
  ? (<Online />)
  : (<Offline />)
export default Status;