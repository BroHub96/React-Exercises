import React, {useState} from "react"

export function ToDoList({}){
    
    const [todos, setTodos]=useState([]);
    const [inputValue, setInputValue]=useState('');
    
    function addTodo(){
        if (inputValue.trim() !== ''){
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    function removeTodo(index){
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    function resetTodos(){
        setTodos([]);
    }
    
    return(
        <div>
            <h1> To do list </h1>
            <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
            <button onClick={addTodo}> Add </button> 
            <button onClick={resetTodos}> Reset </button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}> {todo} 
                        <button onClick={() => removeTodo(index)}> Remove </button>    
                    </li>
                ))}
            </ul> 
        </div>
    )
}