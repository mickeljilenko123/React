import React from "react";
import ReactDOM from "react-dom";
import Transaction from "./Transaction";

const TransactionsList = ({ transactions }) => {
    return (
        <ul className="transactions">
            {transactions.map((elem) => (
                <Transaction key={elem.id} {...elem} />
            ))}
        </ul>
    );
};

export default TransactionsList;