import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteFilm, likeFilm } from "../store/filmsSlice";

import '../style/FilmItem.css'

const FilmItem = (props) => {
  const { film } = props;

  const dispatch = useDispatch();

  const fillColor = film.like ? '#e52555' : '#0d090a';

  const clickHandler = (e) => {
    // dispatch(likeFilm(film.kinopoiskId));
  };

  const deleteHandler = (e) => {
    dispatch(deleteFilm(film.kinopoiskId));
  };

  const likeHandler = (e) => {
    dispatch(likeFilm(film.kinopoiskId));
  };

  return (
    <div
      id={film.kinopoiskId}
      className="d-flex flex-column justify-content-end align-items-center filmItem"
      onClick={(e) => clickHandler(e)}
    > 
      <h4 className="text-break text-center">Название: {film.nameRu}</h4>
      <h5>Год выхода: {film.year}</h5>
      <svg
        onClick={likeHandler}
        className="bi bi-heart-fill"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill={fillColor}
        viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
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
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
    </div>
  )
};

export default FilmItem;

/*

fill="#0c38a8";

*/