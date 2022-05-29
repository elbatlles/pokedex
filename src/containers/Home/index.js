import React, { useEffect } from "react";
import Searcher from "../../components/Searcher";
import "./styles.css";
import PokemonList from "../../components/PokemonList";

import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../slices/pokemon";
function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.pokemon.list);
  const loading = useSelector((state) => state.ui.loading);
  console.log(loading);
  console.log(list);
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);
  return (
    <div className="Home">
      <Searcher />

      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
