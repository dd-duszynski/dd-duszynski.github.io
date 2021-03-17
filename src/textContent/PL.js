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
      ["Strona Główna", "/"],
      ["O mnie", "/about"],
      ["Projekty", "/#projects"],
      ["Kontakt", "/#contact"]
   ],
   hero: [
      "Witaj, nazywam się Damian Duszyński.",
      "Jestem Frontend Developerem oraz pasjonatem UX/UI. Znajdziesz tu opis moich projektów i technologii, których używam.",
      "Zapraszam do",
      "kontaktu",
   ],
   projects: {
      title: "Projekty",
      listOfProjects: [
         {
            nazwa: "PrintXL",
            rodzaj: "dev & design",
            opis: "Redesign strony internetowej na potrzeby drukarni wielkoformatowej. Głównym celem było przedstawienie bogatej oferty i łatwiejszy dostęp do specyfikacji technicznych.",
            photo: pxlHero,
            photos: [pxlHero, pxl1, pxl2, pxl3, pxl4, pxl5],
            link: '/projects/pxl',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Material UI', 'Node', 'MySQL']
         },
         {
            nazwa: "Kanbanator",
            rodzaj: "dev",
            opis: "Projekt ułatwia zarządzanie projektami w metodyce Kanban. Umożliwia założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
            photo: kanbanatorHero,
            photos: [kanbanatorHero, kanban1, kanban2, kanban3],
            link: '/projects/kanbanator',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Material UI', 'Node', 'MySQL']
         },
         {
            nazwa: "BigFive",
            rodzaj: "dev & design",
            opis: "Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu największych lig świata.",
            photo: bigFiveHero,
            photos: [bigFiveHero, bigFive1, bigFive2, bigFive3],
            link: '/projects/big-five',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Material UI', 'Node', 'MySQL']
         },
      ],
   },
   technologies: {
      header: "Narzędzia i technologie",
      subheaders: ["Development", "Design", "Pozostałe"],
      seeMore: 'Dowiedz się więcej',
      learnMore: "Polecane linki",
      all: [
         {
            name: "JavaScript",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "HTML",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "CSS",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Sass",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Material UI",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "React",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Redux",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Gatsby",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Node",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "MySQL",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Git",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "VSC",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Figma",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Adobe XD",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Adobe Photoshop",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Adobe Illustrator",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Affinity Designer",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Affinity Publisher",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "UX/UI",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Scrum",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Kanban",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Trello",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         },
         {
            name: "Excel",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"]
            ]
         }
      ]
      // JavaScript: {
      //    name:"JavaScript",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // HTML: {
      //    name:"HTML",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // CSS: {
      //    name:"CSS",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // Sass: {
      //    name:"Sass",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // MaterialUI: {
      //    name:"Material UI",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // React: {
      //    name:"React",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // Redux: {
      //    name:"Redux",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // Gatsby: {
      //    name:"Gatsby",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // Node: {
      //    name:"Node",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // MySQL: {
      //    name:"MySQL",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // Git: {
      //    name:"Git",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // VSC: {
      //    name:"VSC",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // Figma: {
      //    name:"Figma",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // AdobeXD: {
      //    name:"Adobe XD",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // AdobePhotoshop: {
      //    name:"Adobe Photoshop",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // AdobeIllustrator: {
      //    name:"Adobe Illustrator",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // AffinityDesigner: {
      //    name:"Affinity Designer",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // AffinityPublisher: {
      //    name:"Affinity Publisher",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // UXUI: {
      //    name:"UX/UI",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // Scrum: {
      //    name:"Scrum",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // Kanban: {
      //    name:"Kanban",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // Trello: {
      //    name:"Trello",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // },
      // Excel: {
      //    name:"MS Excel",
      //    fullName: "",
      //    description:"CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
      //    links:[
      //       ["MDN Web Docs","https://developer.mozilla.org/pl/docs/Web/CSS"],
      //       ["CSS Tricks","https://css-tricks.com/"]
      //    ]
      // }
   },
   contact: {
      header: "Kontakt",
      nameLabel: "Imię",
      emailLabel: "Email",
      messageLabel: "Wiadomość",
      sendMessageButton: "Wyślij wiadomość",
      namePlaceholder: "Jan",
      emailPlaceholder: "jan@gmail.com",
      messagePlaceholder: "Treść wiadomości..."
   },
   about: {
      par1: "Nazywam się Damian Duszyński. Jestem Frontend Developerem, a także pasjonatem UX/UI.",
      par2: "Szukam nowych możliwości pracy z produktami cyfrowymi, które rozwiązują realne problemy dbając przy tym o świetne doświadczenia dla użytkowników. Prywatnie jestem fanem piłki nożnej, jazdy na rowerze i ciężkich gitarowych rifów.",
      expHeader: "Doświadczenie zawodowe:",
      eduHeader: 'Edukacja:',
      experience: [
         {
            topHeader: "Lip 2019 -> Obecnie",
            bottomHeader: "Frontend Developer [PrintXL]",
            paragraphs: [
               "Stworzenie i rozwijanie strony internetowej dla wielkoformatowej drukarni cyfrowej opartej o framework Gatsby i system zarządzania treścią Contentful.",
               "Wykorzystane technologie: HTML / SCSS / JavaScript / React / Gatsby / Node / GraphQL / Contentful (Headless CMS).",
            ]
         },
         {
            topHeader: "Lip 2019 -> Obecnie",
            bottomHeader: "Research & Development Manager [PrintXL]",
            paragraphs: [
               "Współtworzenie i rozwijanie systemu do zarządzania produkcją w firmie. System składa się z paneli dla pracowników oraz dashboardu dla menedżerów.",
               "Tworzenie i wdrażanie nowych produktów wraz z analizą rynku, kalkulacją kosztów oraz doborem optymalnych materiałów i wykończeń.",
               "Przygotowywanie raportów oraz stała współpraca z zarządem oraz działami sprzedaży, planowania, logistyki i produkcji."
            ]
         },
         {
            topHeader: "Cze 2018 -> Lip 2019",
            bottomHeader: "Manager Działu DTP [PrintXL]",
            paragraphs: [
               "Zarządzanie pracą i rozwojem siedmioosobowego działu.",
               "Odpowiedzialność za płynny przepływ zleceń przez dział DTP.",
               "Stworzenie grupy skryptów JavaScript dla programów Adobe, które zautomatyzowały i ujednoliciły proces przygotowania grafik do druku."
            ]
         },
         {
            topHeader: "Mar 2013 -> Cze 2018",
            bottomHeader: "Specjalista DTP [PrintXL]",
            paragraphs: [
               "Weryfikacja poprawności plików przesłanych przez klienta oraz ich kompleksowe przygotowywanie do produkcji.",
               "Opracowywanie specyfikacji produktów oraz instrukcji dla klientów.",
               "Tworzenie profili kolorystycznych dla maszyn drukujących z wykorzystaniem spektrofotometru X-Rite I1.",
            ]
         },
         {
            topHeader: "Paź 2012 -> Gru 2013",
            bottomHeader: "Graphic Designer [AllElectronics]",
            paragraphs: [
               "Tworzenie grafik, ilustracji oraz ikon na potrzeby aukcji internetowych."
            ]
         },
      ],
      education: [
         {
            topHeader: "Lut 2019 -> Wrz 2019",
            bottomHeader: "Digital UX [Coders Lab]",
            paragraphs: [
               "Stacjonarny bootcamp Digital User Experience (320 godzin).",
               "Zakres materiału: Architektura Informacji / Design Sprint / Heurystyki Nielsena / Metodologia Agile / Projektowanie wizualne / Prototypowanie / Strategia UX / Testy użyteczności / Tworzenie Person / User Flow"
            ]
         },
         {
            topHeader: "Cze 2018 -> Gru 2018",
            bottomHeader: "JavaScript Developer: React [Coders Lab]",
            paragraphs: [
               "Stacjonarny bootcamp JavaScript Developer: React (320 godzin).",
               "Zakres materiału: HTML / CSS / Sass / RWD / JavaScript / ECMAScript 6 / React / Git"
            ]
         },
         {
            topHeader: "Paź 2007 -> Wrz 2012",
            bottomHeader: "Geografia [UAM, Poznań]",
            paragraphs: [
               "Studia magisterskie o specjalizacji: Kształtowanie Środowiska Przyrodniczego",
            ]
         },
      ]
   }
}

export default textContent;