export const contentHeaderProps = {
  iconClass: "fa fa-pencil",
  title: "Projects",
  subtitle: "What I spend a lot of my free time on."
};

export const allProjectsContent = [
  {
    imageUrl: "/Images/Financials.png",
    title: "Financials",
    subtitle: "Knowing where your money is going",
    text: [
      `Financials is a way to track your financial independence in Singapore’s context. Inpsired by ”Your Money or Your Life” by Vicki Robin. It uses a Grafana frontend to display your current assets, investments and expenditure.`,
    ],
  },
  {
    imageUrl: "/Images/PoeSearch.gif",
    title: "Path Of Exile Search",
    subtitle: "Learning Elasticsearch",
    text: [
      `This application allows searching for items in Path of Exile. Currently in this league, there are over 3000 searchable items. With this application, you can search based on the item name which provides autocomplete, or a fuzzy search on the item attributes.`,
      `For instance, searching "Tary" autocompletes to "Taryn's Shiver". "Today Im wise" correctly searches "Rumi's Concoction" because of the flavour text "Today I am wise, so I am changing myself."`
    ],
  },
  {
    imageUrl: "/Images/Website.png",
    title: "Personal Website",
    subtitle: "I believe in an all rounded developer.",
    text: [
      `Not having done website design and front end tech professionally, I do make it a point to try to balance my skills in programming in the web world. This site is made using React; all written in Typescript.`,
      `This project is intended to market myself, as well as to showcase what I do during my free time, as well as where I have worked at. This is the third iteration of my website since I'm constantly learning about stuff in the frontend world.`,
    ],
  },
];
