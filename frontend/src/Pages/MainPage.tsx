import * as React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import { Container } from "reactstrap";

import './MainPage.css';

class MainPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="main-page-wrapper">
        <NavigationBar />
        <div className="landing-page">
          <Container>
            <div className="main-page-contents-wrapper">
              <div>
                <LandingAbout/>
              </div>

              <div>
                <LinkBox/>
                <LinkBox/>
                <LinkBox/>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

function LandingAbout() {
  return (
    <div className="landing-about-section">
      <h1>Hello, I'm Ashwin</h1>
      <p>I write software.</p>
    </div>
  );
}

function LinkBox() {
  return (
    <div>
      <h1>LinkBox</h1>
    </div>
  );
}

export default MainPage;
