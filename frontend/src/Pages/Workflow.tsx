import axios from "axios";
import * as React from 'react';
import Content from "../Components/Content";
import ReactPlayer from 'react-player';
import "./Workflow.css"

class Workflow extends React.Component<{}, WorkflowState> {
  constructor(props: WorkflowState) {
    super(props);
    this.resizeListener = this.resizeListener.bind(this);
    this.calculateDimensions = this.calculateDimensions.bind(this);

    this.state = {
      ...this.calculateDimensions(),
      loaded: false,
      error: false,
      response: undefined,
    };
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.resizeListener)
  }

  public async componentDidMount() {
    window.addEventListener("resize", this.resizeListener)
    const response = await axios.get<WorkflowResponse>("/api/workflow")
    if (response.status !== 200) {
      this.setState(() => {
        return {
          ...this.state,
          loaded: false,
          error: true,
          response: undefined
        }
      });
      return;
    }
    this.setState(() => {
      return {
        ...this.state,
        loaded: true,
        error: false,
        response: response.data
      }
    });
  }

  public render() {
    return (
      <div>
        <Player width={this.state.windowWidth} height={this.state.windowHeight}/>
        <WriteUp loaded={this.state.loaded} response={this.state.response}/>
      </div>
    );
  }

  private resizeListener() {
    this.setState(() => this.calculateDimensions())
  }

  private calculateDimensions() {
    const windowWidth = 0.75 * window.innerWidth;
    const windowHeight = windowWidth * 0.625;

    return {
      ...this.state,
      windowWidth,
      windowHeight,
    }
  }
}

function Player(props: PlayerProps) {
  return (
    <div className={`workflow-background d-flex justify-content-center`}>
      <ReactPlayer
        url="/workflowvideo"
        width ={props.width}
        height={props.height}
        playing={true} loop={true} muted={true}/>
    </div>
  );
}

interface PlayerProps {
  width: number;
  height: number;
}

function WriteUp(props: WriteUpProps) {
  if (props.loaded && props.response) {
    const { response } = props;
    return (
      <Content colourScheme={"two"}>
        <h2>Dotfiles: <a href={response.dotfilesLocation}>here</a></h2>
        <h5>{response.text}</h5>
      </Content>
    );
  }
  return (
    <div/>
  )
}

interface WriteUpProps {
  loaded: boolean;
  response?: WorkflowResponse;
}

interface WorkflowState {
  windowWidth: number;
  windowHeight: number;
  loaded: boolean;
  error: boolean;
  response?: WorkflowResponse;
}

interface WorkflowResponse {
  dotfilesLocation: string;
  text: string;
}

export default Workflow;
