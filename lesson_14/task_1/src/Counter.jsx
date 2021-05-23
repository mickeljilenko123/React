import React, { useState } from 'react';

const Counter = () => {
    // Текущее значение => counter;
    // Функция Устанавливает каждый раз новое значение => setCounter;
    const [ counter, setCounter ] = useState(0);
    return(
        <div className="counter">
             <button onClick={() => setCounter(counter - 1)}>
                 -
             </button>
             <span onClick={() => setCounter(0)}>
               {counter}
             </span>
             <button onClick={() => setCounter(counter + 1)}>
                 +
             </button>
        </div>
    )
}
export default Counter;