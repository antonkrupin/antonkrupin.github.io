import { useSelector } from 'react-redux';
import { selectFetchStatus, selectQueryParams } from '../store/selectors';

export const loadButtonClassName = () => {
  const { year, month } = useSelector(selectQueryParams);

  const status = useSelector(selectFetchStatus);

  const check = ((!year || !month) || (status === 'resolved' || status === 'loading'));

  return check ? 'btn btn-outline-primary m-2 disabled' : 'btn btn-outline-primary m-2';
};

export const filterButtonClassName = () => {
  const status = useSelector(selectFetchStatus);
  return status !== 'resolved' ? 'btn btn-outline-primary m-2 disabled' : 'btn btn-outline-primary m-2';
};
