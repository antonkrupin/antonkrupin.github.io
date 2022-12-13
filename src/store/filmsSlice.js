import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFilms = createAsyncThunk(
  'films/fetchFilms',
  async (requestOptions, { rejectWithValue }) => {
    try {
      const response = await axios.get(requestOptions[0], requestOptions[1]);
      return response.data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    films: [],
    fetchStatus: null,
    error: null,
    params: {
      year: null,
      month: null,
    },
    filter: false,
  },
  reducers: {
    deleteFilm: (state, action) => {
      state.films.forEach((film, ind) => {
        if (film.kinopoiskId === action.payload) {
          state.films.splice(ind, 1);
        }
      });
    },
    likeFilm: (state, action) => {
      state.films.forEach((film) => {
        if (film.kinopoiskId === action.payload) {
          film.like = !film.like;
        }
      });
    },
    setSearchParams: (state, action) => {
      const { paramName, value } = action.payload;
      state.params[paramName] = value;
    },
    clearFilmsList: (state) => {
      state.films = [];
    },
    setFilter: (state) => {
      state.filter = !state.filter;
    },
  },
  extraReducers: {
    [fetchFilms.pending]: (state) => {
      state.fetchStatus = 'loading';
      state.error = null;
    },
    [fetchFilms.fulfilled]: (state, action) => {
      state.fetchStatus = 'resolved';
      state.films = action.payload;
    },
    [fetchFilms.rejected]: (state, action) => {
      state.fetchStatus = 'rejected';
      state.error = action.payload;
    },
  },
});

export const {
  likeFilm,
  deleteFilm,
  setSearchParams,
  clearFilmsList,
  setFilter,
} = filmsSlice.actions;

export default filmsSlice.reducer;
