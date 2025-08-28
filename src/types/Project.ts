export interface Project {

  id: number;
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  liveDemo: string;
  githubRepo: string;
  featured?: boolean;
  
}