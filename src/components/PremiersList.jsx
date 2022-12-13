import React from 'react';
import { useSelector } from 'react-redux';

import { selectFilmsByFilter } from '../store/selectors';

import FilmItem from './FilmItem';

const PremiersList = () => {
  const films = useSelector(selectFilmsByFilter);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {films.map((film) => (
        <FilmItem
          key={film.kinopoiskId}
          film={film}
        />
      ))}
    </div>
  );
};

export default PremiersList;
