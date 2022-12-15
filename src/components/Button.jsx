import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

import { selectQueryParams, selectActiveFilter } from '../store/selectors';

const Button = (props) => {
  const dispatch = useDispatch();

  const { type } = props;

  const params = useSelector(selectQueryParams);

  const filter = useSelector(selectActiveFilter);

  const loadFilmsHandler = () => {
    dispatch(clearFilmsList());
    const requestOptions = [routes.premiersPath(),
      {
        headers,
        params,
      }];
    dispatch(fetchFilms(requestOptions));
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
          {filter ? i18n.t('ui.filterAllFilms') : i18n.t('ui.filterLikeFilms')}
        </button>
      );
    }
    default: {
      throw new Error('Unexpected button type');
    }
  }
};

export default Button;
