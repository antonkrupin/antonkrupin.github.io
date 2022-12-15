/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import i18n from '../asserts/i18next';

/* import {
  loadButtonClassName,
  filterButtonClassName,
} from '../asserts/classNames'; */

// import routes, { headers } from '../routes';

/* import {
  fetchFilms,
  clearFilmsList,
  setFilter,
  setTopCoord,
} from '../store/filmsSlice';

import { selectQueryParams, selectActiveFilter } from '../store/selectors'; */

import Button from './Button';

import InfoBlock from './InfoBlock';

import SelectComponent from './SelectComponent';

import '../style/Header.css';

const Header = () => {
  /* const dispatch = useDispatch();

  const params = useSelector(selectQueryParams);

  const filter = useSelector(selectActiveFilter);

  const fetchFilmsHandler = () => {
    dispatch(clearFilmsList());
    const requestOptions = [routes.premiersPath(),
      {
        headers,
        params,
      }];
    dispatch(fetchFilms(requestOptions));
  };

  const scrollHandler = () => {
    if (filter) {
      dispatch(setFilter());
    } else {
      dispatch(setTopCoord(window.pageYOffset));
      dispatch(setFilter());
    }
  }; */

  return (
    <>
      <div className="d-flex bg-warning p-2 text-center justify-content-center flex-column">
        <h2 className="text-primary">{i18n.t('ui.title')}</h2>
      </div>
      <div className="filters-container m-auto mt-5">
        <div className="filters">
          <SelectComponent type="month" />
          <SelectComponent type="year" />
          <Button type="load" />
          <Button type="filter" />
          { /* <button
            onClick={fetchFilmsHandler}
            className={loadButtonClassName()}
            type="button"
          >
            {i18n.t('ui.buttonLoad')}
          </button>
          <button
            onClick={scrollHandler}
            className={filterButtonClassName()}
            type="button"
          >
            {filter ? i18n.t('ui.filterAllFilms') : i18n.t('ui.filterLikeFilms')}
  </button> */ }
        </div>
      </div>
      <InfoBlock />
    </>
  );
};

export default Header;
