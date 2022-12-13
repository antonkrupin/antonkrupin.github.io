import React from 'react';
import { useDispatch } from 'react-redux';

import i18n from '../asserts/i18next';

import LikeIcon from './icons/LikeIcon';
import TrashIcon from './icons/TrashIcon';

import { deleteFilm, likeFilm } from '../store/filmsSlice';

import '../style/FilmItem.css';

const FilmItem = (props) => {
  const dispatch = useDispatch();

  const { film } = props;

  const likeIconFillColor = film.like ? '#e52555' : '#0d090a';

  const deleteHandler = () => {
    dispatch(deleteFilm(film.kinopoiskId));
  };

  const likeHandler = () => {
    dispatch(likeFilm(film.kinopoiskId));
  };

  return (
    <div
      id={film.kinopoiskId}
      className="d-flex flex-column justify-content-end align-items-center filmItem"
    >
      <div>
        <h4 className="text-break text-center">
          {film.nameRu}
          {film.nameEn && (
          <>
            <br />
            <span>
              (
              {film.nameEn}
              )
            </span>
          </>
          )}
        </h4>
        <h6>
          {i18n.t('filmItem.year')}
          {' '}
          {film.year}
        </h6>
        <h6>
          {i18n.t('filmItem.duration')}
          {' '}
          {film.duration}
          {i18n.t('filmItem.minutes')}
        </h6>
      </div>
      <LikeIcon onClick={likeHandler} fill={likeIconFillColor} />
      <img src={film.posterUrlPreview} alt={film.nameRu} />
      <TrashIcon onClick={deleteHandler} />
    </div>
  );
};

export default FilmItem;
