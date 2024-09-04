import React, { useEffect, useState } from "react";

export function GitHubUser({ username }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUserData(){
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (!response.ok) {
                    throw new Error('User not found');
                }
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchUserData();
        }
    }, [username]);

    if (loading) {
        return <p>Logging in...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>{user.name || username}</h2>
            <p>Login: {user.login}</p>
            <img src={user.avatar_url} alt={user.login} width="100" />
        </div>
    );
}