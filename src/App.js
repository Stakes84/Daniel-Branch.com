import React from "react";
import "./App.css";
import NavMenu from './components/navMenu/NavMenu'
import Home from './components/home/Home'
import Software from './components/software/Software'
import Music from './components/music/Music'
import Design from './components/design/Design'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavMenu />
      <div className="Content">
        <BrowserRouter>
          <Switch>
            <Route
              path="/home"
              component={Home}
            />
            <Route
              path="/software"
              component={Software}
            />
            <Route
              path="/music"
              component={Music}
            />
            <Route
              path="/design"
              component={Design}
            />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
