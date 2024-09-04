import { useCallback, useState } from "react";

export function useCounter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue);

    const handleCounterIncrement = useCallback(() => {
        setCounter((c) => c + 1);
    }, []);

    const handleCounterDecrement = useCallback(() =>{
        setCounter((c) => c - 1);
    }, []);

    const resetCounter = useCallback (() =>{
        setCounter(initialValue);
    }, [initialValue]);

    return{counter, handleCounterIncrement, handleCounterDecrement, resetCounter};
}