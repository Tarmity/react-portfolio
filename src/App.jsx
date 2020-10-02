import React from 'react';
import NavBarFull from "./components/NavbarFull/NavbarFull";
import Homepage from './components/Homepage/Homepage'
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useLocation } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBarFull />

      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Switch>
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
