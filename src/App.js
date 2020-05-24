import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Project from "./components/projects/Project";
import SignIn from "./components/auth/SignIn";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
