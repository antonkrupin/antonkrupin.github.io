import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import i18n from '../asserts/i18next';

import routes, { headers } from '../routes';
import {
  fetchFilms,
  clearFilmsList,
  setFilter,
} from '../store/filmsSlice';
import { selectFetchStatus, selectQueryParams } from '../store/selectors';

import MounthSelector from './select/MounthSelector';
import YearSelector from './select/YearSelector';

const Header = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectFetchStatus);

  const params = useSelector(selectQueryParams);

  const loadButtonClassName = ((!params.year || !params.month) || status === 'resolved') ? 'btn btn-outline-primary m-2 disabled' : 'btn btn-outline-primary m-2';

  const fetchFilmsHandler = () => {
    dispatch(clearFilmsList());
    const requestOptions = [routes.premiersPath(),
      {
        headers,
        params,
      }];
    dispatch(fetchFilms(requestOptions));
  };

  return (
    <>
      <div className="d-flex text-center justify-content-center flex-column">
        <h2 className="text-primary">{i18n.t('ui.title')}</h2>
      </div>
      <div className="d-flex w-50 m-auto mt-5">
        <MounthSelector />
        <YearSelector />
        <button
          onClick={fetchFilmsHandler}
          className={loadButtonClassName}
          type="button"
        >
          {i18n.t('ui.buttonLoad')}
        </button>
        <button
          onClick={() => dispatch(setFilter())}
          className={loadButtonClassName}
          type="button"
        >
          {i18n.t('ui.filterLikeFilms')}
        </button>
      </div>
      { status === 'loading'
      && (
      <div className="d-flex align-items-center justify-content-center">
        <span className="spinner-border text-primary mr-5" role="status" aria-hidden="true" />
        <span className="text-primary">{i18n.t('ui.loading')}</span>
      </div>
      ) }

      {status === null && (
      <div className="d-flex justify-content-center">{i18n.t('ui.noFilmsTitle')}</div>
      )}
    </>
  );
};

export default Header;
