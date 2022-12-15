import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import PremiersList from './components/PremiersList';

import { selectFetchStatus, selectQueryParams, selectActiveFilter } from './store/selectors';

const App = () => {
  const status = useSelector(selectFetchStatus);

  const params = useSelector(selectQueryParams);

  const filter = useSelector(selectActiveFilter);
  return (
    <>
      <Header status={status} params={params} filter={filter} />
      <PremiersList />
    </>
  );
};

export default App;
