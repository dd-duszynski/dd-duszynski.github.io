import photo1 from '../assets/bigfive.png'
import photo2 from '../assets/printxl.png'

const textContent = {
   navigation: [
      ["Strona Główna", "/"],
      ["Projekty", "/projects"],
      ["Kontakt", "/contact"],
      ["O mnie", "/about"]
   ],
   hero: [
      "Witaj. Nazywam się Damian.",
      "Jestem entuzjastą Web Developmentu oraz szeroko pojętego UX/UI.",
      "Chciałbym zaprezentować Ci swoje prace, snippety oraz technologie, których używam."
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
   }

}


export default textContent;