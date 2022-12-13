import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import i18n from '../asserts/i18next';

import { fetchFilms } from '../store/filmsSlice';

const Header = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.films.fetchStatus);

  return (
    <>
      <div className="d-flex text-center justify-content-center flex-column">
        <h2 className="text-primary">{i18n.t('ui.title')}</h2>
        { status === 'loading'
      && (
      <div className="d-flex align-items-center justify-content-center">
        <span className="spinner-border text-primary mr-5" role="status" aria-hidden="true" />
        <span className="text-primary">Загрузка списка...</span>
      </div>
      ) }
      </div>
      <button className="btn btn-outline-primary" type="button" onClick={() => dispatch(fetchFilms())}>Загрузить</button>
      <select className="form-select" aria-label="Default select example">
        <option>Выберите месяц</option>
        <option value="JANUARY">Январь</option>
        <option value="FEBRUARY">Февраль</option>
        <option value="MARCH">Март</option>
        <option value="APRIL">Апрель</option>
        <option value="MAY">Май</option>
        <option value="JUNE">Июнь</option>
        <option value="JULY">Июль</option>
        <option value="AUGUST">Август</option>
        <option value="SEPTEMBER">Сентябрь</option>
        <option value="OCTOBER">Октябрь</option>
        <option value="NOVEMBER">Ноябрь</option>
        <option value="DECEMBER">Декабрь</option>
      </select>
    </>
  );
};

export default Header;
