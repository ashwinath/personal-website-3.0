import * as React from 'react';
import MainPage from './Pages/MainPage';
import Projects from './Pages/Projects';
import AboutMe from './Pages/AboutMe';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/projects" component={Projects}/>
            <Route path="/about-me" component={AboutMe}/>
            <Route component={MainPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
