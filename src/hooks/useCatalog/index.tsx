import { createContext, useContext, useEffect, useState } from "react";
import { getMoviesService } from "../../services/getMoviesService";
import { CatalogContextProps, Movie } from "./interface";

const CatalogContext = createContext({} as CatalogContextProps);

export function CatalogProvider({ children }): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function getMovies() {
    const response = await getMoviesService();
    setMovies(response);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <CatalogContext.Provider value={{ movies }}>
      {children}
    </CatalogContext.Provider>
  )
}

export function useCatalog() {
  const context = useContext(CatalogContext);

  if (!context) {
    throw new Error("useCatalog must be used within a CatalogProvider");
  }

  return context;
}
