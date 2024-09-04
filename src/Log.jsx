import { useState } from "react";

export function Change(){
    const [change, setChange] = useState(true)
    const toggle = () => setChange(prev => !prev)
    return (
        <div>
        {change && <p> Please Log in </p>}
        <button onClick={toggle}>{change ? 'Log in' : 'Log out'}</button>
        </div>
    )
}