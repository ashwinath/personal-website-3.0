import * as React from 'react';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';

import './MainPage.css';

class MainPage extends React.Component<{}, {}> {
  private LINK_TEXTS = [
    {
      iconClass: "fa fa-book",
      title: "Blog",
      subtitle: "Read about what I've learnt so far.",
      callToActionText: "Read on my blog.",
      link: "https://blog.ashwinchat.com",
    },
    {
      iconClass: "fa fa-code",
      title: "Projects",
      subtitle: "Software projects I do on the side.",
      callToActionText: "Check out the list.",
      link: "/projects",
    },
    {
      iconClass: "fa fa-pencil",
      title: "Resume",
      subtitle: "A brief summary of what I've done.",
      callToActionText: "Get a copy of my resume.",
      link: "https://drive.google.com/file/d/1494cpkalxwNZVaMszWZmW5ZeoVtvjNvb/view?usp=sharing",
    },
  ];

  public render() {
    return (
      <div className="main-page-wrapper">
        <NavigationBar />
        <div className="landing-page">
          <div className="main-page-contents-wrapper">
            <div>
              <LandingAbout/>
            </div>

            <div>
              { this.LINK_TEXTS.map((text) => <LinkBox key={text.title} {...text}/>)}
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
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="link-box-wrapper"
    >
      <div className="link-box-icon-section">
        <p><i className={props.iconClass}/></p>
      </div>
      <div className="link-box-text-section">
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        <p className="call-to-action">{props.callToActionText}</p>
      </div>
    </a>
  );
}

interface LinkBoxProps {
  iconClass: string;
  title: string;
  subtitle: string;
  callToActionText: string;
  link: string;
}

export default MainPage;

