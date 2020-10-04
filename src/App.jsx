import React from 'react';
import NavBarFull from "./components/NavbarFull/NavbarFull";
import Homepage from './components/Homepage/Homepage'
import Bio from './components/Bio/Bio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


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
        <Switch>
          <Route exact path="/bio" component={Bio} />
        </Switch>
        <Switch>
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Switch>
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
