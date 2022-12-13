import React from 'react';
import { useDispatch } from 'react-redux';

import i18n from '../asserts/i18next';

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
      <svg
        onClick={likeHandler}
        className="bi bi-heart-fill"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill={likeIconFillColor}
        viewBox="0 0 16 16"
      >
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
      </svg>
      <img src={film.posterUrlPreview} alt={film.nameRu} />
      <svg
        onClick={deleteHandler}
        className="bi bi-trash"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
      </svg>
    </div>
  );
};

export default FilmItem;
