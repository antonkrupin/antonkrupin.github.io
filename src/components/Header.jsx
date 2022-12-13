import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import i18n from '../asserts/i18next';

import MounthSelector from './selectors/MounthSelector';
import YearSelector from './selectors/YearSelector';

import routes, { headers } from '../routes';
import { fetchFilms, clearFilmsList } from '../store/filmsSlice';

const Header = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.films.fetchStatus);

  const params = useSelector((state) => state.films.params);

  const fetchFilmsHandler = () => {
    const { year, month } = params;
    if (!year || !month) {
      console.log('bad');
    } else {
      dispatch(clearFilmsList());
      const requestOptions = [routes.premiersPath(),
        {
          headers,
          params,
        }];
      dispatch(fetchFilms(requestOptions));
    }
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
          className="btn btn-outline-primary m-2"
          type="button"
        >
          {i18n.t('ui.buttonLoad')}
        </button>
      </div>
      { status === 'loading'
      && (
      <div className="d-flex align-items-center justify-content-center">
        <span className="spinner-border text-primary mr-5" role="status" aria-hidden="true" />
        <span className="text-primary">{i18n.t('ui.loading')}</span>
      </div>
      ) }
    </>
  );
};

export default Header;
