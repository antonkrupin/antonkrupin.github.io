import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

export const fetchFilms = createAsyncThunk(
  'films/fetchFilms',
  async(_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2021&month=FEBRUARY', { headers: {
        'X-API-KEY': '72c61891-4272-4d36-8bc2-94c6a4d5a01e',
        'Content-Type': 'application/json',
    }});
    return response.data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    films: [],
    fetchStatus: null,
    error: null,
  },
  reducers: {
    deleteFilm: (state, action) => {
      let index;
      state.films.forEach((film, ind) => {
        if (film.kinopoiskId === action.payload) {
          index = ind;
        }
      });
      state.films.splice(index, 1);
    },
    likeFilm: (state, action) => {
      state.films.forEach((film, ind) => {
        if (film.kinopoiskId === action.payload) {
          film['like'] = !film['like'];
        }
      });
    }
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
    }
  }
});

export const {
  likeFilm,
  deleteFilm,
} = filmsSlice.actions;

export default filmsSlice.reducer;

/*

fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
    method: 'GET',
    headers: {
        'X-API-KEY': '72c61891-4272-4d36-8bc2-94c6a4d5a01e',
        'Content-Type': 'application/json',
    },
})

*/

