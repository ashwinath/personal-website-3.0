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

import './LandingCover.css';

interface NavState {
  isOpen: boolean;
}

export default class NavigationBar extends React.Component<{}, NavState> {
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
            <NavbarBrand className="nav-item-text" href="/">
              Ashwin
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar={true}>
              <Nav className="ml-auto" navbar={true}>
                <NavItem>
                  <NavLink className="nav-item-text" href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-item-text" href="https://github.com/ashwinath">GitHub</NavLink>
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
