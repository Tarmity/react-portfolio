import React from 'react';
import NavBarFull from "./components/NavbarFull/NavbarFull";
import Homepage from './components/Homepage/Homepage'
import Bio from './components/Bio/Bio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBarFull />

      <Router basename='/react-portfolio'>
        <Switch>
          <Link to="/">
            <Homepage />
          </Link>

          <Link to="/port" >
            <Portfolio />
          </Link>

          <Link to="/bio">
            <Bio />
          </Link>

          <Link to="/resume">
            <Resume />
          </Link>

          <Link to="/contact">
            <Contact />
          </Link>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
