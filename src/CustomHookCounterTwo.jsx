import { useCounter } from "./useCounter";

export function CustomHookCounter({}){
    const {counter, handleCounterIncrement, handleCounterDecrement, counterReset} = useCounter(0);

    return(
        <div>
             <h1>Counter: {counter}</h1>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={counterReset}>Reset</button>
        </div>
    )
}