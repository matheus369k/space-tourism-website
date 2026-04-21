// Tipagem para as imagens de Destinos e Tripulação
interface StandardImages {
  png: string;
  webp: string;
}

// Tipagem específica para as imagens de Tecnologia (Portrait/Landscape)
interface TechImages {
  portrait: string;
  landscape: string;
}

export interface DestinationType {
  name: string;
  images: StandardImages;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewMemberType {
  name: string;
  images: StandardImages;
  role: string;
  bio: string;
}

export interface TechnologyType {
  name: string;
  images: TechImages;
  description: string;
}

// Interface principal que representa o arquivo JSON completo
export interface SpaceData {
  destinations: DestinationType[];
  crew: CrewMemberType[];
  technology: TechnologyType[];
}