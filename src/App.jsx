import React, { useContext } from "react"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"
import { AlertClock } from "./AlertClock"
import { Counter } from "./Counter"
import { NewClock } from "./NewClock"
import { WelcomeId } from "./WelcomeId"
import { MouseClicker } from "./MouseClicker"
import { InteractiveWelcome } from "./ControlledForms"
import { LoginCheck } from "./Login"
import { UncontrolledLogin } from "./UncontrolledLogin"
import { FocusableInput } from "./FocusableInput"
import { MountedEffect } from "./MountedEffect"
import { Colors } from "./Colors"
import { ToDoList } from "./ToDoList"
import { Container } from "./Container"
import { LanguageProvider, LanguageContext } from "./LanguageContext"
import { HelloContext } from "./HelloContext"
import { GitHubUsers } from "./GitHubUsers"
import { Exercise } from "./Exercise"
import { PasswordCheck } from "./PasswordEx"
import { CustomHookCounter } from "./CustomHookCounter"
import { CustomHookGithubUser } from "./CustomHookGitHubUser"
import { CustomHookCurrentLocation } from "./CustomHookCurrentLocation"
import { FilteredList } from "./FilteredList"
import useSWR, { SWRConfig } from "swr"
import { useGithubUser } from "./useGitHubUser"
import React, {useState} from "react"

export function App (){
    return(
    <LanguageProvider>
        <AppContent />
    </LanguageProvider>
    )
}

function AppContent(){
    function HandleLog(state){
        console.log('Login: ', state);
    }

    function HandleUncontrolledLog(state){
        console.log('Login: ', state)
    }

    const colorList = [
        {id: 0, name: 'Red'},
        {id: 1, name: 'Blue'},
        {id: 2, name: 'Green'},
        {id: 3, name: 'Yellow'},
    ]

    function handleCounterLog(credentials){
        console.log('Credentials: ', credentials);
    }
    
    
    const { changeLanguage } = useContext(LanguageContext);

    const data = [
        {name: 'Anthony', age: 21 },
        {name: 'James', age: 29},
        {name: 'Lisa', age: 16},
        {name: 'Carla', age: 17}
    ]

    const [username, setUsername] = useState('');

    const {user, error, loading, refetch} = useGithubUser(username);

    function handleSearch(){};

    return (
        <div>
            <Hello />
            <br></br>
                <div>
                    <Welcome name="John" age = {28} />
                </div>
            <br></br>
                <div>
                    <Welcome name = "John" age = {28}/>
                    <br></br>
                    <Welcome name = "Alice" age = {15} />
                    <br></br>
                    <Welcome name = "Paul" age = {73} />
                </div>
            <br />
            <div>
                <AlertClock />
            </div>
            <br />
            <div>
                <WelcomeId />
                <Counter initialValue={0} incrementAmount={1}/>
                <NewClock />
                <LoginCheck onLogin={handleCounterLog}/>
            </div>
            <br /> 
            <div>
                <MouseClicker />
            </div>
            <br />
            <div>
                <InteractiveWelcome />
                <LoginCheck onLogin={HandleLog}/>
            </div>
            <br />
            <div>
                <h1> Uncontrolled Login Form </h1>
                <UncontrolledLogin onUncontrolledLogin={HandleUncontrolledLog} />
            </div>
                <React.StrictMode>
                    <div>
                        <h1> Focusable Input </h1>
                            <FocusableInput />
                        <h1> Mounted Effect </h1>
                            <MountedEffect />
                    </div>
                </React.StrictMode>
            <br />
            <div>
                <h1> Color List </h1>
                <Colors colors ={colorList} />
            </div>
            <br />
            <div>
                <ToDoList />
            </div>
            <br />
            <div>
                <Container title = "Click to toggle">
                    <p>This content is inside the container</p>
                </Container>
            </div>
            <br />
            <div>
                <select onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="it">Italian</option>
                    <option value="es">Spanish</option>
                </select>
                <HelloContext />
            </div>
            <br />
            <div>
                <GitHubUsers />
            </div>
            <br />
            <div>
                <Exercise />
            </div>
            <br />
            <div>
                <PasswordCheck />
            </div>
            <br />
            <div>
                <CustomHookCounter />
            </div>
            <br />
            <div>
              
            </div>
            <br />
            <div>
                <CustomHookGithubUser />
            </div>
            <br />
            <div>
                <CustomHookCurrentLocation />
            </div>
            <br />
            <div>
                <h2>List: </h2>
                <FilteredList items={data} />
            </div>
            <br />
            <div>
                <SWRConfig value={{fetcher}}>
                    <input type="text" 
                    placeholder="Enter GitHub Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} />

                    <button onClick={handleSearch}> Search </button>
                    {loading && <p> Loading... </p>}
                    {error && <p> Error!! </p>}
                    {user && (
                        <div>
                            <h2> {user.name} </h2>
                            <p> Followers: {user.followers} </p>
                            <p> Public Repos: {user.public_repos} </p>
                        </div>
                    )}
                </SWRConfig>
            </div>
        </div>
        
    )
}


