import { useState } from "react";

export function Exercise(){
    const [data, setData] = useState('')
    const [value, setValue] = useState('')

    async function GetUserData(){
        const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${value}`)
        const data = await response.json()
        console.log(data)
        setData(data)
}
    function handleChange(e){
        setValue(e.target.value)
    }
    return(
        <div>
            <div>
                <input value={value} onChange={handleChange} />
                <button value={value} onClick={GetUserData}> Fetch Data </button>
            </div>
            <p>{data.userId}</p>
            <p>{data.id}</p>
            <p>{data.body}</p>
        </div>
    )
}