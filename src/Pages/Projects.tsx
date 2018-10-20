import * as React from "react";
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import ContentHeader from "../Components/ContentHeader";

import "./Projects.css";

class Projects extends React.Component<{}, {}> {
  private CONTENT_HEADER_PROPS = {
    iconClass: "fa fa-pencil",
    title: "Projects",
    subtitle: "What I spend a lot of my free time on."
  };

  private ALL_PROJECT_CONTENT = [
    {
      imageUrl: "/Images/PoeSearch.gif",
      title: "Path Of Exile Search",
      subtitle: "Learning ElasticSearch",
      text: [
        `This application allows searching for items in Path of Exile. Currently in this league, there are over 3000 searchable items. With this application, you can search based on the item name which provides autocomplete, or a fuzzy search on the item attributes.`,
        `For instance, searching "Tary" autocompletes to "Taryn's Shiver". "Today Im wise" correctly searches "Rumi's Concoction" because of the flavour text "Today I am wise, so I am changing myself."`
      ],
    },
    {
      imageUrl: "/Images/Website.png",
      title: "Personal Website",
      subtitle: "I believe in an all rounded developer.",
      text: [
        `Not having done website design and front end tech professionally, I do make it a point to try to balance my skills in programming in the web world. This site is made using React for the frontend and Restify for the backend. All written in Typescript.`,
        `This project is intended to market myself, as well as to showcase what I do during my free time, as well as where I have worked. This is the third iteration of my website since I'm constantly learning about stuff in the frontend world.`,
      ],
    },
  ];

  public render() {
    return (
      <div>
        <NavigationBar />
        <div className="projects-page-content">
          <ContentHeader {...this.CONTENT_HEADER_PROPS}/>
          {
            this.ALL_PROJECT_CONTENT.map((project, index) => {
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

interface ProjectProps {
  flipped: boolean;
  imageUrl: string;
  title: string;
  subtitle: string;
  text: string[];
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
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        {
          text.map((item) => (<p>{item}</p>))
        }
      </div>
    </section>
  )
}

export default Projects;
