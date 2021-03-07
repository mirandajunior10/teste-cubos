import IMovie from "./IMovie";

export default interface IMoviesResponse {
  page: number,
  results: Array<IMovie>
  total_results: number;
  total_pages: number

}
