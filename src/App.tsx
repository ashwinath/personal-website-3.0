import * as React from 'react';
import MainPage from './Pages/MainPage';
import Workflow from './Pages/Workflow';
import Projects from './Pages/Projects';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/workflow" component={Workflow}/>
            <Route path="/projects" component={Projects}/>
            <Route component={MainPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
