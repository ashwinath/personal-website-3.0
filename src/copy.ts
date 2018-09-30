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
  text: string;
  title: string;
}

interface Projects {
  projects: ProjectContent[];
}

const projectsCopy: Projects = {
  projects: [
    {
      isVideo: false,
      mediaUrl: "/Images/BackDropFront.jpg",
      title: "Lorem ipsums",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra venenatis mi at fringilla. Aenean in fermentum velit. Nunc mauris magna, ultrices sed tortor vitae, pellentesque sodales arcu. Pellentesque id fringilla ante. Curabitur lacinia porta erat, ut tincidunt lorem blandit ultricies. Vivamus eleifend, turpis a porta gravida, velit eros laoreet turpis, non bibendum metus turpis at sapien. Nulla eget nisl bibendum, accumsan magna eu, sagittis ipsum. Maecenas tempor elit molestie euismod accumsan. Ut gravida volutpat dolor. Sed pellentesque quis tortor eget tempor. ",
    },
    {
      isVideo: true,
      mediaUrl: "/workflow.webm",
      title: "Cat Ipsum",
      text:" Spread kitty litter all over house the fat cat sat on the mat bat away with paws. Stand with legs in litter box, but poop outside sit on human meow loudly just to annoy owners experiences short bursts of poo-phoria after going to the loo. Catch mouse and gave it as a present. Cats are fats i like to pets them they like to meow back kitty power. Dismember a mouse and then regurgitate parts of it on the family room floor leave fur on owners clothes wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again and asdflkjaertvlkjasntvkjn (sits on keyboard) i heard this rumor where the humans are our owners, pfft, what do they know?! demand to be let outside at once, and expect owner to wait for me as i think about it spread kitty litter all over house. Carefully drink from water glass and then spill it everywhere and proceed to lick the puddle rub face on owner, try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard my cat stared at me he was sipping his tea, too rub face on owner kitty poochy and attack dog, run away and pretend to be victim.",
    },
  ]
};

export {
  frontPageCopy,
  workflowCopy,
  projectsCopy,
};
