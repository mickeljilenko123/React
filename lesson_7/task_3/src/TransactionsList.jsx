import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ transactions }) => {
    return (
        <ul className="transactions">
            {transactions.map(e => (
                <Transaction key={e.id} {...e} />
            ))}
        </ul>
    );
};

export default TransactionsList;