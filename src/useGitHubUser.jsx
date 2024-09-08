// import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then((res) => res.data)

export function useGithubUser(username){
    const {data, error, username} = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

    return{
        user: data,
        error: error ? error.message : null,
        loading: !data && !error,
        refetch: mutate,
    }

  /*const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    if (username) {
      fetchUserData();
    }
  }, [username, fetchUserData]);

  return { user, error, loading, fetchUserData }; */
};