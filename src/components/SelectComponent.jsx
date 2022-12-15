import React from 'react';
import { useDispatch } from 'react-redux';

import i18n from '../asserts/i18next';

import { setFetchStatus, setSearchParams, setTopCoord } from '../store/filmsSlice';

import locale from '../locales/ru';

export const YearSelector = (props) => {
  const dispatch = useDispatch();

  const { status } = props;

  const disabled = status === 'loading';

  const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];

  const selectHandler = (e) => {
    dispatch(setFetchStatus('changeFilters'));
    dispatch(setSearchParams({ paramName: 'year', value: e.target.value }));
    dispatch(setTopCoord(window.pageYOffset));
  };

  return (
    <select
      disabled={disabled}
      onChange={(e) => selectHandler(e)}
      className="form-select m-2"
      aria-label={i18n.t('yearSelector.ariaLabel')}
    >
      <option>{i18n.t('yearSelector.default')}</option>
      {years.map((year) => (
        <option
          key={year}
          value={year.toString()}
        >
          {year}
        </option>
      ))}
    </select>
  );
};

export const MonthSelector = (props) => {
  const dispatch = useDispatch();

  const { status } = props;

  const disabled = status === 'loading';

  const { month } = locale.translation.monthSelector;

  const selectHandler = (e) => {
    dispatch(setFetchStatus('changeFilters'));
    dispatch(setSearchParams({ paramName: 'month', value: e.target.value }));
    dispatch(setTopCoord(window.pageYOffset));
  };

  return (
    <select
      disabled={disabled}
      onChange={(e) => selectHandler(e)}
      className="form-select m-2"
      aria-label={i18n.t('monthSelector.ariaLabel')}
    >
      <option>{i18n.t('monthSelector.default')}</option>
      {Object.keys(month).map((key) => (
        <option
          key={key}
          value={key.toUpperCase()}
        >
          {month[key]}
        </option>
      ))}
    </select>
  );
};

/* const SelectComponent = (props) => {
  const dispatch = useDispatch();

  const { type, status } = props;

  const disabled = status === 'loading';

  const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];

  const { month } = locale.translation.monthSelector;

  const selectHandler = (e) => {
    dispatch(setFetchStatus('changeFilters'));
    dispatch(setSearchParams({ paramName: type, value: e.target.value }));
  };

  switch (type) {
    case 'year': {
      return (
        <select
          disabled={disabled}
          onChange={(e) => selectHandler(e)}
          className="form-select m-2"
          aria-label={i18n.t('yearSelector.ariaLabel')}
        >
          <option>{i18n.t('yearSelector.default')}</option>
          {years.map((year) => (
            <option
              key={year}
              value={year.toString()}
            >
              {year}
            </option>
          ))}
        </select>
      );
    }
    case 'month': {
      return (
        <select
          disabled={disabled}
          onChange={(e) => selectHandler(e)}
          className="form-select m-2"
          aria-label={i18n.t('monthSelector.ariaLabel')}
        >
          <option>{i18n.t('monthSelector.default')}</option>
          {Object.keys(month).map((key) => (
            <option
              key={key}
              value={key.toUpperCase()}
            >
              {month[key]}
            </option>
          ))}
        </select>
      );
    }
    default: {
      throw new Error('Unexpected typs');
    }
  }
};

export default SelectComponent; */
