import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'


export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <hr />

       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




