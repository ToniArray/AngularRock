export interface Band {
  id: number;
  name: string;
  description: string;
  origin: string;
  members: Artist[];
  image: string;
}

export interface Artist {
  name: string;
  instrument: string;
}