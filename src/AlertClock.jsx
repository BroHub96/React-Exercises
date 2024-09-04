export function AlertClock(){
    function handleButton(){
        alert('Current time: ' + new Date().toLocaleTimeString());
    }

    return (
        <div>
            <p> Click to see current time</p>
            <button onClick={handleButton}>Click me!</button>
        </div>
    )
}