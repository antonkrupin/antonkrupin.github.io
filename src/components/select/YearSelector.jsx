import React from 'react';

import { useDispatch } from 'react-redux';

import i18n from '../../asserts/i18next';

import { setSearchParams, setFetchStatus } from '../../store/filmsSlice';

const YearSelector = () => {
  const dispatch = useDispatch();

  const selectHandler = (e) => {
    dispatch(setFetchStatus());
    dispatch(setSearchParams({ paramName: 'year', value: e.target.value }));
  };

  return (
    <select
      onChange={(e) => selectHandler(e)}
      className="form-select m-2"
      aria-label={i18n.t('yearSelector.ariaLabel')}
    >
      <option>{i18n.t('yearSelector.default')}</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
    </select>
  );
};

export default YearSelector;
