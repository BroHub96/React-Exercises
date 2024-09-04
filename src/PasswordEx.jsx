import { useState } from "react";

export function PasswordCheck(){
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState ('');
    const [errorMsg, setErrorMsg] = useState ('');

    function handlePassword(e){
        setPassword(e.target.value)
    }
    
    function handleConfirmPassword(e){
        setConfirmPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();

        const containsRequiredCharacters = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&.*()_+])[A-Za-z\d!@#$%^&.*()_+]{8,}$/.test(password);
        const passwordMatch = password === confirmPassword ;

        if(!containsRequiredCharacters){
            setErrorMsg('Password must contain special characters and at least 8 letters')
        } else if (!passwordMatch){
            setErrorMsg('Password does not match')
        } else {
            setErrorMsg('Password are matching')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input value={password} onChange={handlePassword} />
                <input value={confirmPassword} onChange={handleConfirmPassword}></input>
                <p>{errorMsg}</p>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}