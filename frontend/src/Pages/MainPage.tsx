import * as React from 'react';
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

import './MainPage.css';

class MainPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <LandingCover message={"Hello there!"}
          imageUrl={"https://ashwinchat.com/static/media/LandingWallpaper.31864352.jpg"} />
        <Content colourScheme={"two"}>
          <About />
        </Content>
        <Content colourScheme={"one"}>
          <WorkExperience />
        </Content>
      </div>
    );
  }
}

interface CompanyDetailsProps {
  companyDetails: CompanyDetails;
}

interface CompanyDetails {
  title: string;
  subtitle: string;
  text: string;
  imageUrl: string;
}

const allCompanyDetails = [
  {
    title: "99.co",
    subtitle: "Software Engineer",
    text: "I develop and ship stuff.",
    imageUrl: "https://ashwinchat.com/static/media/ninety-nine.2a888e14.png",
  },
  {
    title: "99.co",
    subtitle: "Software Engineer",
    text: "I develop and ship stuff.",
    imageUrl: "https://ashwinchat.com/static/media/ninety-nine.2a888e14.png",
  },
  {
    title: "99.co",
    subtitle: "Software Engineer",
    text: "I develop and ship stuff.",
    imageUrl: "https://ashwinchat.com/static/media/ninety-nine.2a888e14.png",
  },
]

function WorkExperience() {
  return (
    <div>
      <Row>
        {
          allCompanyDetails.map((companyDetails) =>
            <CompanyCard key={`card-${companyDetails.title}`}
              companyDetails={companyDetails}/>
          )
        }
      </Row>
    </div>
  )
}

const CompanyCard: React.SFC<CompanyDetailsProps> = ({ companyDetails }) => {
  const {
    title,
    subtitle,
    text,
    imageUrl
  } = companyDetails;

  return (
    <Col md="4" xs="6">
      <Card>
        <CardImg top={true} width={"100%"} src={imageUrl}/>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

const About = () => {
  const aboutTitle = "Who am I?";
  const aboutText = `
  I am Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regnant of the Seven Kingdoms, Breaker of Chains and Mother of Dragons.
  `

  const imageUrl = "https://vignette.wikia.nocookie.net/disney/images/f/f9/Emilia_Clarke.jpg/revision/latest?cb=20161119001548";
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
            <CardImg src={imageUrl}/>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MainPage;
