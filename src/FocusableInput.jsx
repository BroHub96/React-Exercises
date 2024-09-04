import React, {useEffect, useRef} from "react"

export function FocusableInput(){
    const inputRef = useRef(null)

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, [])
    return(
        <input name="username" ref={inputRef} />
    )
}