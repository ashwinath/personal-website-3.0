import * as React from 'react';
import { Row, Col, Card, CardImg } from 'reactstrap';
import LandingCover from '../Components/LandingCover';
import Content from '../Components/Content';

import './MainPage.css';

class MainPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <LandingCover message={"Hello there!"}
          imageUrl={"https://ashwinchat.com/static/media/LandingWallpaper.31864352.jpg"}/>
        <Content colourScheme={"two"}>
          <About/>
        </Content>
      </div>
    );
  }
}

function About() {
  const aboutTitle = "Who am I?";
  const aboutText = `
  I am Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regnant of the Seven Kingdoms, Breaker of Chains and Mother of Dragons.
  `

  const imageUrl = "https://vignette.wikia.nocookie.net/disney/images/f/f9/Emilia_Clarke.jpg/revision/latest?cb=20161119001548";
  return (
    <div>
      <Row className="d-flex align-items-center">
        <Col md="7">
          <h1 className="about-title">{aboutTitle}</h1>
          <p className="about-text">{aboutText}</p>
        </Col>
        <Col md="2"/>
        <Col md="3">
          <Card>
            <CardImg src={imageUrl}/>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MainPage;
