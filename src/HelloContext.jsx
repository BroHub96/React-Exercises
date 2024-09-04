import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function HelloContext(){
    const {language} = useContext(LanguageContext)
    
    const greetings = {
        en: "Hello World!",
        it: "Ciao Mondo!",
        es: "Hola Mundo!"
    }

    return(
        <h2>{greetings[language]}</h2>
    )
}