import React from 'react';

import { useDispatch } from 'react-redux';

import i18n from '../../asserts/i18next';

import { setSearchParams, setFetchStatus } from '../../store/filmsSlice';

const monthSelector = () => {
  const dispatch = useDispatch();

  const selectHandler = (e) => {
    dispatch(setFetchStatus());
    dispatch(setSearchParams({ paramName: 'month', value: e.target.value }));
  };

  return (
    <select
      onChange={(e) => selectHandler(e)}
      className="form-select m-2"
      aria-label={i18n.t('monthSelector.ariaLabel')}
    >
      <option>{i18n.t('monthSelector.default')}</option>
      <option value="JANUARY">{i18n.t('monthSelector.month.january')}</option>
      <option value="FEBRUARY">{i18n.t('monthSelector.month.february')}</option>
      <option value="MARCH">{i18n.t('monthSelector.month.march')}</option>
      <option value="APRIL">{i18n.t('monthSelector.month.april')}</option>
      <option value="MAY">{i18n.t('monthSelector.month.may')}</option>
      <option value="JUNE">{i18n.t('monthSelector.month.june')}</option>
      <option value="JULY">{i18n.t('monthSelector.month.july')}</option>
      <option value="AUGUST">{i18n.t('monthSelector.month.august')}</option>
      <option value="SEPTEMBER">{i18n.t('monthSelector.month.september')}</option>
      <option value="OCTOBER">{i18n.t('monthSelector.month.october')}</option>
      <option value="NOVEMBER">{i18n.t('monthSelector.month.november')}</option>
      <option value="DECEMBER">{i18n.t('monthSelector.month.december')}</option>
    </select>
  );
};

export default monthSelector;
