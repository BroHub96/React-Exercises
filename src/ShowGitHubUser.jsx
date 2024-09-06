import React from "react";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
    const { username } = useParams();
    
    return (
        <div>
            <h2>Showing details for {username}</h2>
        </div>
    );
}