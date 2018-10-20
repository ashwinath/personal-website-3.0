import * as React from 'react';
import { Container } from "reactstrap"
import './Footer.css';

class Footer extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="footer-page">
        <Container>
          <div className="text-center">
            <a href="https://www.facebook.com/ashwinath">
              <i className="social-icon-footer fa fa-facebook fa-2x fa-fw"/>
            </a>
            <a href="https://github.com/ashwinath/">
              <i className="social-icon-footer fa fa-github fa-2x fa-fw"/>
            </a>
            <a href="https://www.linkedin.com/in/ashwin-chatterji-87702b50/">
              <i className="social-icon-footer fa fa-linkedin fa-2x fa-fw"/>
            </a>
          </div>
          <p className="text-center copyright-footer">
            Copyright © 2018, Ashwin Nath Chatterji
          </p>
        </Container>
      </div>
    );
  }
}

export default Footer;
