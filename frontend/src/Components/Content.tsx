import * as React from 'react';
import { Container } from 'reactstrap';
import './Content.css';

interface ContentProps {
  colourScheme: string; // one or two
  children: any;
}

class Content extends React.Component<ContentProps, {}> {
  public render() {
    const { colourScheme, children } = this.props;
    return (
      <div className={`content-background-${colourScheme}`}>
        <Container>
          <p className="content-items">
            { children }
          </p>
        </Container>
      </div>
    );
  }
}

export default Content;
