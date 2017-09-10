import React from "react";
import router, {
  Route,
  Router,
  hashHistory,
  IndexRoute
} from "react-router";

//bring in all components
import Main from "../components/Main.js";
import About from "../components/pages/About.js";
import Portfolio from "../components/pages/Portfolio.js";
import Contact from "../components/pages/Contact.js";
import Landing from "../components/pages/Landing.js";
module.exports = (
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="Landing" component={Landing}/>
    <Route path="About" component={About}/>
    <Route path="Portfolio" component={Portfolio}/>
    <Route path="Contact" component={Contact}/>
    <IndexRoute component={Landing}/>
  </Route>
</Router>
);