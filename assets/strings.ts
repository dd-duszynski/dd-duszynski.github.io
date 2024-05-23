import { IStrings } from '@/models/strings';
import pxlHero from '../public/images/pxlHero.png';
import pxl0 from '../public/images/pxl_rwd_0.png';
import pxl1 from '../public/images/pxl_rwd_1.png';
import pxl2 from '../public/images/pxl_rwd_2.png';

const strings: IStrings = {
  navigation: [
    ['Main Page', '/'],
    ['About Me', '/about'],
    ['Projects', '/#projects'],
    ['Contact', '/#contact'],
  ],
  hero: [
    'Hi, my name is Damian Duszyński. More about me ',
    'here',
    'I am a Front-end Developer and UX/UI design enthusiast, specializing in React.js and TypeScript. You will find here a description of my projects and technologies that I use.',
    'Feel free to ',
    'contact me',
  ],
  posts: {
    title: 'Posts',
    description:
      'List of posts on web development and broadly understood technology.',
  },
  projects: {
    title: 'Projects',
    roleInfo: 'Role: ',
    descriptionInfo: 'Description: ',
    description2Info: 'Technologies description: ',
    technologyInfo: 'Technologies: ',
    screens: 'Screens: ',
    homeLink: 'Back to homepage',
  },
  technologies: {
    header: 'Tools & technology',
    subheaders: ['Development', 'Design', 'Others'],
    seeMore: 'Find out more',
    learnMore: 'Recommended links',
  },
  listOfTechnologies: [
    {
      name: 'HTML',
      fullName: 'HyperText Markup Language',
      type: 'development',
      description:
        'HTML is a hypertext markup language. It allows you to describe the structure of the information contained within the page, giving it the appropriate semantic meaning. Creates paragraphs, headings, lists and hyperlinks (links). It also allows you to embed multimedia files in the document, such as movies or photos. the appearance of these elements is defined and CSS is used to change it. ',
      links: [
        [
          'Mozilla - MDN Web Docs ',
          'https://developer.mozilla.org/pl/docs/Web/HTML',
        ],
        [
          '[Traversy Media] - HTML Crash Course For Absolute Beginners',
          'https://www.youtube.com/watch?v=UB1O30fR-EE',
          'yt',
        ],
      ],
      projects: ['PXL', 'Kanbanator', 'BigFive'],
    },
    {
      name: 'CSS',
      fullName: 'Cascading Style Sheets',
      type: 'development',
      description:
        'CSS is a code used to define the appearance of a website. It is used, among others, for positioning elements, setting their size and colors, as well as animating them. It allows you to change these properties depending on the resolution and orientation of the device on which they are displayed, and even the way they are to be printed. CSS combined with JavaScript language allows you to create visually advanced and fully interactive pages. ',
      links: [
        [
          'Mozilla - MDN Web Docs ',
          'https://developer.mozilla.org/pl/docs/Web/CSS',
        ],
        ['CSS Tricks ', 'https://css-tricks.com/'],
        [
          '[Traversy Media] - CSS Crash Course For Absolute Beginners',
          'https://www.youtube.com/watch?v=yfoY53QXEnI',
          'yt',
        ],
      ],
      projects: ['PXL', 'Kanbanator', 'BigFive'],
    },
    {
      name: 'Sass',
      fullName: 'Syntactically Awesome Style Sheets',
      type: 'development',
      description:
        'Sass is a CSS pre-processor that extends its capabilities, including the possibility of using variables, nesting rules, creating functions or mixins. These functionalities can significantly facilitate the work of developers, which is why Sass has been very popular for years.',
      links: [
        ['Official page', 'https://sass-lang.com/'],
        [
          '[Traversy Media] - Sass Crash Course ',
          'https://www.youtube.com/watch?v=nu5mdN2JIwM',
          'yt',
        ],
      ],
      projects: ['PXL', 'BigFive'],
    },
    {
      name: 'JavaScript',
      fullName: '',
      type: 'development',
      description:
        'One of the most popular and universal programming languages. It is mainly used to create websites and web applications, but thanks to Node.js it is also used outside browsers. JS is an object-oriented language, based on prototypes, many paradigms and dynamic syntax. ',
      links: [
        ['JAVASCRIPT.INFO ', 'https://javascript.info/'],
        [
          '[Traversy Media] - JavaScript Crash Course For Beginners ',
          'https://www.youtube.com/watch?v=hdI2bqOjy3c',
          'yt',
        ],
      ],
      projects: ['PXL', 'Kanbanator', 'BigFive'],
    },
    {
      name: 'TypeScript',
      fullName: '',
      type: 'development',
      description:
        'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. It allows you to catch many errors while writing the code.',
      links: [
        ['Official page', 'https://www.typescriptlang.org/'],
        [
          '[Traversy Media] - TypeScript Crash Course',
          'https://www.youtube.com/watch?v=BCg4U1FzODs',
          'yt',
        ],
      ],
      projects: [''],
    },
    {
      name: 'React',
      type: 'development',
      fullName: '',
      description:
        'Extremely popular declarative library created by Facebook developers. It allows you to create very complex interfaces, dividing them into smaller, reusable components that can have their own state. Currently, React is used both on the browser and server side thanks to Node.js, as well as in mobile applications , thanks to React Native. It uses the Virtual DOM technique, which only updates changes where they actually occurred, allowing you to smoothly re-render the user interface.',
      links: [
        ['Official page', 'https://reactjs.org/'],
        [
          '[Traversy Media] - React JS Crash Course 2021 ',
          'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
          'yt',
        ],
      ],
      projects: ['PXL', 'Kanbanator', 'BigFive'],
    },
    {
      name: 'Redux',
      fullName: '',
      type: 'development',
      description:
        "Redux is an open library for managing the state of applications in a predictable and easy-to-test manner. One of the main assumptions is Single source of truth, which assumes that the state of the entire application is stored in one place called the 'store'. Moreover, one-way data flow tells about this. that the state is read-only, but the 'reducer' is responsible for its change, which is triggered by the so-called 'actions'. An action is an object that describes the change to be performed.",
      links: [
        ['Official page', 'https://redux.js.org/'],
        [
          '[Traversy Media] - React JS Crash Course 2021 ',
          'https://www.youtube.com/watch?v=93p3LxR9xfM',
          'yt',
        ],
      ],
      projects: ['Kanbanator'],
    },
    {
      name: 'Next',
      type: 'development',
      fullName: '',
      description:
        'The React Framework for the Web. Used by some of the worlds largest companies, Next.js enables you to create high-quality web applications with the power of React components.',
      links: [
        ['Official page', 'https://nextjs.org/'],
        [
          '[JavaScript Mastery] - Next.js 14 Full Course 2024 ',
          'https://youtu.be/wm5gMKuwSYk?si=L09tz2MKrt-sxRDC',
          'yt',
        ],
      ],
      projects: ['PXL', 'Kanbanator', 'BigFive'],
    },
    {
      name: 'Gatsby',
      type: 'development',
      fullName: '',
      description:
        "Gatsby is a framework that extends React's capabilities. It allows you to generate static websites optimized for speed and SEO. The generated static pages allow search engine robots to read and index the entire content of the page, which was a problem with 'pure' React. Gatsby also offers many plugins to help developers m etc. in downloading data from CMS systems, creating responsive and optimized images or integrating with marketing services such as Google Analytics. ",
      links: [
        ['Official page', 'https://www.gatsbyjs.com/'],
        [
          '[Traversy Media] - Gatsby JS Crash Course ',
          'https://www.youtube.com/watch?v=6YhqQ2ZW1sc',
          'yt',
        ],
      ],
      projects: ['PXL'],
    },
    {
      name: 'Node',
      type: 'development',
      fullName: '',
      description:
        "Node.js is a cross-platform runtime which has allowed JavaScript to be used in a non-browser environment. Contributed to the 'JavaScript everywhere' paradigm. Node.js uses an event-based, non-blocking input / output (I / O) model. it was written in C ++ based on the V8 engine used in Google Chrome. It is a good solution for cross-device and data-intensive applications.",
      links: [
        ['Official page', 'https://nodejs.dev/learn'],
        [
          '[Traversy Media] - Node.js Crash Course ',
          'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
          'yt',
        ],
      ],
      projects: ['PXL', 'Kanbanator', 'BigFive'],
    },
    {
      name: 'Express',
      type: 'development',
      fullName: '',
      description:
        "According to the creators of Express.js, it is a fast and minimalistic framework for Node.js, which greatly simplifies the creation of a server application, its configuration, and the handling of HTTP requests for various paths. a client's request on many levels before it returns the expected result. These are very often Express.js compatible libraries for working with files, cookies, sessions or URL parameters.",
      links: [
        ['Official page', 'https://expressjs.com/'],
        [
          '[Traversy Media] - Express JS Crash Course ',
          'https://www.youtube.com/watch?v=L72fhGm1tfE',
          'yt',
        ],
      ],
      projects: ['PXL', 'Kanbanator', 'BigFive'],
    },
    {
      name: 'MySQL',
      type: 'development',
      fullName: '',
      description:
        'MySQL is a very popular system for managing relational databases. These databases are a collection presented in the form of tables, each of which is linked to a different attribute of at least one. This is called relationships, which are characteristic of relational databases. MySQL provides a number of methods. and functions that make working with this data much easier.',
      links: [
        ['Official page', 'https://www.mysql.com/'],
        [
          '[Programming with Mosh] - MySQL Tutorial for Beginners ',
          'https://www.youtube.com/watch?v=7S_tz1z_5bA',
          'yt',
        ],
      ],
      projects: ['Kanbanator'],
    },
    {
      name: 'Git',
      type: 'development',
      fullName: '',
      description:
        'Git is a version control system, software for tracking changes in the source code of a program. It allows you to use the history of saved changes and, if necessary, return to previous versions. team work. ',
      links: [
        ['Official page', 'https://git-scm.com/'],
        [
          '[Traversy Media] - Git & GitHub Crash Course For Beginners ',
          'https://www.youtube.com/watch?v=SWYqp7iY_Tc',
          'yt',
        ],
      ],
      projects: ['PXL', 'Kanbanator', 'BigFive'],
    },
    {
      name: 'VSC',
      fullName: 'Visual Studio Code',
      type: 'development',
      description:
        'Free source code editor for many programming languages. Increases readability and facilitates working with the code through syntax highlighting, auto-completion, hint system, debugging (error checking) or version management via GIT. It allows you to install additional extensions increasing the basic functionality of the application.',
      links: [
        ['Official page', 'https://code.visualstudio.com/'],
        [
          '[Academing] Visual Studio Code Tutorial for Beginners - Introduction ',
          'https://www.youtube.com/watch?v=VqCgcpAypFQ',
          'yt',
        ],
        [
          '[Adrian Twarog] VS Code Extensions you absolutely need in 2021 ',
          'https://www.youtube.com/watch?v=qWNj3tfVjWI',
          'yt',
        ],
      ],
      projects: ['PXL', 'Kanbanator', 'BigFive'],
    },
    {
      name: 'UX Design',
      type: 'design',
      fullName: 'User Experience Design',
      description:
        'User experience refers to the design of the user experience at all points of contact with the product. Particular attention is paid to aspects such as: usability, intuitiveness, ease of use and overall satisfaction. UX is a very broad and interdisciplinary field. Research plays an important role in the whole process. needs, creating prototypes, usability testing, creating an understandable information architecture, constantly verifying the chosen path, as well as taking care of business needs.',
      links: [['UX Magazine ', 'https://uxmag.com/']],
      projects: ['PXL', 'BigFive'],
    },
    {
      name: 'UI Design',
      fullName: 'User Interface Design',
      type: 'design',
      description:
        'The interface is the plane where the interaction between the user and the product takes place. The goal of UI design is to make the interaction as simple as possible in terms of achieving the goals. It is said that the best interfaces are so easy to use as to give the impression of Nielsen heuristics, which are a set of general usability rules (link below), can be very helpful in UI design. ',
      links: [
        ['Smashing Magazine ', 'https://www.smashingmagazine.com/'],
        ['awwards. ', 'https://www.awwwards.com/'],
        [
          'Heurystyki Nielsena ',
          'https://www.nngroup.com/articles/ten-usability-heuristics/#poster',
        ],
      ],
      projects: ['PXL', 'BigFive'],
    },
    {
      name: 'Figma',
      type: 'design',
      fullName: '',
      description:
        'A modern and increasingly popular tool for prototyping websites and applications. It enables the creation of interactive views as well as online collaboration. Figma is valued for its speed, simplicity and functionality.',
      links: [
        ['Official page', 'https://www.figma.com/'],
        [
          '[DesignCourse] The Figma 2021 Crash Course by Example ',
          'https://www.youtube.com/watch?v=Gu1so3pz4bA',
          'yt',
        ],
        [
          '[freeCodeCamp.org] UI / UX Design Tutorial – Wireframe, Mockup & Design in Figma ',
          'https://www.youtube.com/watch?v=c9Wg6Cb_YlU',
          'yt',
        ],
      ],
      projects: [],
    },
    {
      name: 'Adobe XD',
      type: 'design',
      fullName: '',
      description:
        'The tool from the Adobe stable, just like Figma, is used to create interactive prototypes of websites and applications. XD is designed especially for UX/UI designers. It gives the possibility of teamwork, integration with other Adobe tools and has a very friendly interface.',
      links: [
        ['Official page', 'https://www.adobe.com/products/xd.html'],
        [
          '[DesignCourse] Adobe XD Crash Course ',
          'https://www.youtube.com/watch?v=3rQ-eTmWah0',
          'yt',
        ],
        [
          '[Envato Tuts+] UX Design Course with Adobe XD ',
          'https://www.youtube.com/watch?v=68w2VwalD5w',
          'yt',
        ],
      ],
      projects: ['PXL', 'BigFive'],
    },
    {
      name: 'Adobe Photoshop',
      type: 'design',
      fullName: '',
      description:
        'Graphics program which is the flagship product of Adobe. Mainly used for creating and processing raster graphics (colloquially bitmaps). It provides a whole range of functionalities from basic photo editing, retouching and creating photomanipulation to digital painting.',
      links: [
        ['Official page', 'https://www.adobe.com/products/illustrator.html'],
        [
          '[Envato Tuts+] Adobe Illustrator for Beginners ',
          'https://www.youtube.com/watch?v=Ib8UBwu3yGA',
          'yt',
        ],
      ],
      projects: [],
    },
    {
      name: 'Adobe Illustrator',
      type: 'design',
      fullName: '',
      description:
        'The most popular vector graphics program on the market, the greatest advantage of which is lossless scaling, which means maintaining perfect sharpness even with multiple magnification. The program allows you to create illustrations, logos, icons, packaging and billboards.',
      links: [
        ['Official page', 'https://www.adobe.com/products/illustrator.html'],
        [
          '[Envato Tuts+] Adobe Illustrator for Beginners ',
          'https://www.youtube.com/watch?v=Ib8UBwu3yGA',
          'yt',
        ],
      ],
      projects: [],
    },
    {
      name: 'Affinity Designer',
      fullName: '',
      type: 'design',
      description:
        'Designer is a relatively young product, which is used to create vector graphics. It was prepared especially for designers. Its possibilities do not differ from Illustrator, but its attractive price and many interesting solutions make it the main competitor.',
      links: [
        ['Official page', 'https://affinity.serif.com/en-us/designer/'],
        [
          '[Envato Tuts+] Affinity Designer Quick Start ',
          'https://www.youtube.com/watch?v=Gd7FmjUxFnE',
          'yt',
        ],
      ],
      projects: [],
    },
    {
      name: 'Affinity Publisher',
      fullName: '',
      type: 'design',
      description:
        'The application is part of the Affinity product line. Publisher focuses mainly on desktop publishing and the preparation of materials for printing. From magazines, books, brochures to posters. It is a smooth and intuitive application that allows you to create creative publications.',
      links: [
        ['Official page', 'https://affinity.serif.com/en-us/publisher/'],
        [
          '[Affinity Revolution] Tutorial For Beginners ',
          'https://www.youtube.com/watch?v=py6fqmvlaqY',
          'yt',
        ],
      ],
      projects: [],
    },
    {
      name: 'Scrum',
      fullName: '',
      type: 'other',
      description:
        'Scrum is one of the most popular agile methodologies, which enables, among other things, the creation of new products and services. It is based on iterative and incremental value delivery. It is used in the work on projects based on agile methodologies, in accordance with the Agile manifesto. Work on the product is split up. is for iterations, called sprints. Implementation of the project according to Scrum focuses on delivering more and more refined project results, self-organization of the project team, as well as involving future users in the development process. ',
      links: [
        ['Official page', 'https://www.scrum.org/resources/what-is-scrum'],
        [
          'Official guide',
          'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf',
        ],
      ],
      projects: [],
    },
    {
      name: 'Kanban',
      type: 'other',
      fullName: '',
      description:
        'This method was developed in the 1950s to control production, but now it has been adapted to the needs of effective software development. It is based on principles such as visualization of work progress, reduction of the number of tasks to be performed, and systematic analysis and optimization of processes. Kanban as opposed to Scrum does not require working within specific time limits, creating multifunctional teams, and does not pre-define roles such as, for example, Product Owner.',
      links: [
        [
          'Kanban vs. scrum: which agile are you? ',
          'https://www.atlassian.com/agile/kanban/kanban-vs-scrum',
        ],
      ],
      projects: ['PXL', 'BigFive'],
    },
    {
      name: 'Notion',
      type: 'other',
      fullName: '',
      description:
        'Notion is a single space where you can think, write, and plan. Capture thoughts, manage projects, or even run an entire company — and do it exactly the way you want. We want a quiet space to think, and we want all the information we need to be there when we need it.',
      links: [
        ['Official page', 'https://www.notion.so/'],
        [
          '[Notion] What is Notion?',
          'https://www.youtube.com/watch?v=oTahLEX3NXo',
          'yt',
        ],
      ],
      projects: [],
    },
    {
      name: 'Trello',
      type: 'other',
      fullName: '',
      description:
        'Trello is a project management tool that allows you to organize them in the form of very readable boards. The application at a glance informs about who and what is working on, and at what stage a given task is. . integrating with other tools such as Slack or Jira.',
      links: [
        ['Official page', 'https://trello.com/pl'],
        [
          '[Kimberly Ann Jimenez] How To Use TRELLO for Beginners + Workflow Examples ',
          'https://www.youtube.com/watch?v=6drUzoeHZkg',
        ],
      ],
      projects: [],
    },
    {
      name: 'MS Excel',
      type: 'other',
      fullName: 'Microsoft Excel',
      description:
        'Market-leading software used to perform calculations compiled in tabular form. It has numerous mathematical, financial and database functions, as well as semi-automatic duplication of created formulas. It is also very useful in generating graphs, in numerous variants.',
      links: [
        [
          'Official page',
          'https://www.microsoft.com/pl-pl/microsoft-365/excel',
        ],
        [
          '[freeCodeCamp.org] Microsoft Excel Tutorial for Beginners ',
          'https://www.youtube.com/watch?v=Vl0H-qTclOg',
          'yt',
        ],
      ],
      projects: [],
    },
  ],
  contact: {
    header: 'Contact',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    sendMessageButton: 'Send your message',
    namePlaceholder: 'John',
    emailPlaceholder: 'john@gmail.com',
    messagePlaceholder: 'Message ...',
  },
  about: {
    header: 'About me',
    paragraphs: [
      "I am a Front-end Developer and UX/UI design enthusiast, specializing in React.js and TypeScript. I'm currently exploring the Node.js ecosystem to evolve into a Full-stack Software Engineer, which is my main goal.",
      'Privately, I enjoy a quiet life in the countryside, where I can peacefully develop my skills and passions. Fan of ⚽ football, 🐕 dogs, ☕ black coffee and 🛸 sci-fi.',
      "Feel free to connect with me if you share similar interests or if you're interested in collaborating on exciting projects.",
    ],
    experience: 'Experience: ',
    whatCanIOffer: 'What can I offer?',
    whatCanIOfferList: [
      '👩🏽‍💻 High work ethic',
      '🤝 Strong cooperation attitude',
      '🎨 UX and UI sensibility',
      '📊 Ability to analyze business requirements and customer needs',
      '💸 Experience in working with clients, sales department, and advertising agencies',
      '💪🏻 Self-driven, problem-solving oriented, independent professionalism',
    ],
  },
  experience: [
    {
      topHeader: 'Sep 2022 -> Present',
      bottomHeader: 'Front-end Developer [Fabrity]',
      paragraphs: [
        'Work on the security, development, and redesign of the information exchange platform for the European Agency.',
        'Work on developing and redesigning a low-code platform that allows users to create applications that improve and optimize business processes in their organizations.',
      ],
      skills: [
        'TypeScript',
        'React',
        'Redux',
        'Jest',
        'React Testing Library',
        'Sass',
        'Bootstrap',
        'Sharepoint',
        'Figma',
        'Checkmarx',
        'Scrum',
      ],
    },
    {
      topHeader: 'Jul 2021 -> Aug 2022',
      bottomHeader: 'Front-end Developer [Sonalake]',
      paragraphs: [
        'Development of software for the optical industry',
        'Work in the "Central UX" team responsible for the consistent design, app performance, and creating, documenting, and maintaining components for other teams',
      ],
      skills: [
        'TypeScript',
        'React',
        'Redux',
        'Jest',
        'React Testing Library',
        'Sass',
        'Bootstrap',
        'SonarCloud',
        'Scrum',
      ],
    },
    {
      topHeader: 'Jul 2020 -> Jun 2021',
      bottomHeader: 'Software Developer [PrintXL]',
      paragraphs: [
        'Creation and development of a website for a large-format digital printing house based on the Gatsby framework and Headless CMS Contentful.',
        'Co-creation of the production management system in the company based on Node.js / SQL / MS Excel. The system consists of panels for leaders of each department and a dashboard for managers.',
      ],
      skills: [
        'JavaScript',
        'React',
        'Gatsby',
        'Node',
        'MySQL',
        'Excel',
        'Kanban',
      ],
    },
    {
      topHeader: 'Jul 2019 -> Jun 2021',
      bottomHeader: 'Research & Development Manager [PrintXL]',
      paragraphs: [
        'Creation and implementation of new products with market analysis, cost calculation, and optimal materials selection.',
        'Preparation of reports and constant cooperation with the management, sales, planning, logistics, and production departments.',
      ],
      skills: [
        'Research and Development',
        'Business Analysis',
        'Project Management',
        'Digital Printing',
        'Excel',
        'Kanban',
      ],
    },
    {
      topHeader: 'Jun 2018 -> Jul 2019',
      bottomHeader: 'DTP Department Manager [PrintXL]',
      paragraphs: [
        'Managing the work and development of a seven-person department.',
        'Creating a group of JavaScript scripts for Adobe programs that automated and standardized the process of preparing graphics for printing.',
        'Responsibility for the smooth flow of orders by the DTP department.',
      ],
      skills: [
        'Team Management',
        'Project Management',
        'DTP',
        'Digital Printing',
        'JavaScript',
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Kanban',
      ],
    },
    {
      topHeader: 'Mar 2013 -> Jun 2018',
      bottomHeader: 'DTP Specialist [PrintXL]',
      paragraphs: [
        'Verification of the correctness of files sent by the customer and their comprehensive preparation for production.',
        'Development of product specifications and instructions for customers.',
        'Create color profiles for printing machines using the X-Rite I1 spectrophotometer.',
        // 'Skills: DTP / Digital Printing / Adobe Illustrator / Adobe Photoshop',
      ],
      skills: [
        'DTP',
        'Digital Printing',
        'Graphic Design',
        'Adobe Illustrator',
        'Adobe Photoshop',
      ],
    },
    {
      topHeader: 'Oct 2012 -> Dec 2013',
      bottomHeader: 'Graphic Designer [AllElectronics]',
      paragraphs: [
        'Creating graphics, illustrations, and icons for online auctions.',
      ],
      skills: ['Graphic Design', 'Adobe Illustrator', 'Adobe Photoshop'],
    },
  ],
  footer: {
    contact: 'Contact',
    menu: 'Menu',
    toTheTop: 'Scroll to Top',
  },
  notFoundPage: {
    title: '404 - Page not found',
    paragraph:
      'The page you are looking for does not exist, has changed its name or is temporarily unavailable.',
    link: 'Go to homepage',
  },
  listOfProjects: [
    {
      title: 'PXL',
      slug: 'pxl',
      role: 'Design & Development',
      shortDescription:
        'Redesign of the website for a digital large-format printing house. The website was prepared in four language versions. Its main purpose was to facilitate contact, present a wide range of products and materials, as well as quick access to file preparation instructions.',
      description: [
        'I started working on the project by conducting interviews and surveys on clients and employees of the company to determine what they consider to be the most sensitive point on the website at that time, as well as what its advantages and disadvantages are. Thanks to this, I defined a dozen problems, which I divided according to their frequency of occurrence and I have given them a proper priority.',
        'The most frequently mentioned issues were: difficult access to the full offer of the company, no DTP instructions on how to prepare graphic files for printing, and an unattractive appearance.',
        'Defining these problems allowed me to focus my attention on the most important aspects while creating prototypes that I made in Adobe XD. While working on them, I conducted several usability tests, after which we decided to introduce many corrections, especially in the area of information architecture and website navigation. ',
      ],
      description2: [
        "To create the website, I used the Gatsby framework, which extends React's capabilities by generating static HTML and CSS pages. This method facilitates the indexing of the site by Google robots, which has a positive impact on SEO. almost all content and multimedia resources. Contentful to headless CMS, which provides editors with a content management interface, and at the same time provides developers with APIs for building applications. In the case of Gatsby, the connection is made using GraphQL, which is very easy to use by the built-in Explorer (IDE) allowing you to quickly click on an appropriate and precise request. ",
        'I used the scss (SASS) syntax to build the appearance, which I really appreciate for the ability to create variables and mixins. The website also uses services such as Sendgrid - which allows you to send e-mails directly from the website, and reCaptcha - to verify that users are not robots. website, I wrote a simple server in Node.js / Express.js, which is hosted on the Heroku platform. ',
        'The effect of this work has been satisfactory so far. The three times greater number of inquiries received directly from the website, as well as the positive opinions of customers and the sales department, for whom quick access to information significantly facilitates their work, can prove it. The site will be still tested, iteratively expanded with new functionalities and screens.',
      ],
      photos: [pxlHero, pxl0, pxl1, pxl2],
      link: '/project/pxl',
      externalLink: 'http://printxl.pl',
      repository: 'https://github.com/dd-duszynski/pxlGatsby',
    },
    // {
    // 	title: 'BigFive',
    // 	slug: 'big-five',
    // 	role: 'Design & Development',
    // 	shortDescription:
    // 		'The project stems from a passion for football and the idea of creating a website that allows you to view the results and statistics of the five strongest leagues in the world.',
    // 	description: [
    // 		'The project results from a passion for football and the idea of ​​creating a website that allows you to view the results and statistics of the five largest leagues in the world. Inspired by such portals as flashscore.pl, I decided to face this challenge and started looking for api with data that would be appropriate for this idea This is how I found www.football-data.org, which allowed me to move on to the next stage, which was creating the first prototypes in Adobe XD, and then usability tests carried out on a few football fans I know. time to write code. ',
    // 		'First of all, I focused on the responsive presentation of tabular data in a readable form, both on large displays and on smartphones. The application also allows you to sort them and dynamically switch color themes and the language version. pagination that allows you to switch between subpages. ',
    // 	],
    // 	description2: [
    // 		"The application is fully responsive, and I wrote the styles using the .scss (SASS) syntax. The JavaScript framework used is React, written with the use of hooks, and I download the data thanks to the Fetch API. I dynamically change the language and color versions of all components, avoiding the problem called 'prop drilling'. These functions are available in the 'Settings' tab. ",
    // 		'Since the free account at www.football-data.org only allows 10 requests per minute, there was a problem with CORS errors, which I decided to solve by creating a server written in Node.js and its Express.js framework. This program periodically downloads data from api using the node-fetch library and saves them to JSON files, which it serves when requested from the frontend layer. ',
    // 		'It is a training application, which it is currently expanding with the possibility of creating interactive data visualizations, which is possible with the D3.js library.',
    // 	],
    // 	photos: [bigFiveHero, bigFive0, bigFive1, bigFive2],
    // 	link: '/projects/big-five',
    // 	externalLink: 'https://dd-duszynski.github.io/big-five/',
    // 	repository: 'https://github.com/dd-duszynski/big-five',
    // },
  ],
};

export default strings;
