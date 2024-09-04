import { useState } from "react";

export function useCounter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue);

    function handleCounterIncrement(){
        setCounter((c) => c + 1);
    }

    function handleCounterDecrement(){
        setCounter((c) => c - 1);
    }

    function resetCounter(){
        setCounter(initialValue);
    }

    return{counter, handleCounterIncrement, handleCounterDecrement, resetCounter};
}