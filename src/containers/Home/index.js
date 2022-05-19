import React, { useEffect } from "react";
import Searcher from "../../components/Searcher";
import "./styles.css";
import PokemonList from "../../components/PokemonList";

import { fetchPokemons, getPokemonWithDetails } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  console.log(list);
  useEffect(() => {
   // dispatch(getPokemonWithDetails());
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
