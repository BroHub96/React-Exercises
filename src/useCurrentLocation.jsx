import { useEffect, useState } from "react";

export function useCurrentLocation(){
    const [location, setLocation] = useState({latitude: null, longitude: null});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function getCurrentLocation(){
        setLoading(true);
        setError(error);

        if (!navigator.geolocation) {
            setLoading(false);
            setError('Geolocation is not supported by this browser.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLoading(false);
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (err) => {
                setLoading(false);
                setError(`Error ${err.code}: ${err.message}`);
            }
        );
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return {location, getCurrentLocation, loading, error};
}


