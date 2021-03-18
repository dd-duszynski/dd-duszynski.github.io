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
            description: "Skryptowy język programowania wykorzystywany głównie do tworzenia stron internetowych, jak również używany poza przeglądarką dzięki np. Node.js i Deno.js. Jest językiem opartym na prototypach, wielu paradygmatach, dynamicznej składni, zorientowanym obiektowo.",
            links: [
               ["Mozilla Web Docs", "https://developer.mozilla.org/pl/docs/Web/JavaScript"],
               ["JAVASCRIPT.INFO", "https://javascript.info/"],
               ["[Traversy Media] JavaScript Crash Course For Beginners", "https://www.youtube.com/watch?v=hdI2bqOjy3c", "yt"]
            ]
         },
         {
            name: "HTML",
            fullName: "HyperText Markup Language",
            description: "Hipertekstowy język znaczników. Pozwala opisać strukturę informacji zawartych wewnątrz strony internetowej, nadając odpowiednie znaczenie semantyczne poszczególnym fragmentom tekstu – formując hiperłącza, akapity, nagłówki, listy – oraz osadza w tekście dokumentu obiekty plikowe np. multimedia bądź elementy baz danych np. interaktywne formularze danych.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/HTML"],
               ["[Traversy Media] - HTML Crash Course For Absolute Beginners", "https://www.youtube.com/watch?v=UB1O30fR-EE", "yt"]
            ]
         },
         {
            name: "CSS",
            fullName: "",
            description: "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["CSS Tricks", "https://css-tricks.com/"],
               ["Traversy Media - CSS Crash Course For Absolute Beginners", "https://www.youtube.com/watch?v=yfoY53QXEnI", "yt"]
            ]
         },
         {
            name: "Sass",
            fullName: "",
            description: "SASS to pre procesor CSS-a. Rozszerza możliwości CSS o zmienne, funkcje, mixiny i wiele innych.",
            links: [
               ["Sass - Official", "https://sass-lang.com/"],
               ["Traversy Media - Sass Crash Course", "https://www.youtube.com/watch?v=nu5mdN2JIwM", "yt"]
            ]
         },
         {
            name: "Material UI",
            fullName: "",
            description: "React'owe komponenty dla szybszego i łatwiejszego tworzenia stron internetowych. Umożliwia  Material Design.",
            links: [
               ["MATERIAL-UI - Official", "https://material-ui.com/"]
            ]
         },
         {
            name: "React",
            fullName: "",
            description: "Javascriptowa biblioteka służąca do tworzenia interfejsów użytkownika.",
            links: [
               ["React - Official", "https://pl.reactjs.org/"],
               ["Traversy Media - React JS Crash Course 2021", "https://www.youtube.com/watch?v=w7ejDZ8SWv8", "yt"]
            ]
         },
         {
            name: "Redux",
            fullName: "",
            description: "Kontener przewidywalnego stanu dla aplikacji JS. Redux pomaga pisać aplikacje, które zachowują się spójnie, działają w różnych środowiskach (klient, serwer i natywne) i są łatwe do przetestowania.",
            links: [
               ["Redux - Official", "https://redux.js.org/"],
               ["Traversy Media - React JS Crash Course 2021", "https://www.youtube.com/watch?v=93p3LxR9xfM", "yt"]
            ]
         },
         {
            name: "Gatsby",
            fullName: "",
            description: "Generator stron statycznych",
            links: [
               ["Gatsby - Official", "https://www.gatsbyjs.com/"]
            ]
         },
         {
            name: "Node",
            fullName: "",
            description: "Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser.",
            links: [
               ["Node - Official", "https://nodejs.dev/learn"],
               ["Traversy Media - Node.js Crash Course", "https://www.youtube.com/watch?v=fBNz5xF-Kx4", "yt"]
            ]
         },
         {
            name: "MySQL",
            fullName: "",
            description: "Wolnodostępny, otwartoźródłowy system zarządzania relacyjnymi bazami danych.",
            links: [
               ["MySQL - Official", "https://www.mysql.com/"],
               ["Programming with Mosh - MySQL Tutorial for Beginners", "https://www.youtube.com/watch?v=7S_tz1z_5bA", "yt"]
            ]
         },
         {
            name: "Git",
            fullName: "",
            description: "Git to darmowy, rozproszony system kontroli wersji o otwartym kodzie źródłowym, zaprojektowany do obsługi wszystkiego, od małych po bardzo duże projekty, z szybkością i wydajnością.",
            links: [
               ["MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS"],
               ["Traversy Media - Git & GitHub Crash Course For Beginners", "https://www.youtube.com/watch?v=SWYqp7iY_Tc", "yt"]
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