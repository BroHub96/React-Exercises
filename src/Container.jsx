import { useState } from "react"

export function Container({title, children}){
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    function toggleCollapse(){
        setIsCollapsed(prevstate => !prevstate);
    }

    return (
        <div style={{backgroundColor: 'White', border: '1px white'}}>
            <h2 className="title" onClick={toggleCollapse} style={{cursor: 'pointer'}}> {title} </h2>
            {!isCollapsed && <div >{children}</div>}
        </div>
    )
}