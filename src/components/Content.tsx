import { useState, useEffect } from 'react'
import { api } from '../services/api'

import '../styles/content.scss'

import { MovieCard } from '../components/MovieCard';
import { Header } from './Header';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  id: number,
  title: string
}


export function Content(props: ContentProps) {
  const { id, title } = props

  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${id}`).then(response => {
      setMovies(response.data);
    });

  }, [id]);

  return (
    <>
      <Header title={title} />
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </>
  )

}