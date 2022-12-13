import { createSelector } from '@reduxjs/toolkit';

export const selectAllFilms = (state) => state.films.films;
export const selectActiveFilter = (state) => state.films.filter;
export const selectFetchStatus = (state) => state.films.fetchStatus;
export const selectQueryParams = (state) => state.films.params;

export const selectFilmsByFilter = createSelector(
  [selectAllFilms, selectActiveFilter],
  (allFilms, activeFilter) => {
    if (activeFilter) {
      return allFilms.filter((film) => film.like);
    }
    return allFilms;
  },
);
