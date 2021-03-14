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
      ["Main Page", "/"],
      ["About Me", "/about"],
      ["Projects", "/#projects"],
      ["Contact", "/#contact"]
   ],
   hero: [
      "Hello, my name is Damian Duszyński.",
      "I am a Frontend Developer and UX / UI enthusiast. You will find here a description of my projects and technologies that I use.",
      "Please do not hesitate to",
      "contact me"
   ],
   projects: {
      title: "Projekty",
      listOfProjects: [
         {
            nazwa: "PrintXL",
            rodzaj: "dev",
            opis: "Redesign strony internetowej na potrzeby drukarni wielkoformatowej. Głównym celem było przedstawienie bogatej oferty i łatwiejszy dostęp do specyfikacji technicznych.",
            photo: pxlHero,
            photos: [pxl1, pxl2, pxl3, pxl4, pxl5],
            link: '/projects/pxl',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Material UI', 'Node', 'MySQL']
         },
         {
            nazwa: "Kanbanator",
            rodzaj: "dev",
            opis: "Projekt ułatwia zarządzanie projektami w metodyce Kanban. Umożliwia założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
            photo: kanbanatorHero,
            photos: [kanban1, kanban2, kanban3],
            link: '/projects/kanbanator',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Material UI', 'Node', 'MySQL']
         },
         {
            nazwa: "BigFive",
            rodzaj: "dev",
            opis: "Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu największych lig świata.",
            photo: bigFiveHero,
            photos: [bigFive1, bigFive2, bigFive3],
            link: '/projects/big-five',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Material UI', 'Node', 'MySQL']
         },
      ],
   },
   technologies: {
      header: "Narzędzia i technologie",
      subheaders: ["Development", "Design", "Pozostałe"],
      seeMore: 'Find out more'
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
   about: {
      par1: "My name is Damian Duszyński. I'm committed and self-motivated Front-end Developer with a great passion for UX/UI.",
      par2: "I am looking for new opportunities to work with digital products that solve real problems and ensuring a great user experience. Privately, I am a fan of football, cycling and heavy guitar riffs.",
      expHeader: "Experience",
      eduHeader: 'Education',
      experience: [
         {
            topHeader: "Jul 2019 - Present",
            bottomHeader: "Frontend Developer [PrintXL]",
            paragraphs: [
               "Creation and development of a website for a large-format digital printing house based on the Gatsby framework and CMS Contentful",
               "Stack: SCSS / JavaScript / React / Gatsby / Node / GraphQL / Contentful (Headless CMS)",
            ]
         },
         {
            topHeader: "Jul 2019 - Present",
            bottomHeader: "Research & Development Manager [PrintXL]",
            paragraphs: [
               "Co-creation and development of the production management system in the company based on SQL & MS Excel. The system consists of panels for employees and a dashboard for managers.",
               "Creation and implementation of new products with market analysis, cost calculation, and selection of optimal materials and finishes.",
               "Preparation of reports and constant cooperation with the management board and sales, planning, logistics, and production departments."
            ]
         },
         {
            topHeader: "Jun 2018 - Jul 2019",
            bottomHeader: "DTP Department Manager [PrintXL]",
            paragraphs: [
               "Managing the work and development of a seven-person department.",
               "Responsibility for the smooth flow of orders by the DTP department.",
               "Creating a group of JavaScript scripts for Adobe programs that automated and standardized the process of preparing graphics for printing."
            ]
         },
         {
            topHeader: "Mar 2013 - Jun 2018",
            bottomHeader: "DTP Specialist [PrintXL]",
            paragraphs: [
               "Verification of the correctness of files sent by the customer and their comprehensive preparation for production.",
               "Development of product specifications and instructions for customers.",
               "Create color profiles for printing machines using the X-Rite I1 spectrophotometer."
            ]
         },
         {
            topHeader: "Oct 2012 - Dec 2013",
            bottomHeader: "Graphic Designer [AllElectronics]",
            paragraphs: [
               "Creating graphics, illustrations, and icons for online auctions."
            ]
         },
      ],
      education: [
         {
            topHeader: "Feb 2019 - Sep 2019",
            bottomHeader: "Digital UX [Coders Lab]",
            paragraphs: [
               "Digital User Experience - stationary Bootcamp (320 hours).",
               "Thematic Scope: Agile Methodology / Architecture of Information / Creating Personas / Design Sprint / Nielsen Heuristics / Prototyping / Usability Testing / User Flow / UX Strategy / Visual Design"
            ]
         },
         {
            topHeader: "Jun 2018 - Dec 2018",
            bottomHeader: "JavaScript Developer: React [Coders Lab]",
            paragraphs: [
               "JavaScript Developer: React - stationary bootcamp (320 hours).",
               "Thematic Scope: HTML / CSS / Sass / RWD / JavaScript / ECMAScript 6 / React / Git"
            ]
         },
         {
            topHeader: "Oct 2007 - Sep 2012",
            bottomHeader: "Geography [UAM, Poznań]",
            paragraphs: [
               "Master of Science in Geography, specializing in Environmental Management."
            ]
         },
      ]

   }

}

export default textContent;