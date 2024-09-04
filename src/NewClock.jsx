import React, {useState, useEffect} from "react";

export function NewClock(){
    const [time, setTime] = useState(new Date()) 

    useEffect(() => {
        const updateTime = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {clearInterval(updateTime)}
    }, [])
    
    return (
         <h2>{time.toLocaleTimeString()}</h2>
    )
}   