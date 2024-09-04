const Age = ({age})=>{        // 'Props' exercise (line 1 to 3)
    return <p> Your age is : {age} </p>;
};

export function Welcome({name ="Guest", age}){  // 'Props' and 'Rendering Component' exercises (line 5 to 34)
    return (
        <div>
            <p> Hello, {name} </p>
            <Age age = {age} />
            <br></br> 
                <div>
                    <p> Hello, {name} </p>
                    {age > 18 && <Age age = {age} /> }
                    {age > 18 && age < 65 && <Age age = {age} /> }
                    {age > 18 && name === "John" && <Age age = {age} />}
                    <Rdrmessage age = {age}/>
                    {age > 18 && <Age age = {age} /> }
                    {age > 18 && age < 65 && <Age age = {age} /> }
                    {age > 18 && name === "John" && <Age age = {age} />}
                </div>
                <br />
        </div>
    )
}

const Rdrmessage = ({age})=>{
    return (<div>
        <p>{age > 18 ? 'You are an adult!' : 'You are very young'}</p>
    </div>)
}