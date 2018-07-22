import * as React from 'react';
import Content from "./Content";
import * as Spinner from "react-spinkit";
import './LoadingComponent.css'

interface LoadingProps {
  colourScheme: string; // one or two
}

class LoadingComponent extends React.Component<LoadingProps, {}> {
  public render() {
    const { colourScheme } = this.props;
    return (
      <Content colourScheme={colourScheme}>
        <div className="d-flex justify-content-center spinner-div">
          <Spinner name="pacman" fadeIn="none"/>
        </div>
      </Content>
    );
  }
}

export default LoadingComponent;
