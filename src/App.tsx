import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  function handleSelectGenre(genreSelect: GenreResponseProps) {
    setSelectedGenre(genreSelect);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      
      <SideBar 
        id={selectedGenreId} 
        handleClick={handleClickButton}
        select={handleSelectGenre} 
      />

      <div className="container">
        <Content
          id={selectedGenreId}
          title={selectedGenre.title}
        />
      </div>
    </div>
  )
}