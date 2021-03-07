import IGenre from "./IGenre";

export default interface IMovieResponse {
  adult: boolean;
  backdrop_path: null | object;
  belongs_to_collection: null;
  budget: number;
  genres: Array<IGenre>;
  homepage: string | null;
  id: number;
  poster_path: string | null;
  original_language: string;
  overview: string | null;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number
}
