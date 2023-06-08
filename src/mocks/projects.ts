interface linksType {
  repo: string;
  url: string;
}

export interface projectsType {
  id: number;
  name: string;
  image: string;
  links: linksType;
}

export const projects: projectsType[] = [
  {
    id: 1,
    name: "Crypie",
    image: "/projects/Crypie.png",
    links: {
      repo: " https://github.com/SalvoBisconti/final-project-b-0423",
      url: "https://final-project-b-0423.vercel.app/",
    },
  },
  {
    id: 2,
    name: "My Cocktails",
    image: "/projects/myCocktails.png",
    links: {
      repo: "https://github.com/SalvoBisconti/Cocktails--website",
      url: "https://cocktails-website.vercel.app/",
    },
  },
  {
    id: 3,
    name: "Calendar",
    image: "/projects/calendar.png",
    links: {
      repo: "https://github.com/SalvoBisconti/calendar",
      url: "https://calendar-iota-five.vercel.app/",
    },
  },
  {
    id: 4,
    name: "ITRAVEL",
    image: "/projects/Itravel.png",
    links: {
      repo: "https://github.com/SalvoBisconti/ITravel",
      url: "https://itravel-red.vercel.app/",
    },
  },
  {
    id: 5,
    name: "MyEcommerce",
    image: "/projects/myEcommerce.png",
    links: {
      repo: "https://github.com/SalvoBisconti/Ecommerce",
      url: "https://ecommerce-iota-lovat.vercel.app/",
    },
  },

  {
    id: 6,
    name: "TodoList",
    image: "/projects/todoList.png",
    links: {
      repo: "https://github.com/SalvoBisconti/TodoList",
      url: "https://todo-list-ashen-theta.vercel.app/",
    },
  },
  {
    id: 7,
    name: "Twitter Clone",
    image: "/projects/Twitter_clone.png",
    links: {
      repo: "https://github.com/SalvoBisconti/Twitter_clone",
      url: "https://twitter-clone-cyan-two.vercel.app/",
    },
  },
];
