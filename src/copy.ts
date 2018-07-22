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
    pictureUrl: "https://ashwinchat.com/static/media/LandingWallpaper.31864352.jpg",
  },
  about: {
    pictureUrl: "https://vignette.wikia.nocookie.net/disney/images/f/f9/Emilia_Clarke.jpg/revision/latest?cb=20161119001548",
    title: "Who am I?",
    text: "I am Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regnant of the Seven Kingdoms, Breaker of Chains and Mother of Dragons."
  },
  workExperience: {
    items: [
      {
        title: "99.co",
        subtitle: "Software Engineer",
        text: "I develop and ship stuff",
        pictureUrl: "https://ashwinchat.com/static/media/ninety-nine.2a888e14.png",
      },
      {
        title: "99.co",
        subtitle: "Software Engineer",
        text: "I develop and ship stuff",
        pictureUrl: "https://ashwinchat.com/static/media/ninety-nine.2a888e14.png",
      },
      {
        title: "99.co",
        subtitle: "Software Engineer",
        text: "I develop and ship stuff",
        pictureUrl: "https://ashwinchat.com/static/media/ninety-nine.2a888e14.png",
      },
    ],
  },
};

export { frontPageCopy };
