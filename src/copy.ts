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

interface Workflow {
  dotfilesLocation: string;
  text: string;
}

const workflowCopy: Workflow = {
  dotfilesLocation: "https://github.com/ashwinath/dotfiles",
  text: `Tmux + Neovim/Vim is awesome. This is probably the most productive workflow for me. I wrote an article on my Vim setup but that was when I did not use Tmux. I will probably write an article about my set up soon. This combination has been my daily driver since the start of 2018. I am using Alacritty since it's a GPU rendered terminal that performs insanely well for my needs.`
};

interface ProjectContent {
  isVideo: boolean;
  mediaUrl: string;
  text: string[];
  title: string;
}

interface Projects {
  projects: ProjectContent[];
}

const projectsCopy: Projects = {
  projects: [
    {
      isVideo: true,
      mediaUrl: "/PoeSearch.webm",
      title: "Path of Exile Search",
      text: [
        "This has been the most interesting side project I have written. It was mainly to explore Elasticsearch. I learnt a lot about string searches while writing this application.",
        "This application allows searching for items in Path of Exile. Currently in this league, there are over 3000 searchable items. With this application, you can search based on the item name which provides autocomplete, or a fuzzy search on the item attributes.",
        "For instance, searching \"Tary\" autocompletes to \"Taryn's Shiver\". \"Today Im wise\" correctly searches \"Rumi's Concoction\" because of the flavour text \"Today I am wise, so I am changing myself.\"",
      ]
    },
    {
      isVideo: false,
      mediaUrl: "/Images/Homescreen.png",
      title: "Personal Website",
      text: [
        "Not having done website design and front end tech professionally, I do make it a point to try to balance my skills in programming in the web world. This site is made using React for the frontend and Restify for the backend. All written in Typescript.",
        "This project is intended to market myself, as well as to showcase what I do during my free time, as well as where I have worked. This is the third iteration of my website since I'm constantly learning about stuff in the frontend world."
      ]
    },
  ]
};

export {
  frontPageCopy,
  workflowCopy,
  projectsCopy,
};
