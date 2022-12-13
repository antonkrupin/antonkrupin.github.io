import React from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import FilmItem from './FilmItem';

const PremiersList = () => {
  const films = useSelector((state) => state.films.films);

  return (
    <>
      <Header />
      <div className="d-flex flex-wrap justify-content-center">
        {films.map((film) => (
          <FilmItem
            key={film.kinopoiskId}
            film={film}
          />
        ))}
      </div>
    </>
  );
};

export default PremiersList;
