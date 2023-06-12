interface linksType {
  repo: string;
  url: string;
}

export interface projectsType {
  id: number;
  name: string;
  image: string;
  description: string;
  links: linksType;
}

export const projects: projectsType[] = [
  {
    id: 1,
    name: "Crypie",
    image: "/projects/Crypie.png",
    description:
      "Crypie was born from the idea of providing users with a web application that differs from competitors thanks to its unique design. The design was designed totally from scratch using the 'Adobe xd' tool, with mobile first in mind, following the UI/UX desing process",
    links: {
      repo: " https://github.com/SalvoBisconti/final-project-b-0423",
      url: "https://final-project-b-0423.vercel.app/",
    },
  },
  {
    id: 2,
    name: "My Cocktails",
    image: "/projects/myCocktails.png",
    description:
      "MyCocktails is a website of cocktails providing an API shows all the existing alcoholic and non-alcoholic cocktails",
    links: {
      repo: "https://github.com/SalvoBisconti/Cocktails--website",
      url: "https://cocktails-website.vercel.app/",
    },
  },
  {
    id: 3,
    name: "Calendar",
    image: "/projects/calendar.png",
    description: "A simple calendar app",
    links: {
      repo: "https://github.com/SalvoBisconti/calendar",
      url: "https://calendar-iota-five.vercel.app/",
    },
  },
  {
    id: 4,
    name: "ITRAVEL",
    image: "/projects/Itravel.png",
    description:
      "A web application for an tour operetor where there are cities and activities. The API provider decided to delete it recently, so I decided to use mocks to keep the app running",
    links: {
      repo: "https://github.com/SalvoBisconti/ITravel",
      url: "https://itravel-red.vercel.app/",
    },
  },
  {
    id: 5,
    name: "MyEcommerce",
    image: "/projects/myEcommerce.png",
    description: "An ecommerce project realized with React.js",
    links: {
      repo: "https://github.com/SalvoBisconti/Ecommerce",
      url: "https://ecommerce-iota-lovat.vercel.app/",
    },
  },

  {
    id: 6,
    name: "TodoList",
    image: "/projects/todoList.png",
    description: "An todo list app where is possible add/remove a todo ",
    links: {
      repo: "https://github.com/SalvoBisconti/TodoList",
      url: "https://todo-list-ashen-theta.vercel.app/",
    },
  },
  {
    id: 7,
    name: "Twitter Clone",
    image: "/projects/Twitter_clone.png",
    description: "The clone of one of most used social",
    links: {
      repo: "https://github.com/SalvoBisconti/Twitter_clone",
      url: "https://twitter-clone-cyan-two.vercel.app/",
    },
  },
];
