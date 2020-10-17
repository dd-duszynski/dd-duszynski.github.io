import photo1 from '../assets/bigfive.png'
import photo2 from '../assets/printxl.png'

const textContent = {
   navigation: [
      ["Projekty", "/projects"],
      ["Materiały", "/materials"],
      ["Kontakt", "/#contact"],
      ["O mnie", "/about"]
   ],
   hero: [
      "Witaj. Nazywam się Damian.",
      "Jestem entuzjastą Web Developmentu oraz szeroko pojętego UX/UI.",
      "Chciałbym zaprezentować Ci swoje prace, snippety oraz technologie, których używam."
   ],
   projects: {
      title: "Projekty",
      listOfProjects: [
         {
            nazwa: "Projekt 1",
            rodzaj: "dev",
            opis: "Opis 11",
            photo: photo1
         },
         {
            nazwa: "Projekt 2",
            rodzaj: "dev",
            opis: "Opis 22",
            photo: photo2
         },
      ],
      listOfPlayground: [
         {
            nazwa: "Playground 1",
            rodzaj: "dev",
            opis: "Opis 1",
            photo: photo1
         },
         {
            nazwa: "Playground 2",
            rodzaj: "design",
            opis: "Opis 3",
            photo: photo2
         },
      ],

   },
   technologies: {
      header: "Narzędzia i technologie",
      subheaders: ["Development", "Design", "Pozostałe"],
      HTML: "HTML (ang. HyperText Markup Language) – hipertekstowy język znaczników, wykorzystywany do tworzenia dokumentów hipertekstowych.",
      CSS: "Kaskadowe arkusze stylów (ang. Cascading Style Sheets, w skrócie CSS) – język służący do opisu formy prezentacji (wyświetlania) stron WWW. CSS został opracowany przez organizację W3C w 1996 r. jako potomek języka DSSSL przeznaczony do używania w połączeniu z SGML-em. Pierwszy szkic CSS zaproponował w 1994 r. Håkon Wium Lie[1].",
      JavaScript: "JavaScript (w skrócie JS) – skryptowy język programowania, stworzony przez firmę Netscape, najczęściej stosowany na stronach internetowych. Twórcą JavaScriptu jest Brendan Eich[4]. W połowie lat 90. XX wieku organizacja ECMA wydała na podstawie JavaScriptu standard języka skryptowego o nazwie ECMAScript, aktualnie rozwijaniem tego standardu zajmuje się komisja TC39[5]."
   },
   contact: {
      header: "Kontakt",
      nameLabel: "Imię",
      emailLabel: "Email",
      messageLabel: "Wiadomość",
      sendMessageButton: "Wyślij wiadomość",
   },
   materials: {
      header: "Polecane materiały",
      mainParagraph: [
         "Znajdziesz tu zbiór materiałów, które uważam za wartościowe w nauce wymienionych technologii.",
         "Począwszy od oficjalnych dokumentacji poprzez gry, artykuły i kursy wyjaśniające ich zawiłości."
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