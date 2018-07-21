import * as React from 'react';
import NavigationBar from './Components/NavigationBar';
import LandingCover from './Components/LandingCover';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NavigationBar />
        <LandingCover />
        <Footer />
      </div>
    );
  }
}

export default App;
