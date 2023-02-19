// general interface of sanity class
interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

// social interface
export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

// image interface
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

// file interface
interface File {
  _type: "file";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

// pageInfo interface
export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  homeImage: Image;
  address: string;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  resume: File;
}

// skill interface
export interface Skill extends SanityBody {
  _type: "skill";
  skillImage: Image;
  progress: number;
  title: string;
}

// Technology interface
export interface Technology extends SanityBody {
  _type: "skill";
  skillImage: Image;
  progress: number;
  title: string;
}

// Project interface
export interface Project extends SanityBody {
  _type: "project";
  title: string;
  projectImage: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

// Experience interface
export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}
