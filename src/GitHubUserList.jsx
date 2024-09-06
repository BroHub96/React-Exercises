import React from "react" 
import { Link } from react-router-dom 

export function GithubUserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.github.com/users");
            const data = await response.json();
            setUsers(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Github Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.login}>
                        <Link to={`users/${user.login}`}>{user.login}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}