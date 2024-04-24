export interface IStrings {
  navigation: string[][];
  hero: string[];
  posts: IPosts;
  projects: IProjects;
  technologies: ITechnologies;
  listOfTechnologies: IListOfTechnology[];
  contact: IContact;
  about: IAbout;
  experience: IExperience[];
  footer: IFooter;
}

export interface IPosts {
  title: string;
  description: string;
}

export interface IProjects {
  title: string;
  roleInfo: string;
  descriptionInfo: string;
  description2Info: string;
  technologyInfo: string;
  screens: string;
  homeLink: string;
}

export interface ITechnologies {
  header: string;
  subheaders: string[];
  seeMore: string;
  learnMore: string;
}

export interface IListOfTechnology {
  name: string;
  fullName: string;
  type: string;
  description: string;
  links: string[][];
  projects: string[];
}

export interface IContact {
  header: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  sendMessageButton: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  thxMessage1: string;
  thxMessage2: string;
  errorMessage: string;
}

export interface IAbout {
  header: string;
  paragraph1: string;
  paragraph2: string;
  expHeader: string;
}

export interface IExperience {
  topHeader: string;
  bottomHeader: string;
  paragraphs: string[];
}

export interface IFooter {
  contact: string;
  menu: string;
  toTheTop: string;
}