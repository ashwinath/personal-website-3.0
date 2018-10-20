import * as React from 'react';
import axios from 'axios';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody
} from 'reactstrap';
import LandingCover from '../Components/LandingCover';
import Content from '../Components/Content';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';

import './MainPage.css';

class MainPage extends React.Component<{}, MainPageState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      loaded: false,
      error: false,
      response: undefined,
    };
  }

  public async componentDidMount() {
    const response = await axios.get<FrontPageCopy>("/api/frontpage");

    if (response.status !== 200) {
      this.setState(() => {
        return {
          loaded: false,
          error: true,
          response: undefined
        };
      });
      return;
    }

    this.setState(() => {
      return {
        loaded: true,
        error: false,
        response: response.data,
      };
    });
  }

  public render() {
    if (this.state.loaded && this.state.response) {
      const { landing, about, workExperience } = this.state.response
      return (
        <div>
          <NavigationBar />
          <LandingCover message={landing.title}
            imageUrl={landing.pictureUrl} />
          <Content colourScheme={"two"}>
            <AboutComponent about={about}/>
          </Content>
          <Content colourScheme={"one"}>
            <WorkExperience workExperience={workExperience}/>
          </Content>
          <Footer />
        </div>
      );
    } else {
      return (
        <div/>
      );
    }
  }
}

function WorkExperience(props: WorkExperienceProps) {
  const { workExperience } = props;
  return (
    <div>
      <Row>
        {
          workExperience.items.map((companyDetails) =>
            <CompanyCard key={`card-${companyDetails.title}`}
              companyDetails={companyDetails}/>
          )
        }
      </Row>
    </div>
  )
}


function CompanyCard(props: CompanyCardProps) {
  const {
    title,
    subtitle,
    text,
    pictureUrl
  } = props.companyDetails;

  return (
    <Col className="work-exp-card" md="4" xs="12">
      <Card>
        <CardImg top={true} width={"100%"} src={pictureUrl}/>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

const AboutComponent = (props: AboutProps) => {
  const { about } = props;
  const aboutTitle = about.title;
  const aboutText = about.text;
  const imageUrl = about.pictureUrl;

  return (
    <div>
      <Row className="d-flex align-items-center">
        <Col md="7">
          <h1 className="about-title">{aboutTitle}</h1>
          <p>{aboutText}</p>
        </Col>
        <Col md="2"/>
        <Col md="3">
          <Card>
            <CardImg height="100%" src={imageUrl}/>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MainPage;

interface MainPageState {
  loaded: boolean;
  error: boolean;
  response?: FrontPageCopy;
}

interface FrontPageCopy {
  landing: Landing;
  about: About;
  workExperience: WorkExperience;
}

interface Landing {
  title: string;
  pictureUrl: string;
}

interface About {
  pictureUrl: string;
  title: string;
  text: string;
}

interface WorkExperience {
  items: CompanyDetails[];
}

interface CompanyDetails {
  title: string;
  subtitle: string;
  text: string;
  pictureUrl: string;
}

interface WorkExperienceProps {
  workExperience: WorkExperience;
}

interface CompanyCardProps {
  companyDetails: CompanyDetails;
}

interface AboutProps {
  about: About;
}

