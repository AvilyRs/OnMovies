import { Movie } from "../interface";

export function fixMovieProperties(movies: any): Movie[] {
  const data = movies.map(movie => {
    return {
      ...movie,
      poster: movie.poster_path,
      voteAverage: movie.vote_average,
      releaseDate: movie.release_date
    }
  })

  return data;
}