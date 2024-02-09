import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, actions) => {
      state.isLoading = false;
      state.page = actions.payload.page;
      state.pokemons = actions.payload.pokemons;
    },
  },
});

export const { loading, setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
