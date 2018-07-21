import * as React from 'react';
import NavigationBar from './Components/NavigationBar';
import MainPage from './Pages/MainPage';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NavigationBar />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
