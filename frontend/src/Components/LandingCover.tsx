import * as React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import LandingCoverPicture from '../Images/LandingCoverPicture.jpg';

const pictureStyle = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${LandingCoverPicture})`,
  opacity: 0.86,
};

const headerStyle = {
  fontWeight: 700,
  color: "white",
  textShadow: "5px 5px 5px #000",
};

const containerStyle = {
  paddingTop: "60px",
  paddingBottom: "60px",
}

class LandingCover extends React.Component<{}, {}> {
  public render() {
    return (
      <Jumbotron style={pictureStyle} className="landing-cover-bg">
        <Container style={containerStyle}>
          <h1 style={headerStyle}
            className="display-3 text-center">
            Hello there!
          </h1>
        </Container>
      </Jumbotron>
    );
  }
}

export default LandingCover;
