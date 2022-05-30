import { fixMovieProperties } from "../hooks/useCatalog/utils/fixMovieProperties";
import { jsonServer } from "./axios";

export async function getMoviesService() {
  const response = await jsonServer.get("/movies");
  return fixMovieProperties(response.data);
}
