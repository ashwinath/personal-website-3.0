import * as React from 'react';
import LandingCoverPicture from '../Images/LandingCoverPicture.jpg';

const pictureStyle = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${LandingCoverPicture})`,
  opacity: 0.86,
  paddingTop: "100px",
  paddingBottom: "100px",
};

const headerStyle = {
  fontWeight: 700,
  color: "white",
  textShadow: "5px 5px 5px #000",
};

class LandingCover extends React.Component<{}, {}> {
  public render() {
    return (
      <div style={pictureStyle}>
        <h1 style={headerStyle}
          className="display-3 text-center">
          Hello there!
        </h1>
      </div>
    );
  }
}

export default LandingCover;
