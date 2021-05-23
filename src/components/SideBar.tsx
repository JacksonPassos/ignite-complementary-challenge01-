import { useState, useEffect } from 'react'
import { api } from '../services/api'

import '../styles/sidebar.scss'
import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SidebarProps {
  id: number;
  handleClick: Function;
  select: Function;
}

export function SideBar(props: SidebarProps) {
  const { id, handleClick, select } = props
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${id}`).then(response => {
      select(response.data);
    })
  }, [id]);


  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClick(genre.id)}
              selected={id === genre.id}
            />
          ))}
        </div>

      </nav>

  )
}