import React from 'react';

import { useDispatch } from 'react-redux';

import i18n from '../../asserts/i18next';

import { setSearchParams, setFetchStatus } from '../../store/filmsSlice';

const MounthSelector = () => {
  const dispatch = useDispatch();

  const selectHandler = (e) => {
    dispatch(setFetchStatus());
    dispatch(setSearchParams({ paramName: 'month', value: e.target.value }));
  };

  return (
    <select
      onChange={(e) => selectHandler(e)}
      className="form-select m-2"
      aria-label={i18n.t('mounthSelector.ariaLabel')}
    >
      <option>{i18n.t('mounthSelector.default')}</option>
      <option value="JANUARY">{i18n.t('mounthSelector.mounth.january')}</option>
      <option value="FEBRUARY">{i18n.t('mounthSelector.mounth.february')}</option>
      <option value="MARCH">{i18n.t('mounthSelector.mounth.march')}</option>
      <option value="APRIL">{i18n.t('mounthSelector.mounth.april')}</option>
      <option value="MAY">{i18n.t('mounthSelector.mounth.may')}</option>
      <option value="JUNE">{i18n.t('mounthSelector.mounth.june')}</option>
      <option value="JULY">{i18n.t('mounthSelector.mounth.july')}</option>
      <option value="AUGUST">{i18n.t('mounthSelector.mounth.august')}</option>
      <option value="SEPTEMBER">{i18n.t('mounthSelector.mounth.september')}</option>
      <option value="OCTOBER">{i18n.t('mounthSelector.mounth.october')}</option>
      <option value="NOVEMBER">{i18n.t('mounthSelector.mounth.november')}</option>
      <option value="DECEMBER">{i18n.t('mounthSelector.mounth.december')}</option>
    </select>
  );
};

export default MounthSelector;
