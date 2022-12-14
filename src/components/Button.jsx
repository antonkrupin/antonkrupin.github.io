import React from 'react';
import { useDispatch } from 'react-redux';

import i18n from '../asserts/i18next';

import {
  loadButtonClassName,
  filterButtonClassName,
} from '../asserts/classNames';

import routes, { headers } from '../routes';

import {
  fetchFilms,
  clearFilmsList,
  setFilter,
  setTopCoord,
} from '../store/filmsSlice';

const Button = (props) => {
  const dispatch = useDispatch();

  const { type, params, filter } = props;

  const loadFilmsHandler = () => {
    dispatch(clearFilmsList());
    const requestOptions = [routes.premiersPath(),
      {
        headers,
        params,
      }];
    dispatch(fetchFilms(requestOptions));
    dispatch(setTopCoord(null));
  };

  const scrollHandler = () => {
    if (filter === 'like') {
      dispatch(setFilter('all'));
    } else {
      dispatch(setTopCoord(window.pageYOffset));
      dispatch(setFilter('like'));
    }
  };

  switch (type) {
    case 'load': {
      return (
        <button
          onClick={loadFilmsHandler}
          className={loadButtonClassName()}
          type="button"
        >
          {i18n.t('ui.buttonLoad')}
        </button>
      );
    }
    case 'filter': {
      return (
        <button
          onClick={scrollHandler}
          className={filterButtonClassName()}
          type="button"
        >
          {filter === 'all' ? i18n.t('ui.filterLikeFilms') : i18n.t('ui.filterAllFilms')}
        </button>
      );
    }
    default: {
      throw new Error('Unexpected button type');
    }
  }
};

export default Button;
