import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Input from '../../components/Input';
import { FiSearch } from 'react-icons/fi'
import { Image, Container, Content, Genre, Genres, Header, Movie, Description, TitleHeader, Overview, RelatedGenres, RelatedGenre, Pages, Page } from './styles';
import api from '../../services/api';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Link } from 'react-router-dom';
import IGenre from '../../interfaces/IGenre';
import IMovie from '../../interfaces/IMovie';
import IGenresResponse from '../../interfaces/IGenresResponse';
import IMoviesResponse from '../../interfaces/IMoviesReponse';
import { parseDate } from '../../utils/parseFunctions';

const Home: React.FC = () => {

  const [nameQuery, setNameQuery] = useState<string>('')
  const [genres, setGenres] = useState<IGenre[]>([])
  const [searchType, setSearchType] = useState<number>(1)
  const [selectedGenre, setSelectedGenre] = useState<number>(0)
  const [movies, setMovies] = useState<IMovie[]>([])
  const [paginatedMovies, setPaginatedMovies] = useState<IMovie[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [pages, setPages] = useState<number[]>([])
  const [currentSearchPage, setCurrentSearchPage] = useState<number>(1)

  const fetchGenres = useCallback(async () => {
    const response = await api.get<IGenresResponse>('/genre/movie/list')
    setGenres(response.data.genres);
  }, [])




  const fetchMoviesByName = useCallback(async () => {
    if (searchType === 1) return

    let encodedQuery = encodeURI(nameQuery)
    const response = await api.get<IMoviesResponse>(`/search/movie?&include_adult=false&query=${encodedQuery}&page=${currentSearchPage}`)
    if (currentSearchPage > 1) {
      setMovies((oldMovies) => oldMovies.concat(response.data.results))
      setTotalPages((oldPages) => oldPages + Math.ceil(response.data.results.length / 5))
    }
    else {
      setMovies(response.data.results)
      setTotalPages(Math.ceil(response.data.results.length / 5))
      setPaginatedMovies(response.data.results.slice(0, response.data.results.length < 5 ? response.data.results.length : 5))
    }
  }, [nameQuery, searchType, currentSearchPage]);

  const handleChangeText = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 3) return
    setNameQuery(event.target.value)
    setSelectedGenre(0)
    setSearchType(2)
  }, []);

  const fetchMoviesByGenre = useCallback(async () => {
    if (searchType === 2) return

    const response = await api.get<IMoviesResponse>(`/discover/movie?sort_by=popularity.desc&include_adult=false&with_genres=${selectedGenre}&page=${currentSearchPage}`)
    if (currentSearchPage > 1) {
      setMovies((oldMovies) => oldMovies.concat(response.data.results))
      setTotalPages((oldPages) => oldPages + Math.ceil(response.data.results.length / 5))
    }
    else {
      setMovies(response.data.results)
      setTotalPages(Math.ceil(response.data.results.length / 5))
      setPaginatedMovies(response.data.results.slice(0, response.data.results.length < 5 ? response.data.results.length : 5))
    }
  }, [selectedGenre, searchType, currentSearchPage]);

  const handleSelectGenre = useCallback(async (id: number) => {
    if (selectedGenre === id) return
    setNameQuery('')
    setTotalPages(0)
    setPages([])
    setCurrentPage(1)
    setCurrentSearchPage(1)
    setMovies([])
    setSearchType(1)
    setSelectedGenre(id);
  }, [selectedGenre])

  const paginate = useCallback(() => {
    let oldPage, pages = [] as number[]

    if (totalPages - currentPage < 3 && totalPages - currentPage > 0) {

      setCurrentSearchPage((oldSearchPages) => oldSearchPages + 1)
    }
    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
      const firstAndLastPage = currentPage === 1 || currentPage === totalPages
      const pagesBefore = currentPage >= currentPage - 2
      const pagesAfter = currentPage <= currentPage + 2

      if (firstAndLastPage || (pagesAfter && pagesBefore)) {

        if (oldPage && currentPage - oldPage === 2) pages.push(oldPage + 1)

        pages.push(currentPage)

        oldPage = currentPage
      }
    }
    setPages(pages)
  }, [totalPages, currentPage])

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  useEffect(() => {
    fetchMoviesByGenre();
  }, [fetchMoviesByGenre]);


  useEffect(() => {
    fetchMoviesByName();
  }, [fetchMoviesByName]);

  useEffect(() => {
    paginate()
  }, [paginate]);

  useEffect(() => {
    setPaginatedMovies(movies.slice(((currentPage - 1) * 5), (currentPage * 5)))
  }, [movies, currentPage])

  function getGenre(id: number): string {
    const genre = genres.find(genre => genre.id === id);

    return genre?.name || '';
  }
  return (
    <>
      <Header>Movies</Header>
      <Container>
        <Input
          placeholder="Busque filmes por nome"
          name="search"
          icon={FiSearch}
          onChange={handleChangeText}
          defaultValue={nameQuery}
        />
        <ScrollContainer className="scroll-container">
          <Genres>
            {genres.map(genre => (
              <Genre isSelected={genre.id === selectedGenre} onClick={() => { handleSelectGenre(genre.id) }} key={genre.id}>{genre.name}</Genre>
            ))
            }
          </Genres>
        </ScrollContainer>
        <Content>
          {paginatedMovies.map(movie => (

            <Movie key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <Image>
                  {movie.poster_path && (
                    <>

                      <img alt={movie.title} src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                    </>
                  )}
                </Image>
              </Link>

              <Description>
                <Link to={`/movie/${movie.id}`}>
                  <TitleHeader>
                    <div>
                      <span>{`${movie.vote_average * 10}%`}</span>
                    </div>
                    <h3 title={movie.title}>{movie.title}</h3>
                  </TitleHeader>
                </Link>
                <Overview>
                  <p className="release-date">{movie.release_date && parseDate(movie.release_date)}</p>
                  {movie.overview && <p className="overview">{movie.overview}</p>}
                  <ScrollContainer>
                    <RelatedGenres>
                      {movie.genre_ids.map(id => (
                        <RelatedGenre key={id}>{getGenre(id)}</RelatedGenre>
                      )
                      )}
                    </RelatedGenres>
                  </ScrollContainer>
                </Overview>
              </Description>
            </Movie>
          ))}
          <Pages>
            {pages.map(page => (
              <Page key={page} onClick={() => setCurrentPage(page)} shouldHide={Math.abs((currentPage - page)) > 2} isCurrentPage={currentPage === page}>{page}</Page>
            ))}
          </Pages>
        </Content>
      </Container>
    </>
  );
};

export default Home;
