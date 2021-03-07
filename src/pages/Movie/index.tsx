import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import IGenre from '../../interfaces/IGenre';
import IGenresResponse from '../../interfaces/IGenresResponse';
import api from '../../services/api';
import { RelatedGenres } from '../../styles/global';
import { RelatedGenre, Description, Header, Movie, TitleHeader, Overview, InfoContainer, InfoContentContainer, InfoContent, BottomContainer } from './styles';
import { formatValue, parseDate, parseLanguage, parseRuntime, parseStatus } from '../../utils/parseFunctions';
import IMovieResponse from '../../interfaces/IMovieReponse';
import ScrollContainer from 'react-indiana-drag-scroll';

interface MovieParams {
  id: string;
}

const Dashboard: React.FC = () => {
  const params = useParams<MovieParams>()
  const [movie, setMovie] = useState<IMovieResponse>({} as IMovieResponse)
  const [genres, setGenres] = useState<IGenre[]>([])

  const fetchGenres = useCallback(async () => {
    const response = await api.get<IGenresResponse>('/genre/movie/list')
    setGenres(response.data.genres);
  }, [])

  const fetchMovie = useCallback(async () => {
    const response = await api.get<IMovieResponse>(`/movie/${params.id}`)
    setMovie(response.data)
    console.log(response.data)
  }, [params]);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  useEffect(() => {
    console.log(params)
  }, [params])


  function getGenre(id: number): string {
    const genre = genres.find(genre => genre.id === id);

    return genre?.name || '';
  }

  return (
    <>
      <Header>Movies</Header>
      <Movie key={movie.id}>
        <TitleHeader>
          <h3 title={movie.title}>{movie.title}</h3>
          <p className="release-date">{movie.release_date && parseDate(movie.release_date)}</p>
        </TitleHeader>
        <Description>
          <Overview>
            <div className="overview-container">
              <p className="overview-title">Sinopse</p>
              {movie.overview && <p className="overview">{movie.overview}</p>}
            </div>
            <InfoContainer>
              <p className="infos-title">Informações</p>
              <InfoContentContainer>
                <InfoContent>
                  <p className="info-title">Situação</p>
                  <p className="info">{parseStatus(movie.status)}</p>
                </InfoContent>
                <InfoContent >
                  <p className="info-title">Idioma</p>
                  <p className="info">{parseLanguage(movie.original_language)}</p>
                </InfoContent>
                <InfoContent>
                  <p className="info-title">Duração</p>
                  <p className="info">{parseRuntime(movie.runtime)}</p>
                </InfoContent>
                <InfoContent>
                  <p className="info-title">Orçamento</p>
                  <p className="info">{formatValue(movie.budget)}</p>
                </InfoContent>
                <InfoContent>
                  <p className="info-title">Receita</p>
                  <p className="info">{formatValue(movie.revenue)}</p>
                </InfoContent>
                <InfoContent>
                  <p className="info-title">Lucro</p>
                  {movie.revenue && movie.budget && <p className="info">{formatValue(movie.revenue - movie.budget)}</p>}
                </InfoContent>

              </InfoContentContainer>
            </InfoContainer>
            <BottomContainer>
              <ScrollContainer>
                <RelatedGenres>
                  {movie.genres && movie.genres.map(genre => (
                    <RelatedGenre onClick={() => console.log(movie)} key={genre.id}>{getGenre(genre.id)}</RelatedGenre>
                  )
                  )}
                </RelatedGenres>
              </ScrollContainer>
              <div>
                <span>{`${movie.vote_average * 10}%`}</span>
              </div>
            </BottomContainer>
          </Overview>
          <div>
            {movie.poster_path && <img alt={movie.title} src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            }
          </div>

        </Description>
      </Movie>
    </>
  )
}

export default Dashboard;
