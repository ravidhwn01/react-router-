import Navbar from "./Navbar";

import {BrowserRouter as  Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
function App() {
  return (
    <>
      <Navbar />

      <Switch>
      <Route exact path="/"   component={Home}  />
      <Route exact path="/about"  component={About} />
      <Route exact path="/contact"  component={Contact} />
      {/* <Route path='*' component={Error} /> */}
    </Switch>
      {/* <Switch>
        <Route exact path="/">
        {  <Home />}
        </Route>
        <Route exact path="/about">
         { <About />}
        </Route>
        <Route exact path="/contact">
          {<Contact />}
        </Route>
        <Route component={Error} />
        
      </Switch> */}
      
    </>
  );
}

export default App;
