export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  voteAverage: number;
  poster: string;
}

export interface CatalogContextProps {
  movies: Movie[];
};
