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
      // ["Playground", "/playground"],
      ["Contact", "/#contact"]
   ],
   hero: [
      "Hello, I'm Damian Duszyński.",
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
      par1: "My name is Damian Duszyński. I'm committed and self-motivated Front-end Developer with a great passion for UX/UI and web technologies.",
      par2: "I'm looking for a new opportunities to work with digital products that give real value and a great experience to users.",
      par3: "I am also a huge fan of football, especially the Italian Serie A (AC Milan).",
      expHeader: "Experience",
      eduHeader: 'Education',
      experience: [
         {
            topHeader: "Jul 2019 - Present",
            bottomHeader: "R&D / Frontend Developer & R&D - PrintXL",
            paragraphs: [
               "Creation and development of a company website based on the Gatsby framework and Headless CMS Contentful",
               "Creation and development of a system based on Excel for the company's production management. The system includes panels for employees and managers used by over 50 people",
               "Creation and implementation of new products with market analysis, calculation of production costs, and selection of optimal materials and finishes."
            ]
         },
         {
            topHeader: "Jun 2018 - Jul 2019",
            bottomHeader: "DTP Department Manager - PrintXL",
            paragraphs: [
               "Work management and development of a seven-person department",
               "Creating a group of scripts using JavaScript in Adobe programs, which automated and standardized the process of checking and preparing files for production of large-format printing."
            ]
         },
         {
            topHeader: "Mar 2013 - Jun 2018",
            bottomHeader: "DTP Specialist - PrintXL",
            paragraphs: [
               "Comprehensive preparation of graphic materials for large-format digital printing",
               "Verifying the correctness of files sent by the client."
            ]
         },
         {
            topHeader: "Oct 2012 - Dec 2013",
            bottomHeader: "Graphic Designer - AllElectronics",
            paragraphs: [
               "Creating infographics, icons, illustrations, and photos for the needs of online auctions."
            ]
         },
      ],
      education: [
         {
            topHeader: "Feb 2019 - Sep 2019",
            bottomHeader: "Coders Lab - IT school",
            paragraphs: [
               "Digital UX (320 hours)"
            ]
         },
         {
            topHeader: "Jun 2018 - Dec 2018",
            bottomHeader: "Coders Lab - IT school",
            paragraphs: [
               "JavaScript Developer: React (320 hours)"
            ]
         },
         {
            topHeader: "Oct 2007 - Sep 2012",
            bottomHeader: "UAM, Poznań",
            paragraphs: [
               "Master of Science in Geography"
            ]
         },
      ]

   }

}

export default textContent;