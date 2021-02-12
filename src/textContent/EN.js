import pxl1 from '../assets/pxl1.JPG'
import pxl2 from '../assets/pxl2.JPG'
import pxl3 from '../assets/pxl3.JPG'
import pxl4 from '../assets/pxl4.JPG'
import pxl5 from '../assets/pxl5.JPG'
import bigFive1 from '../assets/bigFive1.JPG'
import bigFive2 from '../assets/bigFive2.JPG'
import bigFive3 from '../assets/bigFive3.png'
import bigFiveHero from '../assets/bigFiveHero.png'
import pxlHero from '../assets/pxlHero.png'
import kanbanatorHero from '../assets/kanbanatorHero.png'
import kanban1 from '../assets/kanban1.JPG'
import kanban2 from '../assets/kanban2.JPG'
import kanban3 from '../assets/kanban3.JPG'

const textContent = {
   navigation: [
      ["Projects", "/projects"],
      ["Materials", "/materials"],
      ["Contact", "/#contact"],
      ["About Me", "/about"]
   ],
   hero: [
      "Hello, I'm Damian.",
      "Frontend Developer and UX enthusiast.",
      "I would like to present my works, snippets and technologies that I used."
   ],
   projects: {
      title: "Projekty",
      listOfProjects: [
         {
            nazwa: "Kanbanator",
            rodzaj: "dev",
            opis: "Projekt ułatwia zarządzanie projektami w metodyce Kanban. Umożliwia założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
            photo: kanbanatorHero,
            photos: [kanban1, kanban2, kanban3],
            link: '/projects/kanbanator',
            technologies: ['html','css', 'js','react', 'redux','material-ui' ,'node', 'mysql']
         },
         {
            nazwa: "PrintXL",
            rodzaj: "dev",
            opis: "Redesign strony internetowej na potrzeby drukarni wielkoformatowej. Głównym celem było przedstawienie bogatej oferty i łatwiejszy dostęp do specyfikacji technicznych.",
            photo: pxlHero,
            photos: [pxl1,pxl2, pxl3, pxl4, pxl5],
            link: '/projects/pxl',
            technologies: ['react', 'gatsby']
         },
         {
            nazwa: "BigFive",
            rodzaj: "dev",
            opis: "Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu największych lig świata.",
            photo: bigFiveHero,
            photos: [bigFive1, bigFive2, bigFive3],
            link: '/projects/big-five',
            technologies: ['react', 'gatsby']
         },
      ],
   },
   technologies: {
      header: "Narzędzia i technologie",
      subheaders: ["Development", "Design", "Pozostałe"],
      HTML: "HTML (ang. HyperText Markup Language) – hipertekstowy język znaczników, wykorzystywany do tworzenia dokumentów hipertekstowych.",
      CSS: "Kaskadowe arkusze stylów (ang. Cascading Style Sheets, w skrócie CSS) – język służący do opisu formy prezentacji (wyświetlania) stron WWW. CSS został opracowany przez organizację W3C w 1996 r. jako potomek języka DSSSL przeznaczony do używania w połączeniu z SGML-em. Pierwszy szkic CSS zaproponował w 1994 r. Håkon Wium Lie[1].",
      JS: "JavaScript (w skrócie JS) – skryptowy język programowania, stworzony przez firmę Netscape, najczęściej stosowany na stronach internetowych. Twórcą JavaScriptu jest Brendan Eich[4]. W połowie lat 90. XX wieku organizacja ECMA wydała na podstawie JavaScriptu standard języka skryptowego o nazwie ECMAScript, aktualnie rozwijaniem tego standardu zajmuje się komisja TC39[5]."
   },
   contact: {
      header: "Contact",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendMessageButton: "Send your message",
      namePlaceholder: "John",
      emailPlaceholder: "john@gmail.com",
      messagePlaceholder: "Message ..."
   },
   materials: {
      header: "Recommended materials",
      mainParagraph: [
         "Here you will find a collection of materials that I consider valuable in learning the following technologies.",
         "From official documentation to games, articles and courses explaining their intricacies."
      ],
      listOfMaterials: [
         //html
         {
            header: "HTML",
            id: "html",
            docs: {
               header: "Dokumentacja",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "HTML - Oficjalna dokumentacja",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "HTML - Kurs",
                  },
               ]
            },
            onlineCourses: {
               header: "Kursy online",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Kurs Video HTML",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "HTML Video Super Course",
                  },
               ]
            },
            articles: {
               header: "Artykuły",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
               ]
            },

         },
         //css
         {
            header: "CSS",
            id: "css",
            docs: {
               header: "Dokumentacja",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "CSS - Oficjalna dokumentacja",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "CSS - Kurs",
                  },
               ]
            },
            onlineCourses: {
               header: "Kursy online",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Kurs Video CSS",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "CSS Video Super Course",
                  },
               ]
            },
            articles: {
               header: "Artykuły",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
               ]
            },
         },
         //js
         {
            header: "JavaScript",
            id: "js",
            docs: {
               header: "Dokumentacja",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "JS - Oficjalna dokumentacja",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "JS - Kurs",
                  },
               ]
            },
            onlineCourses: {
               header: "Kursy online",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Kurs Video JS",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "JS Video Super Course",
                  },
               ]
            },
            articles: {
               header: "Artykuły",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
               ]
            },
         },
         //SCSS
         {
            header: "SASS",
            id: "sass",
            docs: {
               header: "Dokumentacja",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "SASS - Oficjalna dokumentacja",
                  },
               ]
            },
            onlineCourses: {
               header: "Kursy online",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Kurs Video JS",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "JS Video Super Course",
                  },
               ]
            },
            articles: {
               header: "Artykuły",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
               ]
            },
         },
         //React
         {
            header: "React",
            id: "react",
            docs: {
               header: "Dokumentacja",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "React - Oficjalna dokumentacja",
                  },
               ]
            },
            onlineCourses: {
               header: "Kursy online",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Kurs Video JS",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "JS Video Super Course",
                  },
               ]
            },
            articles: {
               header: "Artykuły",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
               ]
            },
         },
         //Redux
         {
            header: "Redux",
            id: "redux",
            docs: {
               header: "Dokumentacja",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Redux - Oficjalna dokumentacja",
                  },
               ]
            },
            onlineCourses: {
               header: "Kursy online",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Kurs Video JS",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "JS Video Super Course",
                  },
               ]
            },
            articles: {
               header: "Artykuły",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
               ]
            },
         },
         //Gatsby
         {
            header: "Gatsby",
            id: "gatsby",
            docs: {
               header: "Dokumentacja",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Gatsby - Oficjalna dokumentacja",
                  },
               ]
            },
            onlineCourses: {
               header: "Kursy online",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Kurs Video JS",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "JS Video Super Course",
                  },
               ]
            },
            articles: {
               header: "Artykuły",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
               ]
            },
         },
         //Node / Express
         {
            header: "Node.js / Express.js",
            id: "node",
            docs: {
               header: "Dokumentacja",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Node.js - Oficjalna dokumentacja",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Express.js - Oficjalna dokumentacja",
                  },
               ]
            },
            onlineCourses: {
               header: "Kursy online",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Kurs Video JS",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "JS Video Super Course",
                  },
               ]
            },
            articles: {
               header: "Artykuły",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
               ]
            },
         },
         //MongoDB
         {
            header: "MongoDB",
            id: "mongodb",
            docs: {
               header: "Dokumentacja",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "MongoDB - Oficjalna dokumentacja",
                  },
               ]
            },
            onlineCourses: {
               header: "Kursy online",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Kurs Video JS",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "JS Video Super Course",
                  },
               ]
            },
            articles: {
               header: "Artykuły",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
               ]
            },
         },
         //Git
         {
            header: "Git",
            id: "git",
            docs: {
               header: "Dokumentacja",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "SASS - Oficjalna dokumentacja",
                  },
               ]
            },
            onlineCourses: {
               header: "Kursy online",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Kurs Video JS",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "JS Video Super Course",
                  },
               ]
            },
            articles: {
               header: "Artykuły",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
               ]
            },
         },
         //Github
         {
            header: "Github",
            id: "github",
            docs: {
               header: "Dokumentacja",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Github - Oficjalna dokumentacja",
                  },
               ]
            },
            onlineCourses: {
               header: "Kursy online",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Kurs Video JS",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "JS Video Super Course",
                  },
               ]
            },
            articles: {
               header: "Artykuły",
               items: [
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
                  {
                     link: "https://reactjs.org/",
                     title: "Artykuł 1",
                  },
               ]
            },
         },
      ]
   }
}

export default textContent;