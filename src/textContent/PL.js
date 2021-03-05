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
      // ["Piaskownica", "/playground"],
      ["Kontakt", "/#contact"]
   ],
   hero: [
      "Cześć. Nazywam się Damian Duszyński.",
      "Jestem Frontend Developerem oraz entuzjastą UX/UI. Znajdziesz tu opis moich projektów i technologii, których używam.",
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
      seeMore: 'Dowiedz się więcej'
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
      par1: "Nazywam się Damian Duszyński. Jestem w pełni zmotywowanym Frontend Developerem z wielką pasją do UX/UI i technologii internetowych.",
      par2: "Szukam nowych możliwości pracy z produktami cyfrowymi, które niosą realną wartość i świetne doświadczenia dla użytkowników.",
      par3: "Prywatnie wielbiciel piłki nożnej i kolarstwa.",
      expHeader: "Doświadczenie",
      eduHeader: 'Edukacja',
      experience: [
         {
            topHeader: "Lip 2019 - Obecnie",
            bottomHeader: "R&D / Frontend Developer - PrintXL",
            paragraphs: [
               "Creation and development of a company website based on the Gatsby framework and Headless CMS Contentful",
               "Creation and development of a system based on Excel for the company's production management. The system includes panels for employees and managers used by over 50 people",
               "Creation and implementation of new products with market analysis, calculation of production costs, and selection of optimal materials and finishes."
            ]
         },
         {
            topHeader: "Cze 2018 - Lip 2019",
            bottomHeader: "Manager Działu DTP - PrintXL",
            paragraphs: [
               "Work management and development of a seven-person department",
               "Creating a group of scripts using JavaScript in Adobe programs, which automated and standardized the process of checking and preparing files for production of large-format printing."
            ]
         },
         {
            topHeader: "Mar 2013 - Cze 2018",
            bottomHeader: "Specjalista DTP - PrintXL",
            paragraphs: [
               "Comprehensive preparation of graphic materials for large-format digital printing",
               "Verifying the correctness of files sent by the client."
            ]
         },
         {
            topHeader: "Paź 2012 - Gru 2013",
            bottomHeader: "Graphic Designer - AllElectronics",
            paragraphs: [
               "Creating infographics, icons, illustrations, and photos for the needs of online auctions."
            ]
         },
      ],
      education: [
         {
            topHeader: "Lut 2019 - Wrz 2019",
            bottomHeader: "Coders Lab - Szkoła IT",
            paragraphs: [
               "Digital UX (320 godzin)"
            ]
         },
         {
            topHeader: "Cze 2018 - Gru 2018",
            bottomHeader: "Coders Lab - Szkoła IT",
            paragraphs: [
               "JavaScript Developer: React (320 godzin)"
            ]
         },
         {
            topHeader: "Paź 2007 - Wrz 2012",
            bottomHeader: "UAM, Poznań",
            paragraphs: [
               "Geografia, studia magisterskie"
            ]
         },
      ]


   }
}


export default textContent;