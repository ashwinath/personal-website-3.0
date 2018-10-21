import * as React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { LinkerProps, LinkBoxProps } from '../Interfaces';
import { linkTexts } from '../Copy/MainPageCopy';

import './MainPage.css';

class MainPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="main-page-wrapper">
        <NavigationBar />
        <div className="landing-page">
          <div className="main-page-contents-wrapper">
            <div>
              <LandingAbout/>
            </div>

            <div className="link-text-wrapper">
              { linkTexts.map((text) => <LinkBox key={text.title} {...text}/>)}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function LandingAbout() {
  return (
    <div className="landing-about-section">
      <h1>Hello, I'm Ashwin.</h1>
      <p>I write software.</p>
    </div>
  );
}

function LinkBox(props: LinkBoxProps) {
  return (
    <Linker {...props}>
      <div className="link-box-icon-section">
        <p><i className={props.iconClass}/></p>
      </div>
      <div className="link-box-text-section">
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        <p className="call-to-action">{props.callToActionText}</p>
      </div>
    </Linker>
  );
}

function Linker(props: LinkerProps) {
  const { link, openInNewTab, children } = props;
  if (openInNewTab) {
    return (
      <a
        href={link}
        target={props.openInNewTab ? "_blank": ""}
        rel={props.openInNewTab ? "noopener noreferrer": ""}
        className="link-box-wrapper"
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link to={link} className="link-box-wrapper">
      {children}
    </Link>
  );
}

export default MainPage;
