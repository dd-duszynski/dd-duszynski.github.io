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
  listOfProjects: ListOfProjectsType[];
  notFoundPage: INotFoundPage;
}

export interface INotFoundPage {
  title: string;
  paragraph: string;
  link: string;
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
}

export interface IAbout {
  header: string;
  paragraphs: string[];
  experience: string;
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

export interface ListOfProjectsType {
  title: string;
  slug: string;
  role: string;
  shortDescription: string;
  description: string[];
  description2: string[];
  photos: any[];
  link: string;
  externalLink: string;
  repository: string;
}
