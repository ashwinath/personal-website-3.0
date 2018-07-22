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

const frontPageCopy: FrontPageCopy = {
  landing: {
    title: "Hello there!",
    pictureUrl: "/Images/BackDropFront.jpg",
  },
  about: {
    pictureUrl: "/Images/ProfilePicture.jpg",
    title: "Who am I?",
    text: "Hi there, I am Ashwin, software engineering autodidact. I graduated with a marketing degree but have been working professionally as a software engineer. Currently, I work at 99.co as a software engineer."
  },
  workExperience: {
    items: [
      {
        title: "99.co",
        subtitle: "Software Engineer",
        text: "Primarily a backend engineer, but have been involved in a bit of frontend and operations. I am involved in developing a product here.",
        pictureUrl: "/Images/NinetyNine.png",
      },
      {
        title: "HPE/DXC Technology",
        subtitle: "Software Engineer",
        text: "First job as a software engineer taking on a piece of mission critical softare in the enterprise world. I learnt most of the basics of programming here",
        pictureUrl: "/Images/HPEDXC.png",
      },
      {
        title: "Epikk Co",
        subtitle: "Content Marketer",
        text: "Interned as a content marketer. Wrote articles for the company blog, talked to the maker community and wrote articles about them.",
        pictureUrl: "/Images/Epikk.png",
      },
    ],
  },
};

export { frontPageCopy };
