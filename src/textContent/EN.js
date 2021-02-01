import photo1 from '../assets/bigfive.png'
import photo2 from '../assets/printxl.png'

const textContent = {
   navigation: [
      ["Projects", "/projects"],
      ["Materials", "/materials"],
      ["Contact", "/#contact"],
      ["About Me", "/about"]
   ],
   hero: [
      "Hello, I'm Damian.",
      "Frontend Developer and UX enthusiast.",
      "I would like to present my works, snippets and technologies that I used."
   ],
   projects: {
      title: "Projekty",
      listOfProjects: [
         {
            nazwa: "Kanbanator",
            rodzaj: "dev",
            opis: "The project facilitates project management in the Kanban methodology. It allows you to set up your own account, create boards and group tasks in them.",
            photo: photo1,
            link: '/projects/kanbanator'
         },
         {
            nazwa: "Projekt 2",
            rodzaj: "dev",
            opis: "Website redesign for the needs of a large-format printing house. The main goal was to present a rich offer and easier access to technical specifications.",
            photo: photo2,
            link: '/projects/pxl'
         },
         {
            nazwa: "BigFive",
            rodzaj: "dev",
            opis: "It resulted from my passion for football and idea of creating a page which would alow to view the results and statistics of the five largest leagues in the world.",
            photo: photo2,
            link: '/projects/big-five'
         },
      ],
   },
   technologies: {
      header: "Narzędzia i technologie",
      subheaders: ["Development", "Design", "Pozostałe"],
      HTML: "HTML (ang. HyperText Markup Language) – hipertekstowy język znaczników, wykorzystywany do tworzenia dokumentów hipertekstowych.",
      CSS: "Kaskadowe arkusze stylów (ang. Cascading Style Sheets, w skrócie CSS) – język służący do opisu formy prezentacji (wyświetlania) stron WWW. CSS został opracowany przez organizację W3C w 1996 r. jako potomek języka DSSSL przeznaczony do używania w połączeniu z SGML-em. Pierwszy szkic CSS zaproponował w 1994 r. Håkon Wium Lie[1].",
      JS: "JavaScript (w skrócie JS) – skryptowy język programowania, stworzony przez firmę Netscape, najczęściej stosowany na stronach internetowych. Twórcą JavaScriptu jest Brendan Eich[4]. W połowie lat 90. XX wieku organizacja ECMA wydała na podstawie JavaScriptu standard języka skryptowego o nazwie ECMAScript, aktualnie rozwijaniem tego standardu zajmuje się komisja TC39[5]."
   },
   contact: {
      header: "Contact",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendMessageButton: "Send your message",
   },
   materials: {
      header: "Recommended materials",
      mainParagraph: [
         "Here you will find a collection of materials that I consider valuable in learning the following technologies.",
         "From official documentation to games, articles and courses explaining their intricacies."
      ],

   }
}

export default textContent;