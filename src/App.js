import "./App.css";
import React from 'react';
//import { useState } from "react";
//import Counter from './Component/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from './Component/List';
import ListItem from './Component/ListItem';
import Main from './Component/Main';

function App() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/ListItem">ListItem</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ListItem">
            <ListItem />
          </Route>
          <Route path="/List">
            <List />
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
