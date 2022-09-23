import Navbar from "./Navbar";

import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/">
        {  <Home />}
        </Route>
        <Route exact path="/about">
         { <About />}
        </Route>
        <Route exact path="/contact">
          {<Contact />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
