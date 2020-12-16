import React from 'react';
import Moment from "moment";



const Transaction = ({ from, to, amount, rate, time }) => {



  return (
    <li className="transaction">
      <span className="transaction__date">{from}</span>
      <span className="transaction__time">{to}</span>
      <span className="transaction__assets">{time}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{amount}</span>
    </li>
  )
}

export default Transaction;