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
               "Bardzo uniwersalny skryptowy język programowania wykorzystywany głównie do tworzenia aplikacji internetowych, jednak dzięki Node.js używany jest również poza przeglądarkami. Jest językiem zorientowany obiektowo, opartym na prototypach, wielu paradygmatach i dynamicznej składni. JavaScript umożliwia developerom tworzenie interaktywnych, dynamicznych i nowocześnie wyglądających stron.",
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
               "HTML to hipertekstowy język znaczników. Pozwala opisać strukturę informacji zawartych wewnątrz strony. Nadaje jej odpowiednie znaczenie semantyczne tworząc akapity, nagłówki, listy czy hiperłącza (linki). Osadza w tekście dokumentu również pliki multimedialne np. filmy i zdjęcia. Każda przeglądarka ma zdefiniowany domyślny wygląd tych elementów, a do zmiany domyślnego wyglądu używa się CSS.",
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
               "CSS to kod służący do definiowania wyglądu strony internetowej. Jest używany m.in. do tworzenia animacji, pozycjonowania elementów, a także ustalania ich wielkości i kolorów. Pozwala na zmianę tych właściwości w zależności od rozdzielczości i orientacji urządzenia na jakim są wyświetlane, a nawet sposobu w jaki mają się wydrukować. W połączeniu z językiem JavaScript umożliwia tworzenie bardzo zaawansowanych interaktywnych aplikacji.",
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
               "SASS to pre-procesor CSS, który rozszerza jego możliwości o korzystanie ze zmiennych, zagnieżdzanie reguł, tworzenie funkcji, mixinów i wielu innych funkcjonalności, które znacznie ułatwiają developerom prace. Kod Sass jest finalnie kompilowany do zwykłego CSS'a.",
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
               "Deklaratywna biblioteka stworzona przez programistów Facebooka w 2013 roku. Umożliwia tworzenie bardzo złożonych interfejsów, dzieląc je na małe, reużywalne komponenty, które mogą posiadać własny stan. Obecnie wykorzystywana jest po stronie przeglądarki, serwera dzięki Node.js, jak również w aplikacjach mobilnych dzięki React Native. Korzysta z techniki Virtual DOM, która aktualizuje zmiany tylko tam, gdzie faktycznie wystąpiły, co pozwala płynnie rerenderować interfejs.",
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
               "React'owy framework UI opierający się na stworzonym przez Google - Material Design. Udostępnia zbiór gotowych do użycia komponentów, takich jak przyciski, elementy formularzy, rozwijane listy i wiele innych. Pozwala szybko zbudować spójny wizualnie interfejs użytkownika, który oparty jest na sprawdzonym przez miliony użytkowników Design Systemie.",
            links: [["MATERIAL-UI - Official Website", "https://material-ui.com/"], ["Traversy Media - Material UI React Tutorial", "https://www.youtube.com/watch?v=vyJU9efvUtQ", "yt"]],
            projects: ["kanbanator"]
         },
         {
            name: "Redux",
            fullName: "",
            type: "development",
            description:
               "Redux to otwarta biblioteka do zarządzania stanem aplikacji w przewidywalny i łatwy do przetestowania sposób. Głównym założeniem jest Single source of truth - stan całej aplikacji jest przechowywany w jednym miejscu zwanym 'store'. Kolejne założenie to jednokierunkowy przepływ danych, mówiący o tym, że stan jest tylko do odczytu. Za zmianę stanu odpowiada 'reducer', wywoływany przez 'akcje', która opisuje zmianę do wykonania. Podejście to daje pewność, że stan nie zostanie zmieniony w niekontrolowany sposób.",
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
               "Gatsby to framework rozszerzający możliwości Reacta. Pozwala na generowanie statycznych stron internetowych zoptymalizowanych pod katem szybkości i SEO. Umożliwia robotom wyszukiwarek odczytanie i zaindeksowanie całej treści strony, co było problemem 'czystego' Reacta. Gatsby oferuje również wiele wtyczek pomagających developerom m.in. w pobieraniu danych z systemów CMS, tworzeniu responsywnych i zoptymalizowanych obrazków czy integracji z usługami marketingowymi, takimi jak Google Analytics.",
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
               "Node.js to wieloplatformowe środowisko uruchomieniowe, które pozwoliło korzystać z JavaScript w środowisku innym niż przeglądarka. Przyczynił się do stworzenia paradygmatu 'JavaScript everywhere'. Node.js używa opartego na zdarzeniach, nieblokującego modelu wejścia/wyjścia. Napisany został w języku C++ w oparciu o silnik V8 używany w Google Chrome. Dzięki swojej wydajności może obsłużyć wiele zapytań jednocześnie i stanowi dobre rozwiązanie dla aplikacji działających na różnych urządzeniach, intensywnie korzystających z wielu danych.",
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
               "MySQL jest bardzo popularnym, otwartoźródłowym systemem do zarządzania relacyjnymi bazami danych, które są zbiorem przedstawionym w formie tabel. Każda tabela jest połączona z inną przynajmniej jednym atrybutem. Takie relacje są cechą charakterystyczną relacyjnych baz danych i pozwalają na łączenie tabel na wiele sposobów. Ta możliwość znacznie ułatwia tworzenie oraz zarządanie ogromnymi zbiorami danych z dużą ilością relacji.",
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
               "Git to system kontroli wersji o otwartym kodzie źródłowym. Oprogramowanie to służy do śledzenia zmian w kodzie źródłowym programu. Umożliwia korzystanie z historii zapisanych zmian i powrotu do wcześniejszej wersji. Daje możliwość rozgałęziania projektu (branching) na potrzeby rozwijania nowych funkcjonalności oraz przechowywania kodu w zdalnym repozytorium, co znacznie ułatwia pracę zespołową.",
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
            fullName: "Visual Studio Code",
            type: "development",
            description:
               "Darmowy edytor kodu źródłowego dla wielu języków programowania. Zwiększa czytelność oraz pracę z kodem poprzez kolorowanie składni, automatyczne uzupełnianie kodu, debugowanie czy zarządzanie wersjami za pośrednictwem GIT. W zależności od potrzeb umożliwia instalowanie dodatkowych rozszerzeń zwiększających funkcjonalność aplikacji.",
            links: [
               [
                  "Visual Studio Code - Official Website",
                  "https://code.visualstudio.com/",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
               ["[Adrian Twarog] VS Code Extensions you absolutely need in 2021", "https://www.youtube.com/watch?v=qWNj3tfVjWI", "yt"],
               ["[Academing] Visual Studio Code Tutorial for Beginners - Introduction", "https://www.youtube.com/watch?v=VqCgcpAypFQ", "yt"],
            ],
            projects: []
         },
         {
            name: "Figma",
            type: "design",
            fullName: "",
            description:
               "Nowoczesne i cięszące się rosnącą popularnością narzędzie do tworzenia prototypów stron internetowych i aplikacji mobilnych. Umożliwia tworzenie interaktywnych widoków, a także współpracę w trybie online. Ceniony za szybkość działania oraz funkcjonalność.",
            links: [
               ["Figma Official Website", "https://www.figma.com/"],
               ["[DesignCourse] The Figma 2021 Crash Course by Example", "https://www.youtube.com/watch?v=Gu1so3pz4bA", "yt"],
               ["[freeCodeCamp.org] UI / UX Design Tutorial – Wireframe, Mockup & Design in Figma", "https://www.youtube.com/watch?v=c9Wg6Cb_YlU", "yt"]
            ],
            projects: []
         },
         {
            name: "Adobe XD",
            type: "design",
            fullName: "",
            description:
               "Narzędzie ze stajni Adobe, podobnie jak Figma służy do tworzenia interaktywnych prototypów aplikacji mobilnych oraz stron internetowych. Przeznaczone jest szczególnie dla projektantów User Experience, projektantów interfejsów (UI) oraz grafików.",
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
               "Program graficzny będący flagowym produktem firmy Adobe. Głównie wykorzystywany do tworzenia i obróbki grafiki rastrowej. Udostępnia mnóstwo funkcjonalności od edycji zdjęć, retuszowania i tworzenia kompozycji do malowania cyfrowego, animacji i projektowania grafiki.",
            links: [
               [
                  "MDN Web Docs", "https://developer.mozilla.org/pl/docs/Web/CSS",
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
               "Najpopularniejszy na rynku program do tworzenia grafiki wektorowej, której największą zaletą jest bezstratne skalowanie, a więc utrzymanie idealnej ostrości nawet przy wielokrotnym powiększeniu. Program umożliwia tworzenie illustracji, logo, ikon, opakowań czy billboardów.",
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
               "Designer to stosunkowo młody produkt Affinity. Program służy do tworzenia grafiki wektorowej, przygotowany specjalnie dla projektantów. Możliwościami nie odbiega od Illustrator'a, jednak atrakcyjna cena i wiele ciekawych rozwiązań, stawiają go w roli głównego konkurenta.",
            links: [
               [
                  "Affinity - oficjalna strona produktu",
                  "https://affinity.serif.com/en-us/designer/",
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
               "Aplikacja jest częścią linii produktów Affinity. Publisher kładzie nacisk głównie na pracę DTP i przygotowanie materiałów do druku. Od czasopism, książek, broszur po plakaty. To płynie działająca i intuicyjna aplikacja umożliwiająca tworzenie kreatywnych publikacji.",
            links: [
               [
                  "Affinity - oficjalna strona produktu",
                  "https://affinity.serif.com/en-us/publisher/",
               ],
               ["CSS Tricks", "https://css-tricks.com/"],
            ],
            projects: []
         },
         {
            name: "UX Design",
            type: "other",
            fullName: "User Experience Design",
            description:
               "User experience odnosi się do projektowania wrażeń użytkownika we wszystkich punktach styku z produktem. Szczególną uwagę zwraca się na takie aspekty jak: użyteczność, intuicyjność, łatwość obsługi i ogólną satysfakcje. Jest to projektowanie zorientowane na użytkownika. UX jest bardzo szeroką i interdyscyplinarną dziedziną. W całym procesie ważną rolę odgrywa m.in. tworzenie prototypów, badanie użyteczności, tworzenie zrozumiałej architektury informacj, ciągłe weryfikowanie obranej ścieżki, a także dbanie o potrzeby biznesowe.",
            links: [
               [
                  "UX Magazine", "https://uxmag.com/",
               ]
            ],
            projects: []
         },
         {
            name: "UI Design",
            fullName: "User Interface Design",
            type: "other",
            description:
               "Interfejs to płaszczyzna, na której dochodzi do interakcji między użytkownikiem, a produktem. Celem projektowania UI jest uczynienie interakcji tak prostej, jak to tylko możliwe, pod względem realizacji celów. Najlepsze interfejsy są dla niego tak łatwe w użyciu, że sprawiają wrażenie niewidocznych.",
            links: [
               [
                  "UX Magazine", "https://uxmag.com/",
               ],
            ],
            projects: []
         },
         {
            name: "Scrum",
            fullName: "",
            type: "other",
            description:
               "Scrum",
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
               "Kanban",
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
               "Trello to narzędzie do zarządzania projektami, które pozwala na uporządkowanie ich w formie bardzo czytelnych tablic. Aplikacja jednym rzutem oka informuje o tym, kto i nad czym pracuje, a także na jakim etapie znajduje się dane zadanie. Umożliwia instalowanie przydatnych wtyczek m.in. integrujących z innymi narzędziami takimi jak Slack czy Excel",
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
            name: "MS Excel",
            type: "other",
            fullName: "Microsoft Excel",
            description:
               "Wiodące na rynku oprogramowanie stosowane do wykonywania obliczeń zestawionych w formie tabelarycznej. Posiada liczne funkcje matematyczne, finansowe i bazodanowe, a także półautomatyczne powielanie tworzonych formuł. Jest również bardzo przydatny w generowaniu wykresów, w licznych wariantach. ",
            links: [
               [
                  "Microsoft Official Website",
                  "https://www.microsoft.com/pl-pl/microsoft-365/excel",
               ],
               ["[freeCodeCamp.org] Microsoft Excel Tutorial for Beginners", "https://www.youtube.com/watch?v=Vl0H-qTclOg", "yt"],
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
         "Nazywam się Damian Duszyński. Jestem Frontend Developerem, a także pasjonatem UX/UI i technologii webowych.",
      par2:
         "Szukam nowych możliwości pracy z produktami cyfrowymi, które rozwiązują realne problemy dbając przy tym o świetne doświadczenia dla użytkowników. Prywatnie fan piłki nożnej i jazdy na rowerze.",
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
