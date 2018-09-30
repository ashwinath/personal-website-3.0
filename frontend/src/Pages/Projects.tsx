import * as React from "react";
import axios from "axios";
import {
  Card,
  CardImg,
} from "reactstrap";
import ReactPlayer from 'react-player';
import Content from '../Components/Content';
import LandingCover from '../Components/LandingCover';
import "./Projects.css";

interface ProjectContent {
  isVideo: boolean;
  mediaUrl: string;
  text: string[];
  title: string;
}

interface ProjectsResponse {
  projects: ProjectContent[];
}

interface ProjectsState {
  windowWidth: number;
  windowHeight: number;
  projects?: ProjectContent[];
}

class Projects extends React.Component<{}, ProjectsState> {
  constructor(props: {}) {
    super(props);
    this.resizeListener = this.resizeListener.bind(this);
    this.calculateDimensions = this.calculateDimensions.bind(this);

    this.state = {
      ...this.calculateDimensions()
    };
  }

  public render() {
    return (
      <div>
        <LandingCover message="Projects"
          imageUrl="/Images/BackDropFront.jpg" />
        {
          this.state.projects ? 
            this.state.projects.map((project, index) => {
              const backgroundIndex = index % 2 === 0 ? "two": "one";
              return (
                <Content colourScheme={backgroundIndex} key={project.title}>
                  <ProjectContent {...project} {...this.state}/>
                </Content>
              );
            }) : null
        }
      </div>
    );
  }

  public async componentDidMount() {
    const response = await axios.get<ProjectsResponse>("/api/projects");
    this.setState(() => {
      return {
        ...this.state,
        projects: response.data.projects,
      }
    })

    window.addEventListener("resize-projects", this.resizeListener)
  }

  private resizeListener() {
    this.setState(() => this.calculateDimensions())
  }

  private calculateDimensions() {
    let windowWidth: number;
    if (window.innerWidth <= 576) {
      windowWidth = Math.min(window.innerWidth, 540);
    } else if (window.innerWidth <= 768) {
      windowWidth = Math.min(window.innerWidth, 720);
    } else if (window.innerWidth <= 992) {
      windowWidth = Math.min(window.innerWidth, 920);
    } else {
      windowWidth = Math.min(window.innerWidth, 1140);
    }
    windowWidth *= 0.95;

    const windowHeight = windowWidth * 0.625;

    return {
      ...this.state,
      windowWidth,
      windowHeight,
    }
  }
}

interface ProjectContentProps {
  isVideo: boolean;
  mediaUrl: string;
  text: string[];
  title: string;
  windowHeight: number;
  windowWidth: number;
}

function ProjectContent(props: ProjectContentProps) {
  const {
    mediaUrl,
    windowHeight,
    windowWidth,
  } = props;
  return (
    <div>
      <div className="text-center">
        {props.isVideo ?
          <VideoComponent
            mediaUrl={mediaUrl}
            windowHeight={windowHeight}
            windowWidth={windowWidth}
          />
          : <ImageComponent 
            mediaUrl={mediaUrl}
            windowHeight={windowHeight}
            windowWidth={windowWidth}
          />
        }
      </div>
      <div className="project-details">
        <h2>{props.title}</h2>
        {
          props.text.map((line) => (
            <p>
              {line}
            </p>
          ))
        }
      </div>
    </div>
  );
}

interface MediaComponent {
  mediaUrl: string;
  windowHeight: number;
  windowWidth: number;
}

function ImageComponent(props: MediaComponent) {
  return (
    <Card>
      <CardImg top={true} width={"100%"} src={props.mediaUrl}/>
    </Card>
  );
}

function VideoComponent(props: MediaComponent) {
  return (
    <div>
      <ReactPlayer
        url={props.mediaUrl}
        width={props.windowWidth}
        height={props.windowHeight}
        playing={true} loop={true} muted={true}/>
    </div>
  );
}

export default Projects;
