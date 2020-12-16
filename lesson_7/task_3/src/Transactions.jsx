// input from, to, amount, rate, time
// output render

import React from 'react';
import moment from 'moment';



const Transactions = ({ from, to, amount, rate, time}) => {
    const getDate = moment(time).format("DD MMM");
  return (
    <li className="transaction">
        <span className="transaction__date">{from}</span>
        <span className="transaction__date">{to}</span>
        <span className="transaction__assets">{amount}</span>
        <span className="transaction__rate">{rate}</span>
        <span className="transaction__amount">{getDate}</span>
    </li>
  )
}
export default Transactions;


// class Transactions extends React.Component {

// }