import React from 'react';
import NavBarFull from "./components/NavbarFull/NavbarFull";
import Homepage from './components/Homepage/Homepage'
import Bio from './components/Bio/Bio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import { HashRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
    

      <HashRouter basename="/">
      <NavBarFull />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/port">
            <Portfolio />
          </Route> 
      
          {/* <Route path="/bio" component={Bio} />
        
          <Route path="/resume" component={Resume} />
     
          <Route path="/contact" component={Contact} />
           */}
        </Switch>
        </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
