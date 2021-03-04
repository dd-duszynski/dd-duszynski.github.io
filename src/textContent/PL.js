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
      ["Piaskownica", "/playground"],
      ["Kontakt", "/#contact"]
   ],
   hero: [
      "Witaj. Nazywam się Damian Duszyński.",
      "Jestem Frontend Developerem oraz entuzjastą UX/UI. Znajdziesz tu opis moich projektów i technologii, których używam.",
      "Zapraszam do",
      "kontaktu",
   ],
   projects: {
      title: "Projekty",
      listOfProjects: [
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
            nazwa: "PrintXL",
            rodzaj: "dev & design",
            opis: "Redesign strony internetowej na potrzeby drukarni wielkoformatowej. Głównym celem było przedstawienie bogatej oferty i łatwiejszy dostęp do specyfikacji technicznych.",
            photo: pxlHero,
            photos: [pxlHero, pxl1, pxl2, pxl3, pxl4, pxl5],
            link: '/projects/pxl',
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
      namePlaceholder: "John",
      emailPlaceholder: "john@gmail.com",
      messagePlaceholder: "Treść wiadomości..."
   }
}


export default textContent;