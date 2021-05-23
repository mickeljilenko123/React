import React from 'react';
import Statistics from './Statistics';
import statisticalData from './statistical-data.json';


const App = () => {
    return(
        <Statistics stats={statisticalData}/>
    )
}
export default App;