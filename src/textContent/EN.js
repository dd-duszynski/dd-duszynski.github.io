import photo1 from '../assets/bigfive.png'
import photo2 from '../assets/printxl.png'

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
            opis: "The project facilitates project management in the Kanban methodology. It allows you to set up your own account, create boards and group tasks in them.",
            photo: photo1,
            link: '/projects/kanbanator'
         },
         {
            nazwa: "Projekt 2",
            rodzaj: "dev",
            opis: "Website redesign for the needs of a large-format printing house. The main goal was to present a rich offer and easier access to technical specifications.",
            photo: photo2,
            link: '/projects/pxl'
         },
         {
            nazwa: "BigFive",
            rodzaj: "dev",
            opis: "It resulted from my passion for football and idea of creating a page which would alow to view the results and statistics of the five largest leagues in the world.",
            photo: photo2,
            link: '/projects/big-five'
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