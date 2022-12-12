import React from "react";
import { useSelector } from "react-redux";

import '../style/FilmItem.css'

const FilmItem = (props) => {
  const { film } = props;

  const fillColor = '#0d090a';

  const clickHandler = (e) => {
    console.log('parent node',e.target.parentNode);
    console.log('target',e.target);
    console.log('children',e.target.children);
  };

  return (
    <div
      id={film.kinopoiskId}
      className="d-flex flex-column justify-content-end align-items-center filmItem"
      onClick={(e) => clickHandler(e)}
    >
      <h4 className="text-break text-center">Название: {film.nameRu}</h4>
      <h5>Год выхода: {film.year}</h5>
      <h6 className="d-flex w-100 justify-content-center">
        <svg className="bi bi-heart-fill" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0d090a" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
      </h6>
      <img src={film.posterUrlPreview} alt={film.nameRu} />
    </div>
  )
};

export default FilmItem;

/*

fill="#0c38a8";

*/