export interface Info {
  count: number,
  pages: number,
  next: string
  prev: string
}

export interface Results {
  id: number,
  name: string,
  status: 'Alive' | 'Dead' | 'unknown',
  species: string,
  type?: string,
  gender?: string,
  origin: {
    name: string,
    url?: string
  },
  location: {
    name: string,
    url?: string
  },
  image: string
  episode?: string[]
  url?: string
  created?: Date
}

export interface ApiData {
  info: Info,
  results: Results[]
}