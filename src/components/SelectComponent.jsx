import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import i18n from '../asserts/i18next';

import { selectFetchStatus } from '../store/selectors';

import { setFetchStatus, setSearchParams } from '../store/filmsSlice';

const SelectComponent = (props) => {
  const dispatch = useDispatch();
  const { type } = props;
  const status = useSelector(selectFetchStatus);
  const disabled = status === 'loading';

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
    }
    default: {
      throw new Error('Unexpected typs');
    }
  }
};

export default SelectComponent;
