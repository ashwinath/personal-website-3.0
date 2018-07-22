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
        <Navbar className="nav-bar-style" expand="xs">
          <Container>
            <NavbarBrand className="nav-item-text mr-auto" href="/">
              Ashwin
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2"/>
            <Collapse isOpen={this.state.isOpen} navbar={true}>
              <Nav className="ml-auto" navbar={true}>
                <NavItem>
                  <NavLink className="nav-item-text" href="/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-item-text" href="/resume">Resume</NavLink>
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
