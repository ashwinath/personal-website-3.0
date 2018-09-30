import * as React from 'react';
import NavigationBar from './Components/NavigationBar';
import MainPage from './Pages/MainPage';
import Workflow from './Pages/Workflow';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route path="/workflow" component={Workflow}/>
            <Route path="/projects" component={Projects}/>
            <Route component={MainPage}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
