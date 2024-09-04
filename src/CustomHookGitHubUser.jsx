import { useState } from "react";
import { useGithubUser } from "./useGitHubUser";

export function CustomHookGithubUser(){
    const [username, setUsername] = useState('');
    const {user, error, loading, fetchUserData} = useGithubUser(username);

    function handleFetchUser(){
        fetchUserData();
    }

    return (
        <div>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter GitHub username" 
        />
        <button onClick={handleFetchUser} disabled={loading}> {loading ? 'Loading...' : 'Fetch User'} </button> 
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {user && (
            <div>
            <h2>{user.name}</h2>
            <p>Followers: {user.followers}</p>
            <p>Public Repos: {user.public_repos}</p>
            <img src={user.avatar_url} alt={`${user.name}'s avatar`} width={100} />
            </div>
        )}
        </div>
    )
}