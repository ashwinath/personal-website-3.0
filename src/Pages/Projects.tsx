import * as React from "react";
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import ContentHeader from "../Components/ContentHeader";
import { contentHeaderProps, allProjectsContent } from '../Copy/ProjectsCopy';
import { ProjectProps } from '../Interfaces';

import "./Projects.css";

class Projects extends React.Component<{}, {}> {

  public render() {
    return (
      <div>
        <NavigationBar />
        <div className="projects-page-content">
          <ContentHeader {...contentHeaderProps}/>
          {
            allProjectsContent.map((project, index) => {
              return (
                <Project
                  key={project.title}
                  {...project}
                  flipped={index % 2 === 0}
                />
              );
            })
          }
        </div>
        <Footer />
      </div>
    );
  }
}

function Project(props: ProjectProps) {
  const {
    flipped,
    imageUrl,
    title,
    subtitle,
    text,
  } = props;

  return (
    <section className={`project-component ${flipped ? "project-component-flipped" : ""}`}>
      <div style={flipped ? {order: 2} : {order: 1}} className="project-picture">
        <img
          src={imageUrl}
          alt={title}
        />
      </div>
      <div style={flipped ? {order: 1} : {order: 2}} className="project-writeup">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        {
          text.map((item) => (<p>{item}</p>))
        }
      </div>
    </section>
  )
}

export default Projects;
