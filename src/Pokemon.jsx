import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./slices/pokemon/pokemonThunks";

export default function Pokemon() {
  const dispatch = useDispatch();
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemon);

  console.log("pokemons", pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  return (
    <>
      <h1>Pokemons</h1>
      <hr />
      <ul>
        {pokemons &&
          !isLoading &&
          pokemons.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)}
      </ul>
      <button onClick={() => dispatch(getPokemons(page))}>Load more</button>
    </>
  );
}
