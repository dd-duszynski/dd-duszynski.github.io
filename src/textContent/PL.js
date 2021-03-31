import pxlHero from "../assets/pxlHero.png";
import pxl1 from "../assets/pxl_rwd_1.png";
import bigFiveHero from "../assets/bigFiveHero.png";
import bigFive1 from "../assets/bigFive_rwd_1.png";
import kanbanatorHero from "../assets/kanbanatorHero.png";
import kanbanator1 from "../assets/kanbanator_rwd_1.png";

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
      title: "Projekty:",
      roleInfo: "Rola: ",
      descriptionInfo: "Opis: ",
      description2Info: "Opis technologii: ",
      technologyInfo: "Narzędzia i technologie: ",
      prototypes: "Prototypy: ",
      screens: "Ekrany: ",
      homeLink: "Wróć na stronę główną",
      listOfProjects: [
         {
            title: "PrintXL",
            role: "Design & Development",
            shortDescription:
               "Redesign strony internetowej dla cyfrowej drukarni wielkoformatowej. Podstawowym celem było przedstawienie bogatej oferty produktów, a także ułatwienie kontaktu i dostępu do instrukcji DTP.",
            description:
               [
                  "Pracę nad projektem rozpocząłem od przeprowadzenia wywiadów i ankiet na klientach i pracownikach firmy, aby ustalić co uważają za najbardziej newralgiczny punkt na ówczesnej stronie, a także jakie są jej braki i zalety. Dzięki temu zdefiniowałem kilkanaście problemów, które podzieliłem według częstotliwości ich występowania i nadałem im stosowny priorytet.",
                  "Do najczęściej wymienianich kwesti należał: utrudniony dostęp do zapoznania się z pełną ofertą firmy, brak instrukcji przygotowania plików graficznych do druku, a także mało atrakcyjny wygląd strony.",
                  "Zdefiniowanie tych problemów pozwoliło mi skupić swoją uwagę na najważniejszych aspektach w trakcie tworzenia prototypów.",
               ],
            description2:
               [
                  "Do przeprowadzeniu testów użyteczności i stworzeniu architektury informacji oraz nawigacji strony, przystąpiłem do budowania bardziej szczegółowego widoku strony. ",
                  "Do najczęściej wymienianich kwesti należał: utrudniony dostęp do zapoznania się z pełną ofertą firmy, brak instrukcji przygotowania plików graficznych do druku, a także mało atrakcyjny wygląd strony.",
                  "Zdefiniowanie tych problemów pozwoliło mi skupić swoją uwagę na najważniejszych aspektach w trakcie budowania prototypu.",
               ],
            photos: [pxlHero, pxl1],
            link: "/projects/pxl",
            externalLink: 'http://printxl.pl',
            repository: "https://github.com/dd-duszynski/pxlGatsby"
         },
         {
            title: "Kanbanator",
            role: "Design & Development",
            shortDescription:
               "Projekt ułatwiający zarządzanie projektami w metodyce Kanban. Umożliwia m.in. założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
            description:
               [
                  "Projekt ułatwia zarządzanie projektami w metodyce Kanban. Umożliwia założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
                  "Projekt ułatwia zarządzanie projektami w metodyce Kanban. Umożliwia założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
                  "Projekt ułatwia zarządzanie projektami w metodyce Kanban. Umożliwia założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
               ],
            description2:
               [
                  "xxx",
               ],
            photos: [kanbanatorHero, kanbanator1],
            link: "/projects/kanbanator",
            externalLink: 'https://dd-duszynski.github.io/bigfive/#/',
            repository: "https://github.com/dd-duszynski/kanbanator"
         },
         {
            title: "BigFive",
            role: "Design & Development",
            shortDescription:
               "Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu najsilniejszych lig świata.",
            description:
               [
                  "Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu największych lig świata.",
                  "Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu największych lig świata.",
                  "Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu największych lig świata.",
               ],
            description2:
               [
                  "xxx",
               ],
            photos: [bigFiveHero, bigFive1],
            link: "/projects/big-five",
            externalLink: 'https://dd-duszynski.github.io/bigfive/#/',
            repository: "https://github.com/dd-duszynski/bigfive"
         },
      ],
   },
   technologies: {
      header: "Narzędzia i technologie:",
      subheaders: ["Development", "Design", "Pozostałe"],
      seeMore: "Dowiedz się więcej",
      learnMore: "Polecane linki",
      all: [
         {
            name: "JavaScript",
            fullName: "",
            type: "development",
            description:
               "Jeden z najbardziej popularnych i uniwersalnych jezyków programowania. Wykorzystywany jest głównie do tworzenia stron i aplikacji internetowych, jednak dzięki Node.js używany jest również poza przeglądarkami. JS jest językiem zorientowanym obiektowo, opartym na prototypach, wielu paradygmatach i dynamicznej składni. Umożliwia developerom tworzenie interaktywnych, dynamicznie wypełniających się treścią i nowocześnie wyglądających stron.",
            links: [
               ["Kurs Javascript dla superbohaterów {PL}", "https://kursjs.pl/"],
               ["JAVASCRIPT.INFO {EN}", "https://javascript.info/"],
               [
                  "[Traversy Media] - JavaScript Crash Course For Beginners {EN}",
                  "https://www.youtube.com/watch?v=hdI2bqOjy3c",
                  "yt",
               ],
            ],
            projects: ["PrintXL", "Kanbanator", "BigFive"],
         },
         {
            name: "HTML",
            fullName: "HyperText Markup Language",
            type: "development",
            description:
               "HTML to hipertekstowy język znaczników. Pozwala opisać strukturę informacji zawartych wewnątrz strony, nadając jej odpowiednie znaczenie semantyczne. Tworzy akapity, nagłówki, listy czy hiperłącza (linki). Pozwala również osadzać w dokumencie pliki multimedialne, jak filmy czy zdjęcia. Każda przeglądarka ma domyślnie zdefiniowany wygląd tych elementów, a do jego zmiany używa się CSS.",
            links: [
               [
                  "Mozilla - MDN Web Docs {EN}",
                  "https://developer.mozilla.org/pl/docs/Web/HTML",
               ],
               [
                  "[Traversy Media] - HTML Crash Course For Absolute Beginners  {EN}",
                  "https://www.youtube.com/watch?v=UB1O30fR-EE",
                  "yt",
               ],
            ],
            projects: ["PrintXL", "Kanbanator", "BigFive"],
         },
         {
            name: "CSS",
            fullName: "Cascading Style Sheets",
            type: "development",
            description:
               "CSS to kod służący do definiowania wyglądu strony internetowej. Jest używany m.in. do pozycjonowania elementów, ustalania ich wielkości i kolorów, a także ich animowania. Pozwala na zmianę tych właściwości w zależności od rozdzielczości i orientacji urządzenia na jakim są wyświetlane, a nawet sposobu w jaki mają się wydrukować. CSS w połączeniu z językiem JavaScript umożliwia tworzenie zaawansowanych wizualnie i w pełni interaktywnych stron.",
            links: [
               [
                  "Mozilla - MDN Web Docs {EN}",
                  "https://developer.mozilla.org/pl/docs/Web/CSS",
               ],
               ["CSS Tricks {EN}", "https://css-tricks.com/"],
               [
                  "[Traversy Media] - CSS Crash Course For Absolute Beginners {EN}",
                  "https://www.youtube.com/watch?v=yfoY53QXEnI",
                  "yt",
               ],
            ],
            projects: ["PrintXL", "Kanbanator", "BigFive"],
         },
         {
            name: "Sass",
            fullName: "Syntactically Awesome Style Sheets",
            type: "development",
            description:
               "Sass to pre-procesor CSS, który rozszerza jego możliwości m.in. o możliwość wykorzystania zmiennych, zagnieżdzania reguł, tworzenia funkcji czy mixinów. Funkcjonalności te potrafia znacznie ułatwić developerom prace, dlatego Sass od lat cieszy się dużą popularnością.",
            links: [
               ["Oficjalna strona {EN}", "https://sass-lang.com/"],
               [
                  "[Traversy Media] - Sass Crash Course {EN}",
                  "https://www.youtube.com/watch?v=nu5mdN2JIwM",
                  "yt",
               ],
            ],
            projects: ["PrintXL", "BigFive"],
         },
         {
            name: "React",
            type: "development",
            fullName: "",
            description:
               "Niezwykle popularna deklaratywna biblioteka stworzona przez programistów Facebooka. Umożliwia tworzenie bardzo złożonych interfejsów, dzieląc je na mniejsze, reużywalne komponenty, które mogą posiadać własny stan. Obecnie React wykorzystywany jest zarówno po stronie przeglądarki, serwera dzięki Node.js, jak również w aplikacjach mobilnych, dzięki React Native. Korzysta z techniki Virtual DOM, która aktualizuje zmiany tylko tam, gdzie faktycznie wystąpiły, co pozwala płynnie rerenderować interfejs użytkownika.",
            links: [
               ["Oficjalna strona {PL}", "https://pl.reactjs.org/"],
               [
                  "[Traversy Media] - React JS Crash Course 2021 {EN}",
                  "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
                  "yt",
               ],
            ],
            projects: ["PrintXL", "Kanbanator", "BigFive"],
         },
         {
            name: "Material UI",
            fullName: "",
            type: "development",
            description:
               "React'owy framework UI opierający się na stworzonym przez Google - Material Design. Udostępnia zbiór gotowych do użycia komponentów, takich jak przyciski, elementy formularzy, rozwijane listy i wiele innych. Pozwala szybko zbudować spójny wizualnie interfejs, który oparty jest na Design Systemie sprawdzonym przez miliony użytkowników produktów Google.",
            links: [
               [
                  "Oficjalna strona {EN}",
                  "https://material-ui.com/",
               ],
               [
                  "[Traversy Media] - Material UI React Tutorial {EN}",
                  "https://www.youtube.com/watch?v=vyJU9efvUtQ",
                  "yt",
               ],
            ],
            projects: ["Kanbanator"],
         },
         {
            name: "Redux",
            fullName: "",
            type: "development",
            description:
               "Redux to otwarta biblioteka do zarządzania stanem aplikacji w przewidywalny i łatwy do przetestowania sposób. Jednym z głównych założeń jest Single source of truth zakładający, że stan całej aplikacji jest przechowywany w jednym miejscu zwanym 'store'. Ponadto jednokierunkowy przepływ danych, mówiący o tym, że stan jest tylko do odczytu, natomiast za jego zmianę odpowiada 'reducer', który jest wywoływany przez tzw 'akcje'. Akcja jest obiektem, który opisuje zmianę do wykonania. Takie podejście daje pewność, że stan nie zostanie zmieniony w niekontrolowany sposób.",
            links: [
               ["Oficjalna strona {EN}", "https://redux.js.org/"],
               [
                  "[Traversy Media] - React JS Crash Course 2021 {EN}",
                  "https://www.youtube.com/watch?v=93p3LxR9xfM",
                  "yt",
               ],
            ],
            projects: ["Kanbanator"],
         },
         {
            name: "Gatsby",
            type: "development",
            fullName: "",
            description:
               "Gatsby to framework rozszerzający możliwości Reacta. Pozwala na generowanie statycznych stron internetowych zoptymalizowanych pod katem szybkości i SEO. Wygenerowane statyczne strony umożliwiają robotom wyszukiwarek odczytanie i zaindeksowanie całej treści strony, co było problemem 'czystego' Reacta. Gatsby oferuje również wiele wtyczek pomagających developerom m.in. w pobieraniu danych z systemów CMS, tworzeniu responsywnych i zoptymalizowanych obrazków czy integracji z usługami marketingowymi, takimi jak Google Analytics.",
            links: [
               ["Oficjalna strona {EN}", "https://www.gatsbyjs.com/"],
               [
                  "Gatsby JS - dlaczego warto stworzyć stronę w oparciu o ten framework? {PL}",
                  "https://smartbees.pl/blog/dlaczego-warto-stworzyc-strone-w-oparciu-o-gatsby-js",
               ],
               [
                  "[Traversy Media] - Gatsby JS Crash Course {EN}",
                  "https://www.youtube.com/watch?v=6YhqQ2ZW1sc",
                  "yt",
               ],
            ],
            projects: ["PrintXL"],
         },
         {
            name: "Node",
            type: "development",
            fullName: "",
            description:
               "Node.js to wieloplatformowe środowisko uruchomieniowe, które pozwoliło korzystać z JavaScript w środowisku innym niż przeglądarka. Przyczynił się do stworzenia paradygmatu 'JavaScript everywhere'. Node.js używa opartego na zdarzeniach, nieblokującego modelu wejścia/wyjścia (I/O). Napisany został w języku C++ w oparciu o silnik V8 używany w Google Chrome. Stanowi dobre rozwiązanie dla aplikacji działających na różnych urządzeniach i intensywnie korzystających z wielu danych.",
            links: [
               ["Oficjalna strona {EN}", "https://nodejs.dev/learn"],
               [
                  "[Traversy Media] - Node.js Crash Course {EN}",
                  "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
                  "yt",
               ],
            ],
            projects: ["PrintXL", "Kanbanator"],
         },
         {
            name: "Express",
            type: "development",
            fullName: "",
            description:
               "Jak podają twórcy Express.js jest szybkim i minimalistycznym frameworkiem dla Node.js, który znacznie upraszcza tworzenie aplikacji serwerowej, jego konfigurację, a także obsługę żądań HTTP dla różnych ścieżek. Podstawowym założeniem jest wykorzystanie tzw. middleware, czyli oprogramowania pośredniczącego, pozwalającego przetwarzać prośbę klienta na wielu płaszczyznach zanim zwróci oczekiwany rezultat. Są to bardzo często biblioteki kompatybilne z Express.js do pracy z plikami, ciasteczkami, sesjami czy parametrami URL.",
            links: [
               ["Oficjalna strona {EN}", "https://expressjs.com/"],
               [
                  "[Traversy Media] - Express JS Crash Course {EN}",
                  "https://www.youtube.com/watch?v=L72fhGm1tfE",
                  "yt",
               ],
            ],
            projects: ["PrintXL", "Kanbanator"],
         },
         {
            name: "MySQL",
            type: "development",
            fullName: "",
            description:
               "MySQL jest bardzo popularnym systemem do zarządzania relacyjnymi bazami danych. Bazy te są zbiorem przedstawionym w formie tabel, gdzie każda z nich jest połączona z inną przynajmniej jednym atrybutem. Nazywamy to relacjami, które są charakterystyczną cechą dla relacyjnych baz danych. MySQL udostępnia szerego metod i funkcji, które bardzo ułatwiają pracę z tymi danymi.",
            links: [
               ["Oficjalna strona {EN}", "https://www.mysql.com/"],
               [
                  "[Programming with Mosh] - MySQL Tutorial for Beginners {EN}",
                  "https://www.youtube.com/watch?v=7S_tz1z_5bA",
                  "yt",
               ],
            ],
            projects: ["Kanbanator"],
         },
         {
            name: "Git",
            type: "development",
            fullName: "",
            description:
               "Git to system kontroli wersji, oprogramowanie służące do śledzenia zmian w kodzie źródłowym programu. Umożliwia korzystanie z historii zapisanych zmian i w razie potrzeby powrotu do wcześniejszych wersji. Daje możliwość rozgałęziania projektu na potrzeby rozwijania nowych funkcjonalności oraz przechowywania kodu w zdalnym repozytorium, co znacznie ułatwia pracę zespołową.",
            links: [
               ["Oficjalna strona {EN}", "https://git-scm.com/"],
               [
                  "[Traversy Media] - Git & GitHub Crash Course For Beginners {EN}",
                  "https://www.youtube.com/watch?v=SWYqp7iY_Tc",
                  "yt",
               ],
            ],
            projects: ["PrintXL", "Kanbanator", "BigFive"],
         },
         {
            name: "VSC",
            fullName: "Visual Studio Code",
            type: "development",
            description:
               "Darmowy edytor kodu źródłowego dla wielu języków programowania. Zwiększa czytelność oraz ułatwia pracę z kodem poprzez kolorowanie składni, automatyczne uzupełnianie, system podpowiedzi, możliwość debugowania(szukania błędów) czy zarządzanie wersjami za pośrednictwem GIT. Umożliwia instalowanie dodatkowych rozszerzeń zwiększających podstawowe funkcjonalności aplikacji.",
            links: [
               [
                  "Oficjalna strona {EN}",
                  "https://code.visualstudio.com/",
               ],
               [
                  "[Academing] Visual Studio Code Tutorial for Beginners - Introduction {EN}",
                  "https://www.youtube.com/watch?v=VqCgcpAypFQ",
                  "yt",
               ],
               [
                  "[Adrian Twarog] VS Code Extensions you absolutely need in 2021 {EN}",
                  "https://www.youtube.com/watch?v=qWNj3tfVjWI",
                  "yt",
               ],
            ],
            projects: ["PrintXL", "Kanbanator", "BigFive"],
         },
         {
            name: "UX Design",
            type: "design",
            fullName: "User Experience Design",
            description:
               "User experience odnosi się do projektowania wrażeń użytkownika we wszystkich punktach styku z produktem. Szczególną uwagę zwraca się na takie aspekty jak: użyteczność, intuicyjność, łatwość obsługi i ogólną satysfakcje. UX jest bardzo szeroką i interdyscyplinarną dziedziną. W całym procesie ważną rolę odgrywa badanie potrzeb, tworzenie prototypów, testowanie użyteczności, tworzenie zrozumiałej architektury informacj, ciągłe weryfikowanie obranej ścieżki, a także dbanie o potrzeby biznesowe.",
            links: [["UX Magazine {EN}", "https://uxmag.com/"]],
            projects: [],
         },
         {
            name: "UI Design",
            fullName: "User Interface Design",
            type: "design",
            description:
               "Interfejs to płaszczyzna, na której dochodzi do interakcji między użytkownikiem, a produktem. Celem projektowania UI jest uczynienie interakcji tak prostej, jak to tylko możliwe, pod względem realizacji celów. Mówi się, że najlepsze interfejsy są tak łatwe w użyciu, że sprawiają wrażenie niewidocznych. W projektowaniu UI bardzo pomocne mogą okazać się heurystyki Nielsena, które są zbiorem ogólnych reguł użyteczności (link poniżej).",
            links: [
               ["Smashing Magazine {EN}", "https://www.smashingmagazine.com/"],
               ["awwards. {EN}", "https://www.awwwards.com/"],
               [
                  "Heurystyki Nielsena {EN}",
                  "https://www.nngroup.com/articles/ten-usability-heuristics/#poster",
               ],
            ],
            projects: [],
         },
         {
            name: "Figma",
            type: "design",
            fullName: "",
            description:
               "Nowoczesne i cięszące się rosnącą popularnością narzędzie do tworzenia prototypów stron internetowych i aplikacji. Umożliwia tworzenie interaktywnych widoków, a także współpracę w trybie online. Figma jest ceniona za szybkość działania, prostotę oraz funkcjonalność.",
            links: [
               ["Oficjalna strona {EN}", "https://www.figma.com/"],
               [
                  "[DesignCourse] The Figma 2021 Crash Course by Example {EN}",
                  "https://www.youtube.com/watch?v=Gu1so3pz4bA",
                  "yt",
               ],
               [
                  "[freeCodeCamp.org] UI / UX Design Tutorial – Wireframe, Mockup & Design in Figma {EN}",
                  "https://www.youtube.com/watch?v=c9Wg6Cb_YlU",
                  "yt",
               ],
            ],
            projects: [],
         },
         {
            name: "Adobe XD",
            type: "design",
            fullName: "",
            description:
               "Narzędzie ze stajni Adobe, podobnie jak Figma służy do tworzenia interaktywnych prototypów stron internetowych i aplikacji. XD jest przeznaczone szczególnie dla projektantów UX/UI. Daje możliwość pracy zespołowej, integracji z innymi narzędziami Adobe oraz posiada bardzo przyjazny interfejs.",
            links: [
               [
                  "Oficjalna strona {PL}",
                  "https://www.adobe.com/pl/products/xd.html",
               ],
               [
                  "[DesignCourse] Adobe XD Crash Course {EN}",
                  "https://www.youtube.com/watch?v=3rQ-eTmWah0",
                  "yt",
               ],
               [
                  "[Envato Tuts+] UX Design Course with Adobe XD {EN}",
                  "https://www.youtube.com/watch?v=68w2VwalD5w",
                  "yt",
               ],
            ],
            projects: [],
         },
         {
            name: "Adobe Photoshop",
            type: "design",
            fullName: "",
            description:
               "Program graficzny będący flagowym produktem firmy Adobe. Głównie wykorzystywany do tworzenia i obróbki grafiki rastrowej (potocznie bitmapy). Udostępnia cały szereg funkcjonalności od podstawowej edycji zdjęć, retuszowania i tworzenia fotomanipulacji do malowania cyfrowego.",
            links: [
               [
                  "Oficjalna strona {PL}",
                  "https://www.adobe.com/pl/products/illustrator.html",
               ],
               [
                  "[Envato Tuts+] Adobe Illustrator for Beginners {EN}",
                  "https://www.youtube.com/watch?v=Ib8UBwu3yGA",
                  "yt",
               ],
            ],
            projects: [],
         },
         {
            name: "Adobe Illustrator",
            type: "design",
            fullName: "",
            description:
               "Najpopularniejszy na rynku program do tworzenia grafiki wektorowej, której największą zaletą jest bezstratne skalowanie, a więc utrzymanie idealnej ostrości nawet przy wielokrotnym powiększeniu. Program umożliwia tworzenie illustracji, logo, ikon, opakowań czy billboardów.",
            links: [
               [
                  "Oficjalna strona {PL}",
                  "https://www.adobe.com/pl/products/illustrator.html",
               ],
               [
                  "[Envato Tuts+] Adobe Illustrator for Beginners {EN}",
                  "https://www.youtube.com/watch?v=Ib8UBwu3yGA",
                  "yt",
               ],
            ],
            projects: [],
         },
         {
            name: "Affinity Designer",
            fullName: "",
            type: "design",
            description:
               "Designer to stosunkowo młody produkt, który służy do tworzenia grafiki wektorowej. Został przygotowany specjalnie dla projektantów. Możliwościami nie odbiega od Illustrator'a, jednak jeo atrakcyjna cena i wiele ciekawych rozwiązań, stawiają go w roli głównego konkurenta.",
            links: [
               [
                  "Oficjalna strona {PL}",
                  "https://affinity.serif.com/en-us/designer/",
               ],
               [
                  "[Envato Tuts+] Affinity Designer Quick Start {EN}",
                  "https://www.youtube.com/watch?v=Gd7FmjUxFnE",
                  "yt",
               ],
            ],
            projects: [],
         },
         {
            name: "Affinity Publisher",
            fullName: "",
            type: "design",
            description:
               "Aplikacja jest częścią linii produktów Affinity. Publisher kładzie nacisk głównie na pracę DTP i przygotowanie materiałów do druku. Od czasopism, książek, broszur po plakaty. To płynie działająca i intuicyjna aplikacja umożliwiająca tworzenie kreatywnych publikacji.",
            links: [
               [
                  "Oficjalna strona {PL}",
                  "https://affinity.serif.com/en-us/publisher/",
               ],
               [
                  "[Affinity Revolution] Tutorial For Beginners {EN}",
                  "https://www.youtube.com/watch?v=py6fqmvlaqY",
                  "yt",
               ],
            ],
            projects: [],
         },
         {
            name: "Scrum",
            fullName: "",
            type: "other",
            description:
               "Scrum to jedna z najpopularniejszych metodyk zwinnych, która umożliwia m.in. tworzenie nowych produktów i usług. Opiera się na iteracyjnym i przyrostowym dostarczaniu wartości. Wykorzystywany jest w pracy nad projektami opartymi o metodyki zwinne, zgodne z manifestem Agile. Praca nad produktem podzielona jest na iteracje, zwane sprintami. Realizacja projektu według Scrum skupia się na dostarczaniu kolejnych, coraz bardziej dopracowanych wyników projektu, samoorganizacji zespołu projektowego, a także włączaniu się w proces wytwórczy przyszłych użytkowników.",
            links: [
               [
                  "Oficjalna strona {EN}",
                  "https://www.scrum.org/resources/what-is-scrum",
               ],
               [
                  "Oficjalny przewodnik {PL}",
                  "https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Polish.pdf",
               ],
               [
                  "Scrum vs Kanban – krótki przewodnik po metodykach zwinnych {PL}",
                  "https://www.sparkbit.pl/pl/scrum-vs-kanban-krotki-przewodnik-metodykach-zwinnych/",
               ],
            ],
            projects: [],
         },
         {
            name: "Kanban",
            type: "other",
            fullName: "",
            description:
               "Metoda ta została opracowana już w latach pięćdziesiątych do sterowania produkcją, jednak obecnie została zaadaptowana na potrzeby skutecznego wytwarzania oprogramowania. Opiera się na takich zasadach jak wizualizacja postępów prac, ograniczeniu ilości zadań do wykonania oraz na systematycznej analizie i optymalizacji procesów. Kanban w odróżnieniu od Scrum nie nakazuje pracować w określonych limitach czasu, tworzenia zespołów wielofunkcyjnych, a także nie określa z góry takich ról jak np. Product Owner.",
            links: [
               [
                  "Kanban vs. scrum: which agile are you? {EN}",
                  "https://www.atlassian.com/agile/kanban/kanban-vs-scrum",
               ],
               [
                  "Scrum vs Kanban – krótki przewodnik po metodykach zwinnych {PL}",
                  "https://www.sparkbit.pl/pl/scrum-vs-kanban-krotki-przewodnik-metodykach-zwinnych/",
               ],
            ],
            projects: [],
         },
         {
            name: "Trello",
            type: "other",
            fullName: "",
            description:
               "Trello to narzędzie do zarządzania projektami, które pozwala na uporządkowanie ich w formie bardzo czytelnych tablic. Aplikacja jednym rzutem oka informuje o tym, kto i nad czym pracuje, a także na jakim etapie znajduje się dane zadanie. Umożliwia instalowanie przydatnych wtyczek m.in. integrujących z innymi narzędziami takimi jak Slack czy Jira.",
            links: [
               ["Oficjalna strona {PL}", "https://trello.com/pl"],
               ["[Kimberly Ann Jimenez] How To Use TRELLO for Beginners + Workflow Examples {EN}", "https://www.youtube.com/watch?v=6drUzoeHZkg"],
            ],
            projects: [],
         },
         {
            name: "MS Excel",
            type: "other",
            fullName: "Microsoft Excel",
            description:
               "Wiodące na rynku oprogramowanie stosowane do wykonywania obliczeń zestawionych w formie tabelarycznej. Posiada liczne funkcje matematyczne, finansowe i bazodanowe, a także półautomatyczne powielanie tworzonych formuł. Jest również bardzo przydatny w generowaniu wykresów, w licznych wariantach. ",
            links: [
               [
                  "Oficjalna strona {PL}",
                  "https://www.microsoft.com/pl-pl/microsoft-365/excel",
               ],
               [
                  "[freeCodeCamp.org] Microsoft Excel Tutorial for Beginners {EN}",
                  "https://www.youtube.com/watch?v=Vl0H-qTclOg",
                  "yt",
               ],
            ],
            projects: [],
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
      thxMessage1: 'Dzięki za wiadomość.',
      thxMessage2: 'Odpiszę najszybciej jak to możliwe.',
   },
   about: {
      header: "O mnie",
      paragraph1:
         "Witaj, nazywam się Damian Duszyński. Mieszkam i pracuję w Poznaniu. Jestem Frontend Developerem, a także pasjonatem projektowania UX/UI i technologii webowych.",
      paragraph2:
         "Poszukuję nowych możliwości pracy z produktami cyfrowymi, które rozwiązują realne problemy dbając przy tym o świetne doświadczenia dla użytkowników. Prywatnie fan piłki nożnej i jazdy na rowerze.",
      expHeader: "Doświadczenie zawodowe:",
      eduHeader: "Edukacja:",
      experience: [
         {
            topHeader: "Lip 2019 -> Obecnie",
            bottomHeader: "Frontend Developer [PrintXL]",
            paragraphs: [
               "Stworzenie i rozwijanie strony internetowej dla wielkoformatowej drukarni cyfrowej opartej o framework Gatsby i system zarządzania treścią Contentful.",
               "Wykorzystane technologie: HTML / SCSS / JavaScript / React / Gatsby / Node.js / GraphQL / Contentful (Headless CMS).",
            ],
         },
         {
            topHeader: "Lip 2019 -> Obecnie",
            bottomHeader: "Research & Development Manager [PrintXL]",
            paragraphs: [
               "Współtworzenie i rozwijanie systemu do zarządzania produkcją w firmie opartego o C# / SQL / MS Excel. System składa się z paneli dla liderów każdego działu oraz dashboardu dla managerów.",
               "Tworzenie i wdrażanie nowych produktów wraz z analizą rynku, kalkulacją kosztów oraz doborem optymalnych materiałów.",
               "Przygotowywanie raportów oraz stała współpraca z zarządem, działami sprzedaży, planowania, logistyki i produkcji.",
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
            topHeader: "Wrz 2020 -> Obecnie",
            bottomHeader: "Coaching & Mentoring",
            paragraphs: [
               "Współpraca z dwoma doświadczonymi mentorami IT w zakresie rozwoju umiejętności miekkich i technicznych.",
            ],
         },
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
   footer: {
      contact: "Kontakt",
      toTheTop: "Przewiń na górę",
   }
};

export default textContent;
