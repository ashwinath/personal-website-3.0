import * as React from 'react';
import ReactPlayer from 'react-player';
import "./Workflow.css"

class Workflow extends React.Component<{}, WorkflowState> {
  constructor(props: WorkflowState) {
    super(props);
    this.state = this.calculateDimensions();
    this.resizeListener = this.resizeListener.bind(this);
  }

  public componentDidMount() {
    window.addEventListener("resize", this.resizeListener)
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.resizeListener)
  }

  public render() {
    return (
      <div className={`workflow-background d-flex justify-content-center`}>
        <ReactPlayer
          url="/workflowvideo"
          width ={this.state.windowWidth}
          height={this.state.windowHeight}
          playing={true} loop={true} muted={true}/>
      </div>
    );
  }

  private resizeListener() {
    this.setState(() => this.calculateDimensions())
  }

  private calculateDimensions() {
    const windowWidth = 0.77 * window.innerWidth;
    const windowHeight = windowWidth * 0.625;

    return {
      windowWidth,
      windowHeight,
    }
  }
}

interface WorkflowState {
  windowWidth: number;
  windowHeight: number;
}

export default Workflow;
