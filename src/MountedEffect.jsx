import React, {useEffect, useRef} from "react"

export function MountedEffect(){
    const isMounted = useRef(false);

    useEffect(() => {
        if(!isMounted.current){
            console.log('Component is mounted!')
            isMounted.current = true;
        }
    }, [])
    
    return(
        <div> This component tracks its mount status </div>
    )
}