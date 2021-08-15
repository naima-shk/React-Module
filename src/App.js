import { useState } from 'react';
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
export default App;