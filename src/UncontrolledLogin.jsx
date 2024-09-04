import React, {useRef} from "react";

export function UncontrolledLogin({onLogin}){

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const rememberRef = useRef(null);

    function HandleSubmit(event){
        event.preventDefault();
        
        const username = event.target.username.value;
        const password = event.target.password.value;
        const remember = event.target.remember.value;

        onLogin({username, password, remember});
    }
    
    function LoginWithFormData(){
        const formData = new FormData();
        
        formData.append('username', usernameRef.current.value)
        formData.append('password', passwordRef.current.value)
        formData.append('rememberRef', rememberRef.current.checked)

        console.log('FormData: ');

        for(const[key, value] of formData.entries()){
            console.log(`${key}: ${value}`);
        }
    }

    return (
        <form onSubmit={HandleSubmit}>
            <div>
                <label> Username: 
                    <input type="text" name="username" ref={usernameRef}/>
                </label>
            </div>
            <div>
                <label>
                    Password: <input type="password" name="password" ref={passwordRef}/>
                </label>
            </div>
            <div>
                <label>
                    Remember me: <input type="checkbox" name="remember" ref={rememberRef}/>
                </label>
            </div>
            <button type="submit"> Login </button>
            <button type="button" onClick={LoginWithFormData}> Login with FormData </button>

        </form>
    )


}


