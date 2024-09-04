import { useState } from "react";

export function useForm(){
    const [formValues, setFormValues] = useState({name: '' , password: ''})

    function handleFormChange(event){
        const {name, value} = event.target ;

        setFormValues((prevValues) => ({...prevValues, [name]: value})) ;
    }

    return{formValues, handleFormChange};
}