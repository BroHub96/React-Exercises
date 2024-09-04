import { useCurrentLocation } from "./useCurrentLocation";

export function CustomHookCurrentLocation(){
    const {location, getCurrentLocation, loading, error} = useCurrentLocation();

    return (
        <div>
            <h1> Current Location: </h1>
            {loading && <p> Loading...</p>}
            {error && <p> Error! </p>}
            {location.latitude && location.longitude && (<p> Latitude: {location.latitude} , Longitude: {location.longitude} </p>)}
            <button onClick={getCurrentLocation}> Get Current Location </button> 
        </div>
    )
}