import React from 'react';
import { useDispatch } from 'react-redux';

import i18n from '../asserts/i18next';

import { LikeIcon, TrashIcon } from './Icons';

import { deleteFilm, likeFilm, setTopCoord } from '../store/filmsSlice';

import '../style/FilmItem.css';

const FilmItem = (props) => {
  const dispatch = useDispatch();

  const { film } = props;

  const deleteHandler = () => {
    dispatch(deleteFilm(film.kinopoiskId));
    dispatch(setTopCoord(window.pageYOffset));
  };

  const likeHandler = (e) => {
    if (e.target.classList.contains('bi-heart-fill')
         || e.target.parentNode.classList.contains('bi-heart-fill')) {
      dispatch(likeFilm(film.kinopoiskId));
      dispatch(setTopCoord(window.pageYOffset));
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Delete') {
      dispatch(deleteFilm(film.kinopoiskId));
    }
    if (e.key === 'Enter') {
      dispatch(likeFilm(film.kinopoiskId));
    }
    dispatch(setTopCoord(window.pageYOffset));
  };

  const likeIconFillColor = film.like ? '#e52555' : '#0d090a';

  return (
    <button
      type="button"
      id={film.kinopoiskId}
      className="d-flex flex-column justify-content-end align-items-center filmItem"
      onClick={(e) => likeHandler(e)}
      onKeyDown={(e) => onKeyDown(e)}
    >
      <div>
        <h4 className="text-break text-center">
          {film.nameRu}
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
      <LikeIcon fill={likeIconFillColor} />
      <img src={film.posterUrlPreview} alt={film.nameRu} />
      <TrashIcon onClick={deleteHandler} />
    </button>
  );
};

export default FilmItem;
