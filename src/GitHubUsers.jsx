import { useState } from "react"
import { GitHubUser } from "./GitHubUser"

export function GitHubUsers(){
    const [username, setUsername] = useState('');
    const [usernamesList, setUsernamesList] = useState ([]);

    function handleSubmit(e){
        e.preventDefault();
        if(username && !usernamesList.includes(username)){
            setUsernamesList([...usernamesList, username]);
            setUsername('');
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Enter GitHub username" required />
                <button type="submit"> Search </button>
            </form>
            <ul>
                {usernamesList.map((user, index) => (
                    <li key={index}>
                        <GitHubUser username={user} />
                    </li>
                ))}
            </ul>
        </div>
    )
}