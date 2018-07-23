import * as React from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { Link } from 'react-router-dom';
import './NavigationBar.css';

interface NavState {
  isOpen: boolean;
}

class NavigationBar extends React.Component<{}, NavState> {
  public constructor(props: {}) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  public render() {
    return (
      <div>
        <Navbar className="nav-bar-style" expand="md">
          <Container>
            <NavbarBrand className="nav-item-text mr-auto" href="/">
              Ashwin
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2"/>
            <Collapse isOpen={this.state.isOpen} navbar={true}>
              <Nav className="ml-auto" navbar={true}>
                <NavItem>
                  <NavLink>
                    <Link to="/"><div className="nav-item-text">About</div></Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="/workflow"><div className="nav-item-text">Workflow</div></Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-item-text" href="https://drive.google.com/file/d/0BxZd-ZB1I2mSRkxQLVdseER3XzQ/view">Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-item-text" href="https://github.com/ashwinath/personal-website-3.0">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

  private toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

}

export default NavigationBar;
