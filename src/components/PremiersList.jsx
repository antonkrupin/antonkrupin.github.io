import React from 'react';
import { useSelector } from 'react-redux';

import i18n from '../asserts/i18next';

import { selectFilmsByFilter } from '../store/selectors';

import FilmItem from './FilmItem';

const PremiersList = () => {
  const films = useSelector(selectFilmsByFilter);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {films.length === 0 && <div>{i18n.t('ui.emptyList')}</div>}
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
