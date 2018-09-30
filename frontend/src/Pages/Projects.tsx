import * as React from "react";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  CardImg,
} from "reactstrap";
import ReactPlayer from 'react-player';
import Content from '../Components/Content';
import LandingCover from '../Components/LandingCover';

interface ProjectContent {
  isVideo: boolean;
  mediaUrl: string;
  text: string;
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
    const windowWidth = 0.75 * window.innerWidth / 2;
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
  text: string;
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
    <Row>
      <Col md="6">
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
      </Col>
      <Col md="6">
        <h3>{props.title}</h3>
        <p>
          {props.text}
        </p>
      </Col>
    </Row>
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
