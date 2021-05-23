import React from 'react';
import transactions from './transactions.json';
import TransactionHistory from './TransactionHistory';

const App = () => {
    return(
        <TransactionHistory items={transactions}/>
    )
}
export default App;