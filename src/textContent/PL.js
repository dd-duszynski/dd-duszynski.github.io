import pxlHero from "../assets/pxlHero.png";
import pxl1 from "../assets/pxl1.JPG";
import pxl2 from "../assets/pxl2.JPG";
import pxl3 from "../assets/pxl3.JPG";
import pxl4 from "../assets/pxl4.JPG";
import pxl5 from "../assets/pxl5.JPG";
import bigFiveHero from "../assets/bigFiveHero.png";
import bigFive1 from "../assets/bigFive1.JPG";
import bigFive2 from "../assets/bigFive2.JPG";
import bigFive3 from "../assets/bigFive3.JPG";
import bigFive4 from "../assets/bigFive4.JPG";
import kanbanatorHero from "../assets/kanbanatorHero.png";
import kanbanator1 from "../assets/kanbanator1.JPG";
import kanbanator2 from "../assets/kanbanator2.JPG";
import kanbanator3 from "../assets/kanbanator3.JPG";

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
		roleInfo: "Rola: ",
		descriptionInfo: "Opis: ",
		technologyInfo: "Wykorzystane technologie: ",
		screens: "Ekrany: ",
		listOfProjects: [
			{
				title: "PrintXL",
				role: "Development & Design",
				shortDescription:
					"Redesign strony dla cyfrowej drukarni wielkoformatowej. Głównym celem było przedstawienie bogatej oferty i łatwiejszy dostęp do instrukcji dla klienta.",
				description:
					[
                  "Redesign strony dla cyfrowej drukarni wielkoformatowej. Głównym celem było przedstawienie bogatej oferty i łatwiejszy dostęp do instrukcji dla klienta.",
                  "Redesign strony dla cyfrowej drukarni wielkoformatowej. Głównym celem było przedstawienie bogatej oferty i łatwiejszy dostęp do instrukcji dla klienta.",
                  "Redesign strony dla cyfrowej drukarni wielkoformatowej. Głównym celem było przedstawienie bogatej oferty i łatwiejszy dostęp do instrukcji dla klienta.",
            ],
				photos: [pxlHero, pxl1, pxl2, pxl3, pxl4, pxl5],
				link: "/projects/pxl",
			},
			{
				title: "Kanbanator",
				role: "Development & Design",
				shortDescription:
					"Projekt ułatwiający zarządzanie projektami w metodyce Kanban. Umożliwia założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
				description:
					[
                  "Projekt ułatwia zarządzanie projektami w metodyce Kanban. Umożliwia założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
                  "Projekt ułatwia zarządzanie projektami w metodyce Kanban. Umożliwia założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
                  "Projekt ułatwia zarządzanie projektami w metodyce Kanban. Umożliwia założenie własnego konta, tworzenia tablic i grupowania w nich zadań.",
               ],
				photos: [kanbanatorHero, kanbanator1, kanbanator2, kanbanator3],
				link: "/projects/kanbanator",
			},
			{
				title: "BigFive",
				role: "Development & Design",
				shortDescription:
					"Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu największych lig świata.",
				description:
					[
                  "Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu największych lig świata.",
                  "Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu największych lig świata.",
                  "Projekt wynika z pasji do piłki nożnej i pomysłu stworzenia strony, która umożliwia przeglądanie wyników i statystyk pięciu największych lig świata.",
            ],
				photos: [bigFiveHero, bigFive1, bigFive2, bigFive3, bigFive4],
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
					["Kurs JS [PL]", "https://kursjs.pl/"],
					["JAVASCRIPT.INFO", "https://javascript.info/"],
					[
						"Mozilla - MDN Web Docs",
						"https://developer.mozilla.org/pl/docs/Web/JavaScript",
					],
					[
						"[Traversy Media] JavaScript Crash Course For Beginners",
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
					"HTML to hipertekstowy język znaczników. Pozwala opisać strukturę informacji zawartych wewnątrz strony, nadając jej odpowiednie znaczenie semantyczne. Tworzy akapity, nagłówki, listy czy hiperłącza (linki). Pozwala również osadzać w dokumencie pliki multimedialne, jak filmy czy zdjęcia. Każda przeglądarka ma zdefiniowany domyślny wygląd tych elementów, a do jego zmiany używa się CSS.",
				links: [
					[
						"Mozilla - MDN Web Docs",
						"https://developer.mozilla.org/pl/docs/Web/HTML",
					],
					[
						"HTML Crash Course For Absolute Beginners [Traversy Media]",
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
						"Mozilla - MDN Web Docs",
						"https://developer.mozilla.org/pl/docs/Web/CSS",
					],
					["CSS Tricks", "https://css-tricks.com/"],
					[
						"Traversy Media - CSS Crash Course For Absolute Beginners",
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
					"SASS to pre-procesor CSS, który rozszerza jego możliwości m.in. o korzystanie ze zmiennych, zagnieżdzanie reguł, tworzenie funkcji czy mixinów. Funkcjonalności te potrafia znacznie ułatwić developerom prace, dlatego Sass od lat cieszy się dużą popularnością.",
				links: [
					["Sass - Official Website", "https://sass-lang.com/"],
					[
						"[Traversy Media] - Sass Crash Course",
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
					"Niezwykle popularna deklaratywna biblioteka stworzona przez programistów Facebooka. Umożliwia tworzenie bardzo złożonych interfejsów, dzieląc je na małe, reużywalne komponenty, które mogą posiadać własny stan. Obecnie wykorzystywana jest zarówno po stronie przeglądarki, serwera dzięki Node.js, jak również w aplikacjach mobilnych, dzięki React Native. Korzysta z techniki Virtual DOM, która aktualizuje zmiany tylko tam, gdzie faktycznie wystąpiły, co pozwala płynnie rerenderować interfejs.",
				links: [
					["React - Official", "https://pl.reactjs.org/"],
					[
						"Traversy Media - React JS Crash Course 2021",
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
					"React'owy framework UI opierający się na stworzonym przez Google - Material Design. Udostępnia zbiór gotowych do użycia komponentów, takich jak przyciski, elementy formularzy, rozwijane listy i wiele innych. Pozwala szybko zbudować spójny wizualnie interfejs, który oparty jest na sprawdzonym przez miliony użytkowników Design Systemie.",
				links: [
					[
						"MATERIAL-UI - Official Website",
						"https://material-ui.com/",
					],
					[
						"Traversy Media - Material UI React Tutorial",
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
					"Redux to otwarta biblioteka do zarządzania stanem aplikacji w przewidywalny i łatwy do przetestowania sposób. Głównym założeniem jest Single source of truth - tzn. stan całej aplikacji jest przechowywany w jednym miejscu zwanym 'store'. Kolejne założenie to jednokierunkowy przepływ danych, mówiący o tym, że stan jest tylko do odczytu, natomiast za jego zmianę odpowiada 'reducer', który jest wywoływany przez tzw 'akcje'. Akcja jest obiektem, który opisuje zmianę do wykonania. Podejście to daje pewność, że stan nie zostanie zmieniony w niekontrolowany sposób.",
				links: [
					["Redux - Official", "https://redux.js.org/"],
					[
						"Traversy Media - React JS Crash Course 2021",
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
					"Gatsby to framework rozszerzający możliwości Reacta. Pozwala na generowanie statycznych stron internetowych zoptymalizowanych pod katem szybkości i SEO. Umożliwia robotom wyszukiwarek odczytanie i zaindeksowanie całej treści strony, co było problemem 'czystego' Reacta. Gatsby oferuje również wiele wtyczek pomagających developerom m.in. w pobieraniu danych z systemów CMS, tworzeniu responsywnych i zoptymalizowanych obrazków czy integracji z usługami marketingowymi, takimi jak Google Analytics.",
				links: [
					["Gatsby - Official Website", "https://www.gatsbyjs.com/"],
					[
						"Gatsby JS - dlaczego warto stworzyć stronę w oparciu o ten framework?",
						"https://smartbees.pl/blog/dlaczego-warto-stworzyc-strone-w-oparciu-o-gatsby-js",
					],
					[
						"Traversy Media - Gatsby JS Crash Course",
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
					["Node - Official", "https://nodejs.dev/learn"],
					[
						"Traversy Media - Node.js Crash Course",
						"https://www.youtube.com/watch?v=fBNz5xF-Kx4",
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
					["MySQL - Official", "https://www.mysql.com/"],
					[
						"Programming with Mosh - MySQL Tutorial for Beginners",
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
					"Git to system kontroli wersji, oprogramowanie służące do śledzenia zmian w kodzie źródłowym programu. Umożliwia korzystanie z historii zapisanych zmian i powrotu do wcześniejszej wersjiw razie potrzeby. Ponadto daje możliwość rozgałęziania projektu na potrzeby rozwijania nowych funkcjonalności oraz przechowywania kodu w zdalnym repozytorium, co znacznie ułatwia pracę zespołową.",
				links: [
					["Strona oficjalna", "https://git-scm.com/"],
					[
						"Traversy Media - Git & GitHub Crash Course For Beginners",
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
					"Darmowy edytor kodu źródłowego dla wielu języków programowania. Zwiększa czytelność oraz ułatwia pracę z kodem poprzez kolorowanie składni, automatyczne uzupełnianie, system podpowiedzi, możliwość debugowania czy zarządzanie wersjami za pośrednictwem GIT. Umożliwia instalowanie dodatkowych rozszerzeń zwiększających podstawowe funkcjonalności aplikacji.",
				links: [
					[
						"Visual Studio Code - Official Website",
						"https://code.visualstudio.com/",
					],
					[
						"[Adrian Twarog] VS Code Extensions you absolutely need in 2021",
						"https://www.youtube.com/watch?v=qWNj3tfVjWI",
						"yt",
					],
					[
						"[Academing] Visual Studio Code Tutorial for Beginners - Introduction",
						"https://www.youtube.com/watch?v=VqCgcpAypFQ",
						"yt",
					],
				],
				projects: ["PrintXL", "Kanbanator", "BigFive"],
			},
			{
				name: "Figma",
				type: "design",
				fullName: "",
				description:
					"Nowoczesne i cięszące się rosnącą popularnością narzędzie do tworzenia prototypów stron internetowych i aplikacji mobilnych. Umożliwia tworzenie interaktywnych widoków, a także współpracę w trybie online. Ceniony za szybkość działania, prostotę oraz funkcjonalność.",
				links: [
					["Figma Official Website", "https://www.figma.com/"],
					[
						"[DesignCourse] The Figma 2021 Crash Course by Example",
						"https://www.youtube.com/watch?v=Gu1so3pz4bA",
						"yt",
					],
					[
						"[freeCodeCamp.org] UI / UX Design Tutorial – Wireframe, Mockup & Design in Figma",
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
					"Narzędzie ze stajni Adobe, podobnie jak Figma służy do tworzenia interaktywnych prototypów stron internetowych i aplikacji mobilnych. Przeznaczone jest szczególnie dla projektantów UX/UI. Daje możliwość pracy w grupie, posiada bardzo przyjazny interfejs.",
				links: [
					[
						"Oficjalna strona produktu",
						"https://www.adobe.com/pl/products/xd.html",
					],
					[
						"[DesignCourse] Adobe XD Crash Course",
						"https://www.youtube.com/watch?v=3rQ-eTmWah0",
						"yt",
					],
					[
						"[Envato Tuts+] UX Design Course with Adobe XD",
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
					"Program graficzny będący flagowym produktem firmy Adobe. Głównie wykorzystywany do tworzenia i obróbki grafiki rastrowej. Udostępnia mnóstwo funkcjonalności od edycji zdjęć, retuszowania i tworzenia kompozycji do malowania cyfrowego, animacji i projektowania grafiki.",
				links: [
					[
						"Oficjalna strona produktu",
						"https://www.adobe.com/pl/products/illustrator.html",
					],
					[
						"[Envato Tuts+] Adobe Illustrator for Beginners",
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
						"Oficjalna strona produktu",
						"https://www.adobe.com/pl/products/illustrator.html",
					],
					[
						"[Envato Tuts+] Adobe Illustrator for Beginners",
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
					"Designer to stosunkowo młody produkt Affinity. Program służy do tworzenia grafiki wektorowej, przygotowany specjalnie dla projektantów. Możliwościami nie odbiega od Illustrator'a, jednak atrakcyjna cena i wiele ciekawych rozwiązań, stawiają go w roli głównego konkurenta.",
				links: [
					[
						"Oficjalna strona produktu",
						"https://affinity.serif.com/en-us/designer/",
					],
					[
						"[Envato Tuts+] Affinity Designer Quick Start",
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
						"Oficjalna strona produktu",
						"https://affinity.serif.com/en-us/publisher/",
					],
					[
						"[Affinity Revolution] Tutorial For Beginners",
						"https://www.youtube.com/watch?v=py6fqmvlaqY",
						"yt",
					],
				],
				projects: [],
			},
			{
				name: "UX Design",
				type: "other",
				fullName: "User Experience Design",
				description:
					"User experience odnosi się do projektowania wrażeń użytkownika we wszystkich punktach styku z produktem. Szczególną uwagę zwraca się na takie aspekty jak: użyteczność, intuicyjność, łatwość obsługi i ogólną satysfakcje. UX jest bardzo szeroką i interdyscyplinarną dziedziną. W całym procesie ważną rolę odgrywa badanie potrzeb, tworzenie prototypów, testowanie użyteczności, tworzenie zrozumiałej architektury informacj, ciągłe weryfikowanie obranej ścieżki, a także dbanie o potrzeby biznesowe.",
				links: [["UX Magazine", "https://uxmag.com/"]],
				projects: [],
			},
			{
				name: "UI Design",
				fullName: "User Interface Design",
				type: "other",
				description:
					"Interfejs to płaszczyzna, na której dochodzi do interakcji między użytkownikiem, a produktem. Celem projektowania UI jest uczynienie interakcji tak prostej, jak to tylko możliwe, pod względem realizacji celów. Najlepsze interfejsy są dla niego tak łatwe w użyciu, że sprawiają wrażenie niewidocznych.",
				links: [["UX Magazine", "https://uxmag.com/"]],
				projects: [],
			},
			{
				name: "Scrum",
				fullName: "",
				type: "other",
				description:
					"Iteracyjne i przyrostowe ramy postępowania (ang. framework). Wykorzystywany w pracy nad projektami opartymi o metodyki zwinne, zgodne z manifestem Agile. Praca nad produktem podzielona jest na iteracje, zwane sprintami. Realizacja projektu według Scrum skupia się na dostarczaniu kolejnych, coraz bardziej dopracowanych wyników projektu, włączaniu się w proces wytwórczy przyszłych użytkowników, a także samoorganizacji zespołu projektowego.",
				links: [
					[
						"Oficjalna strona",
						"https://www.scrum.org/resources/what-is-scrum",
					],
					[
						"Oficjalny przewodnik [PL]",
						"https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Polish.pdf",
					],
				],
				projects: [],
			},
			{
				name: "Kanban",
				type: "other",
				fullName: "",
				description: "Kanban",
				links: [
					["xx", "https://developer.mozilla.org/pl/docs/Web/CSS"],
					["CSS Tricks", "https://css-tricks.com/"],
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
					["xx", "https://developer.mozilla.org/pl/docs/Web/CSS"],
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
						"Microsoft Official Website",
						"https://www.microsoft.com/pl-pl/microsoft-365/excel",
					],
					[
						"[freeCodeCamp.org] Microsoft Excel Tutorial for Beginners",
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
