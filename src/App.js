/*import { useState } from 'react';
import './App.css';
import ListItem from './Component/ListItem/ListItem';

function App() {
    const [nameState, setNameState] = useState('naima')
    return ( <
        div className = 'App' >
        <
        header className = 'App-header' >
        <
        button onClick = {
            () => setNameState('shaikh')
        } > Update name < /button>

        <
        div > My name is { nameState } < /div>  <
        div > { nameState } < /div> <
        ListItem name = { nameState }
        /> < /
        header > < /
        div >
    );
}
export default App;*/
import "./styles.css";

import { useState } from "react";

import ListItem from "./component/ListItem";
//import ArrayList from "./component/ArrayList";
function App() {
    // const [todos, setTodos] = useState([]);
    const [nameState, setNameState] = useState([]);
    //const name = ["naima", "shaikh", "js", "react", "cs"];
    //const doubled = name.map((name) => name);
    //console.log(doubled);
    const elementAdd = (name) => {
        console.log("naima run name");
        // const setNameState = nameState.slice();
        //setNameState.push(nameState);
        //nameState(setNameState);
    };
    //console.log(elementAdd);

    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        button onClick = {
            () => elementAdd("shaikh") } > Update name < /button>

        <
        div > My name is { nameState } < /div> <
        div > { nameState } < /div> <
        ListItem name = { nameState }
        /> <
        /header> <
        /div>
    );
}
export default App;