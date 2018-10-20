import * as React from 'react';

interface LandingProps {
  message: string;
  imageUrl: string;
}

class LandingCover extends React.Component<LandingProps, {}> {
  public render() {
    const { message, imageUrl } = this.props;

    const isMobile = window.innerWidth <= 768;

    const pictureStyle = {
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: `url(${imageUrl})`,
      opacity: 0.86,
      paddingTop: isMobile ? "80px": "120px",
      paddingBottom: isMobile ? "80px": "120px",
    };

    const headerStyle = {
      fontWeight: 700,
      color: "white",
      textShadow: "5px 5px 5px #000",
    };

    return (
      <div style={pictureStyle}>
        <h1 style={headerStyle}
          className="display-3 text-center">
          { message }
        </h1>
      </div>
    );
  }
}

export default LandingCover;
