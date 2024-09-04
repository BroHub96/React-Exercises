import React, { useState } from "react";

export function LoginCheck({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        onLogin({ username, password, remember });
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
        setRemember(false);
    };

    const buttonColor = password.length < 8 ? 'Red' : 'Green';

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Remember me:
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={e => setRemember(e.target.checked)} 
                    />
                </label>
            </div>
            <button type="submit" disabled={!username || password.length < 8} style={{backgroundColor: buttonColor}}>
                Login
            </button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    );
}