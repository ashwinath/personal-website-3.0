import * as React from 'react';
import {
  Collapse,
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
                  href="https://github.com/ashwinath/resume/releases/download/v0.4/ashwin.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-item-text"
                  href="https://www.linkedin.com/in/ashwin-chatterji/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-item-text"
                  href="https://github.com/ashwinath"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
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
