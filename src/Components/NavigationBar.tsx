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
            <NavbarBrand className="nav-item-brand nav-item-text mr-auto">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="nav-item-text">Ashwin Chat</div>
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2"/>
            <Collapse isOpen={this.state.isOpen} navbar={true}>
              <Nav className="ml-auto" navbar={true}>
                <NavItem>
                  <NavLink>
                    <Link to="/about-me" style={{ textDecoration: 'none' }}>
                      <div className="nav-item-text">About Me</div>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="/workflow" style={{ textDecoration: 'none' }}>
                      <div className="nav-item-text">Workflow</div>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                      <div className="nav-item-text">Projects</div>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-item-text"
                    href="https://blog.ashwinchat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-item-text"
                    href="https://drive.google.com/file/d/1XZTmKnj_HMPa0V5KF0lyZgmpO3TBzpRu/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-item-text"
                    href="https://github.com/ashwinath/personal-website-3.0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </NavLink>
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
