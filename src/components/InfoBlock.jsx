import React from 'react';
import { useSelector } from 'react-redux';

import i18n from '../asserts/i18next';
import { selectFetchStatus } from '../store/selectors';

const InfoBlock = () => {
  const status = useSelector(selectFetchStatus);

  switch (status) {
    case 'loading': {
      return (
        <div className="d-flex align-items-center justify-content-center">
          <span className="spinner-border text-primary mr-5" role="status" aria-hidden="true" />
          <span className="text-primary">{i18n.t('ui.loading')}</span>
        </div>
      );
    }
    case null: {
      return (
        <div className="d-flex justify-content-center">
          <h4 className="text-info">{i18n.t('ui.noFilmsTitle')}</h4>
        </div>
      );
    }
    default: {
      return (
        <div />
      );
    }
  }
};

export default InfoBlock;
