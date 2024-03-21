import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
// import apiClient, { FetchResponse } from "../services/api-client";
import APIClient, { FetchResponse } from "../services/api-client";
// import { FetchResponse } from "./useData";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    // queryFn: () =>
    //   apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
