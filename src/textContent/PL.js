import pxl1 from "../assets/pxl1.JPG";
import pxl2 from "../assets/pxl2.JPG";
import pxl3 from "../assets/pxl3.JPG";
import pxl4 from "../assets/pxl4.JPG";
import pxl5 from "../assets/pxl5.JPG";
import bigFive1 from "../assets/bigFive1.JPG";
import bigFive2 from "../assets/bigFive2.JPG";
import bigFive3 from "../assets/bigFive3.png";
import bigFiveHero from "../assets/bigFiveHero.png";
import pxlHero from "../assets/pxlHero.png";
import kanbanatorHero from "../assets/kanbanatorHero.png";
import kanban1 from "../assets/kanban1.JPG";
import kanban2 from "../assets/kanban2.JPG";
import kanban3 from "../assets/kanban3.JPG";

const textContent = {
   navigation: [
      ["Strona Główna", "/"],
      ["O mnie", "/about"],
      ["Projekty", "/#projects"],
      ["Kontakt", "/#contact"],
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
            opis:
               "Redesign strony internetowej na potrzeby drukarni wielkoformatowej. Głównym celem było przedstawienie bogatej oferty i łatwiejszy dostęp do specyfikacji technicznych.",
            photo: pxlHero,
            photos: [pxlHero, pxl1, pxl2, pxl3, pxl4, pxl5],
            link: "/projects/pxl",
         },
         {
            nazwa: "Kanbanator",
            rodzaj: "dev",
            opis:
               "Projekt ułatwia zarządzanie projektami w metodyce Kanban. Umożliwia założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
            photo: kanbanatorHero,
            photos: [kanbanatorHero, kanban1, kanban2, kanban3],
            link: "/projects/kanbanator",
         },
         {
            nazwa: "BigFive",
            rodzaj: "dev & design",
            opis:
               "Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu największych lig świata.",
            photo: bigFiveHero,
            photos: [bigFiveHero, bigFive1, bigFive2, bigFive3],
            link: "/projects/big-five",
         },
      ],
   },
   technologies: {
      header: "Narzędzia i technologie",
      subheaders: ["Development", "Design", "Pozostałe"],
      seeMore: "Dowiedz się więcej",
      learnMore: "Polecane linki",
      all: [
         {
            name: "JavaScript",
            fullName: "",
            type: "development",
            description:
               "Bardzo uniwersalny skryptowy język programowania wykorzystywany głównie do tworzenia serwisów internetowych, jednak dzięki Node.js używany jest również poza przeglądarkami. Jest językiem zorientowany obiektowo, opartym na prototypach, wielu paradygmatach i dynamicznej składni. JavaScript umożliwia developerom tworzenie dynamicznie wypełniających się treścią, interaktywnych i nowocześnie wyglądających serwisów.",
            links: [
               ["JAVASCRIPT.INFO", "https://javascript.info/"],
               [
                  "Mozilla Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/JavaScript",
               ],
               [
                  "[Traversy Media] JavaScript Crash Course For Beginners",
                  "https://www.youtube.com/watch?v=hdI2bqOjy3c",
                  "yt",
               ],
            ],
            projects: ["kanbanator", "pxl", "big-five"]
         },
         {
            name: "HTML",
            fullName: "HyperText Markup Language",
            type: "development",
            description:
               "Hipertekstowy język znaczników. Pozwala opisać strukturę informacji zawartych wewnątrz strony. Nadaje jej odpowiednie znaczenie semantyczne tworząc hiperłącza (linki), akapity, nagłówki czy listy. Osadza w tekście dokumentu również pliki multimedialne np. filmy i zdjęcia. Każda przeglądarka ma zdefiniowany domyślny wygląd tych elementów, a do ich customowego stylowania używa się CSS.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/HTML",
               ],
               [
                  "HTML Crash Course For Absolute Beginners [Traversy Media]",
                  "https://www.youtube.com/watch?v=UB1O30fR-EE",
                  "yt",
               ],
            ],
            projects: ["kanbanator", "pxl", "big-five"]
         },
         {
            name: "CSS",
            fullName: "Cascading Style Sheets",
            type: "development",
            description:
               "CSS to kod służący do definiowania wyglądu strony internetowej. Jest używany m.in. do pozycjonowania elementów, a także ustalania ich kolorów czy wielkości. Pozwala na zmianę tych właściwości w zależności od wielkości i orientacji urządzenia na jakim są wyświetlane, a nawet sposobu w jaki mają się wydrukować. W połączeniu z językiem JavaScript umożliwia tworzenie bardzo zaawansowanych i interaktywnych animacji.",
            links: [
               ["CSS Tricks", "https://css-tricks.com/"],
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               [
                  "Traversy Media - CSS Crash Course For Absolute Beginners",
                  "https://www.youtube.com/watch?v=yfoY53QXEnI",
                  "yt",
               ],
            ],
            projects: ["kanbanator", "pxl", "big-five"]
         },
         {
            name: "Sass",
            fullName: "Syntactically Awesome Style Sheets",
            type: "development",
            description:
               "SASS to pre-procesor CSS, który rozszerza jego możliwości o korzystanie ze zmiennych, zagnieżdzania reguł, funkcji, mixinów i wielu innych funkcjonalności, które znacznie ułatwiają developerom prace. Kod Sass jest finalnie kompilowany do zwykłego CSS'a.",
            links: [
               ["Sass - Official Website", "https://sass-lang.com/"],
               [
                  "[Traversy Media] - Sass Crash Course",
                  "https://www.youtube.com/watch?v=nu5mdN2JIwM",
                  "yt",
               ],
            ],
            projects: ["kanbanator", "pxl", "big-five"]
         },
         {
            name: "React",
            type: "development",
            fullName: "",
            description:
               "Javascriptowa deklaratywna biblioteka stworzona w 2013 roku przez programistów Facebooka. Umożliwia tworzenie bardzo złożonych interfejsów, dzieląc je na małe, reużywalne komponenty, które posiadają własny stan. Obecnie wykorzystywana jest zarówno po stronie przeglądarki, serwera dzięki Node.js, jak również w aplikacjach mobilnych dzięki React Native. Wykorzystuje Virtual DOM, czyli technikę, która aktualizuje zmiany tylko tam, gdzie faktycznie wystąpiły, co pozwala płynnie rerenderować interfejs.",
            links: [
               ["React - Official", "https://pl.reactjs.org/"],
               [
                  "Traversy Media - React JS Crash Course 2021",
                  "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
                  "yt",
               ],
            ],
            projects: ["kanbanator", "pxl", "big-five"]
         },
         {
            name: "Material UI",
            fullName: "",
            type: "development",
            description:
               "React'owy framework UI opierający się na Design Systemie stworzonym przez Google - Material Design. Udostępnia zbiór gotowych do użycia komponentów UI, takich jak przyciski, elementy formularzy, rozwijane listy, modale i wiele innych. Pozwala szybko zbudować spójny wizualnie interfejs użytkownika, który oparty jest na sprawdzonym przez miliony użytkowników Design Systemie.",
            links: [["MATERIAL-UI - Official Website", "https://material-ui.com/"], ["Traversy Media - Material UI React Tutorial", "https://www.youtube.com/watch?v=vyJU9efvUtQ", "yt"]],
            projects: ["kanbanator"]
         },
         {
            name: "Redux",
            fullName: "",
            type: "development",
            description:
               "Redux to przewidywalny i scentralizowany manager stanu dla aplikacji. Jednym z głównych założeń jest jednokierunkowy przepływ danych, który zakłada, że wpływają one do komponentu, który nie powinien ich mutować. W dużym uproszczeniu za zmianę stanu odpowiada reducer, wywołany przez akcje, która informuje go zmianie jaką musi wykonać. Akcja może zostać wywołana np. przez wciśnięcie przycisku. Redux pomaga pisać aplikacje, które zachowują się spójnie, są łatwe do przetestowania, a także działają w różnych środowiskach (przeglądarka, serwer, natywnie).",
            links: [
               ["Redux - Official", "https://redux.js.org/"],
               [
                  "Traversy Media - React JS Crash Course 2021",
                  "https://www.youtube.com/watch?v=93p3LxR9xfM",
                  "yt",
               ],
            ],
            projects: ["kanbanator"]
         },
         {
            name: "Gatsby",
            type: "development",
            fullName: "",
            description:
               "Gatsby to framework rozszerzający możliwości Reacta. Pozwala na generowanie zoptymalizowanych pod katem szybkości i SEO statycznych stron internetowych, które umożliwiają robotom wyszukiwarek odczytanie i zaindeksowanie całej treści strony. Gatsby oferuje również wiele wtyczek pomagających developerom np. w pobieraniu danych z systemu CMS czy tworzeniu responsywnych i zoptymalizowanych obrazków.",
            links: [
               ["Gatsby - Official Website", "https://www.gatsbyjs.com/"],
               ["Gatsby JS - dlaczego warto stworzyć stronę w oparciu o ten framework?", "https://smartbees.pl/blog/dlaczego-warto-stworzyc-strone-w-oparciu-o-gatsby-js"],
               [
                  "Traversy Media - Gatsby JS Crash Course",
                  "https://www.youtube.com/watch?v=6YhqQ2ZW1sc",
                  "yt",
               ],
            ],
            projects: ["pxl"]
         },
         {
            name: "Node",
            type: "development",
            fullName: "",
            description:
               "Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser.",
            links: [
               ["Node - Official", "https://nodejs.dev/learn"],
               [
                  "Traversy Media - Node.js Crash Course",
                  "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
                  "yt",
               ],
            ],
            projects: []
         },
         {
            name: "MySQL",
            type: "development",
            fullName: "",
            description:
               "Wolnodostępny, otwartoźródłowy system zarządzania relacyjnymi bazami danych.",
            links: [
               ["MySQL - Official", "https://www.mysql.com/"],
               [
                  "Programming with Mosh - MySQL Tutorial for Beginners",
                  "https://www.youtube.com/watch?v=7S_tz1z_5bA",
                  "yt",
               ],
            ],
            projects: []
         },
         {
            name: "Git",
            type: "development",
            fullName: "",
            description:
               "Git to darmowy, rozproszony system kontroli wersji o otwartym kodzie źródłowym, zaprojektowany do obsługi wszystkiego, od małych po bardzo duże projekty, z szybkością i wydajnością.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               [
                  "Traversy Media - Git & GitHub Crash Course For Beginners",
                  "https://www.youtube.com/watch?v=SWYqp7iY_Tc",
                  "yt",
               ],
            ],
            projects: []
         },
         {
            name: "VSC",
            type: "development",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "Figma",
            type: "design",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "Adobe XD",
            type: "design",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "Adobe Photoshop",
            type: "design",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "Adobe Illustrator",
            type: "design",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "Affinity Designer",
            type: "design",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "Affinity Publisher",
            type: "design",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "UX/UI",
            type: "other",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "Scrum",
            type: "other",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "Kanban",
            type: "other",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "Trello",
            type: "other",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "Excel",
            type: "other",
            fullName: "",
            description:
               "CSS to kod służący do nadawania stronie jej wyglądu. Jest używany m.in. do pozycjonowania elementów, ustalania kolorów tła i fontów, a także wielkości zdjęć. Ponadto pozwala na zmianę widoku w zależności od wielkości urządzenia, jego orientacji czy nawet sposobu w jaki się wydrukuje. W połączeniu z językiem JavaScript pozwala tworzyć bardzo zaawansowane interaktywne animacje.",
            links: [
               [
                  "MDN Web Docs",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
      ],
   },
   contact: {
      header: "Kontakt",
      nameLabel: "Imię",
      emailLabel: "Email",
      messageLabel: "Wiadomość",
      sendMessageButton: "Wyślij wiadomość",
      namePlaceholder: "Jan",
      emailPlaceholder: "jan@gmail.com",
      messagePlaceholder: "Treść wiadomości...",
   },
   about: {
      par1:
         "Nazywam się Damian Duszyński. Jestem Frontend Developerem, a także pasjonatem UX/UI.",
      par2:
         "Szukam nowych możliwości pracy z produktami cyfrowymi, które rozwiązują realne problemy dbając przy tym o świetne doświadczenia dla użytkowników. Prywatnie jestem fanem piłki nożnej, jazdy na rowerze i ciężkich gitarowych rifów.",
      expHeader: "Doświadczenie zawodowe:",
      eduHeader: "Edukacja:",
      experience: [
         {
            topHeader: "Lip 2019 -> Obecnie",
            bottomHeader: "Frontend Developer [PrintXL]",
            paragraphs: [
               "Stworzenie i rozwijanie strony internetowej dla wielkoformatowej drukarni cyfrowej opartej o framework Gatsby i system zarządzania treścią Contentful.",
               "Wykorzystane technologie: HTML / SCSS / JavaScript / React / Gatsby / Node / GraphQL / Contentful (Headless CMS).",
            ],
         },
         {
            topHeader: "Lip 2019 -> Obecnie",
            bottomHeader: "Research & Development Manager [PrintXL]",
            paragraphs: [
               "Współtworzenie i rozwijanie systemu do zarządzania produkcją w firmie. System składa się z paneli dla pracowników oraz dashboardu dla menedżerów.",
               "Tworzenie i wdrażanie nowych produktów wraz z analizą rynku, kalkulacją kosztów oraz doborem optymalnych materiałów i wykończeń.",
               "Przygotowywanie raportów oraz stała współpraca z zarządem oraz działami sprzedaży, planowania, logistyki i produkcji.",
            ],
         },
         {
            topHeader: "Cze 2018 -> Lip 2019",
            bottomHeader: "Manager Działu DTP [PrintXL]",
            paragraphs: [
               "Zarządzanie pracą i rozwojem siedmioosobowego działu.",
               "Odpowiedzialność za płynny przepływ zleceń przez dział DTP.",
               "Stworzenie grupy skryptów JavaScript dla programów Adobe, które zautomatyzowały i ujednoliciły proces przygotowania grafik do druku.",
            ],
         },
         {
            topHeader: "Mar 2013 -> Cze 2018",
            bottomHeader: "Specjalista DTP [PrintXL]",
            paragraphs: [
               "Weryfikacja poprawności plików przesłanych przez klienta oraz ich kompleksowe przygotowywanie do produkcji.",
               "Opracowywanie specyfikacji produktów oraz instrukcji dla klientów.",
               "Tworzenie profili kolorystycznych dla maszyn drukujących z wykorzystaniem spektrofotometru X-Rite I1.",
            ],
         },
         {
            topHeader: "Paź 2012 -> Gru 2013",
            bottomHeader: "Graphic Designer [AllElectronics]",
            paragraphs: [
               "Tworzenie grafik, ilustracji oraz ikon na potrzeby aukcji internetowych.",
            ],
         },
      ],
      education: [
         {
            topHeader: "Lut 2019 -> Wrz 2019",
            bottomHeader: "Digital UX [Coders Lab]",
            paragraphs: [
               "Stacjonarny bootcamp Digital User Experience (320 godzin).",
               "Zakres materiału: Architektura Informacji / Design Sprint / Heurystyki Nielsena / Metodologia Agile / Projektowanie wizualne / Prototypowanie / Strategia UX / Testy użyteczności / Tworzenie Person / User Flow",
            ],
         },
         {
            topHeader: "Cze 2018 -> Gru 2018",
            bottomHeader: "JavaScript Developer: React [Coders Lab]",
            paragraphs: [
               "Stacjonarny bootcamp JavaScript Developer: React (320 godzin).",
               "Zakres materiału: HTML / CSS / Sass / RWD / JavaScript / ECMAScript 6 / React / Git",
            ],
         },
         {
            topHeader: "Paź 2007 -> Wrz 2012",
            bottomHeader: "Geografia [UAM, Poznań]",
            paragraphs: [
               "Studia magisterskie o specjalizacji: Kształtowanie Środowiska Przyrodniczego",
            ],
         },
      ],
   },
};

export default textContent;
