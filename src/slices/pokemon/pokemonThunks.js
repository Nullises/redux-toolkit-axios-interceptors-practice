import { pokemonApi } from "../../api/pokemonApi";
import { loading, setPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(loading());

    // HTTP stuff...
    const { data } = await pokemonApi(`pokemon?limit=10&offset=${page * 10}`);

    dispatch(
      setPokemons({
        pokemons: data.results,
        page: page + 1,
      })
    );
  };
};
