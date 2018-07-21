import * as React from 'react';
import NavigationBar from './Components/NavigationBar';
import LandingCover from './Components/LandingCover';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NavigationBar />
        <LandingCover />
      </div>
    );
  }
}

export default App;
