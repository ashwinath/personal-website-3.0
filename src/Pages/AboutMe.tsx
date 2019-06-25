import * as React from 'react';
import ContentHeader from "../Components/ContentHeader";
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import {
  contentHeaderProps,
  aboutMeProps,
  workExperienceProps,
} from '../Copy/AboutMeCopy';
import { AboutComponentProps } from "../Interfaces";

import "./AboutMe.css";

class AboutMe extends React.Component {
  public render() {
    return (
      <div className="work-experience-page-wrapper">
        <NavigationBar />
        <ContentHeader {...contentHeaderProps}/>
        <AboutComponent flipped={true} {...aboutMeProps}/>
        {
          workExperienceProps.map((workExp, index) => {
            return (

              <AboutComponent
                key={workExp.title}
                flipped={index % 2 === 1}
                {...workExp}
              />
            );
          })
        }
        <DownloadResume />
        <Footer />
      </div>
    );
  }
}

function DownloadResume() {
  return (
    <section className="download-resume-section">
      <a
        href="https://drive.google.com/open?id=12uIZk0l24Pp0bvPNO3ViQXckzsxpI8bg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download My Resume!
      </a>
    </section>
  );
}

function AboutComponent(props: AboutComponentProps) {
  const {
    imageUrl,
    title,
    subtitle,
    text,
    flipped,
  } = props;

  return (
    <section className={`about-component ${flipped ? "about-component-flipped": ""}`}>
      <div style={flipped ? {order: 2} : {order: 1}} className="about-picture">
        <img
          src={imageUrl}
          alt={title}
        />
      </div>
      <div style={flipped ? {order: 1} : {order: 2}} className="about-writeup">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        {
          text.map((item) => (<p>{item}</p>))
        }
      </div>
    </section>
  )
}

export default AboutMe;
