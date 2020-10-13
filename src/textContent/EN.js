import photo1 from '../assets/bigfive.png'
import photo2 from '../assets/printxl.png'

const textContent = {
   navigation: [
      ["Home", "/"], 
      ["Projects", "/projects"], 
      ["Contact", "/contact"], 
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
            nazwa: "Projekt 1",
            rodzaj: "dev",
            opis: "Opis 11",
            photo: photo1
         },
         {
            nazwa: "Projekt 2",
            rodzaj: "dev",
            opis: "Opis 22",
            photo: photo2
         },
      ],
      listOfPlayground: [
         {
            nazwa: "Playground 1",
            rodzaj: "dev",
            opis: "Opis 1",
            photo: photo1
         },
         {
            nazwa: "Playground 2",
            rodzaj: "design",
            opis: "Opis 3",
            photo: photo2
         },
      ],
   },
   technologies: {
      HTML: "HTML (ang. HyperText Markup Language) – hipertekstowy język znaczników, wykorzystywany do tworzenia dokumentów hipertekstowych.", 
      CSS: "Kaskadowe arkusze stylów (ang. Cascading Style Sheets, w skrócie CSS) – język służący do opisu formy prezentacji (wyświetlania) stron WWW. CSS został opracowany przez organizację W3C w 1996 r. jako potomek języka DSSSL przeznaczony do używania w połączeniu z SGML-em. Pierwszy szkic CSS zaproponował w 1994 r. Håkon Wium Lie[1].",
      JS: "JavaScript (w skrócie JS) – skryptowy język programowania, stworzony przez firmę Netscape, najczęściej stosowany na stronach internetowych. Twórcą JavaScriptu jest Brendan Eich[4]. W połowie lat 90. XX wieku organizacja ECMA wydała na podstawie JavaScriptu standard języka skryptowego o nazwie ECMAScript, aktualnie rozwijaniem tego standardu zajmuje się komisja TC39[5]."
   }
}

export default textContent;