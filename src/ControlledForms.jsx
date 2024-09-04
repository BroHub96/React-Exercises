import { useState } from "react";
import { WelcomeName } from "./WelcomeName";

export function InteractiveWelcome(){

    const [name, setName] = useState('');
    
    function HandleEvent(event){
        setName(event.target.name)
    } 

    return(
        <div>
            <input name ='name'
                    value = {name}
                    onChange={HandleEvent}
                    placeholder="Enter your name"
            />
            <WelcomeName name = {name} />
        </div>
    )
}