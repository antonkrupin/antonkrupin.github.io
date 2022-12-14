import React from 'react';

import i18n from '../asserts/i18next';
import Button from './Button';
import InfoBlock from './InfoBlock';
import SelectComponent from './SelectComponent';
import '../style/Header.css';

const Header = (props) => {
  const { status, params, filter } = props;

  return (
    <>
      <div className="d-flex bg-warning p-2 text-center justify-content-center flex-column">
        <h2 className="text-primary">{i18n.t('ui.title')}</h2>
      </div>
      <div className="filters-container m-auto mt-5">
        <div className="filters">
          <SelectComponent type="month" status={status} />
          <SelectComponent type="year" status={status} />
          <Button
            type="load"
            filter={filter}
            params={params}
          />
          <Button
            type="filter"
            filter={filter}
            params={params}
          />
        </div>
      </div>
      <InfoBlock status={status} />
    </>
  );
};

export default Header;
