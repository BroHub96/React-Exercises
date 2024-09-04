export function MouseClicker(){
    function nameEventHandler(event){
        console.log(event.target.name)
    }

    function imageEventHandler(event){
       event.stopPropagation()

       const imgElement = event.target.closest('button').querySelector('img')

       if (imgElement){
        console.log(imgElement.src)
       }
    }
    return(
        <div>
            <button name = "one" onClick={nameEventHandler}>Button 1</button> 
            <button name = "two" onClick={imageEventHandler}><img src="https://via.placeholder.com/150" alt="placeholder"></img></button>
        </div>
    )
}