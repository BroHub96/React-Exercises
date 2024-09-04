import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { CounterDisplay } from './CounterDisplay'; 

export function Counter({ initialValue, incrementAmount }) {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        console.log(`Current Value: ${counter}`);
    }, [counter]); 

    const handleIncrement = () => setCounter(prev => prev + incrementAmount);
    const handleDecrement = () => setCounter(prev => prev - incrementAmount);
    const handleReset = () => setCounter(initialValue);

    return (
        <div>
            <CounterDisplay count={counter} />
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

Counter.propTypes = {
    initialValue: PropTypes.number.isRequired,
    incrementAmount: PropTypes.number.isRequired,
};