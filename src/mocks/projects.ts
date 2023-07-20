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
    name: "Invertir",
    image: "/projects/invertir.png",
    description:
      "Invertir è un sito vetrina realizzato per un cliente che si occupa di consulenza finanziaria. Il template è disponibile per eventuali repliche. ",
    links: {
      repo: "https://github.com/SalvoBisconti/consulting_template",
      url: "https://master.d2og3nvbkbhmis.amplifyapp.com/",
    },
  },
  {
    id: 2,
    name: "Crypie",
    image: "/projects/Crypie.png",
    description:
      "Crypie nasce dall'idea di fornire agli utenti un'applicazione web che differisce dalla concorrenza grazie al suo design unico. Il design è stato progettato totalmente da zero utilizzando lo strumento 'Adobe xd', con la logica del mobile-first. ",
    links: {
      repo: "https://github.com/SalvoBisconti/final-project-b-0423",
      url: "https://final-project-b-0423.vercel.app/",
    },
  },
  {
    id: 3,
    name: "Portfolio",
    image: "/projects/portfolio.png",
    description: "Ecco il mio primissimo portfolio.",
    links: {
      repo: "https://github.com/SalvoBisconti/portfolio",
      url: "https://portfolio-m19nx3rtp-salvobisconti.vercel.app/",
    },
  },
  {
    id: 4,
    name: "My Cocktails",
    image: "/projects/myCocktails.png",
    description:
      "MyCocktails è un sito web che mostra una grandissima varietà di cocktails con le relative ricette ed ingredienti.",
    links: {
      repo: "https://github.com/SalvoBisconti/Cocktails--website",
      url: "https://cocktails-website.vercel.app/",
    },
  },
  {
    id: 5,
    name: "Calendar",
    image: "/projects/calendar.png",
    description: 'Un "semplice" calendario.',
    links: {
      repo: "https://github.com/SalvoBisconti/calendar",
      url: "https://calendar-iota-five.vercel.app/",
    },
  },
  {
    id: 6,
    name: "ITRAVEL",
    image: "/projects/Itravel.png",
    description:
      "Un sito web che vuole simulare un tour operator. L'API è stata di recente eliminato, ho così deciso di utilizzare un mock di dati per mantenere in vita l'applicazione.",
    links: {
      repo: "https://github.com/SalvoBisconti/ITravel",
      url: "https://itravel-red.vercel.app/",
    },
  },
  {
    id: 7,
    name: "MyEcommerce",
    image: "/projects/myEcommerce.png",
    description:
      "Simulazione di un ecommerce realizzato con l'utilizzo di React.",
    links: {
      repo: "https://github.com/SalvoBisconti/Ecommerce",
      url: "https://ecommerce-iota-lovat.vercel.app/",
    },
  },

  {
    id: 8,
    name: "TodoList",
    image: "/projects/todoList.png",
    description:
      "Un'app delle cose da fare in cui è possibile aggiungere e rimuovere un'azione. ",
    links: {
      repo: "https://github.com/SalvoBisconti/TodoList",
      url: "https://todo-list-ashen-theta.vercel.app/",
    },
  },
  {
    id: 9,
    name: "Twitter Clone",
    image: "/projects/Twitter_clone.png",
    description: "Clone di uno dei più famosi social networks utilizzati.",
    links: {
      repo: "https://github.com/SalvoBisconti/Twitter_clone",
      url: "https://twitter-clone-cyan-two.vercel.app/",
    },
  },
];
