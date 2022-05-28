import React, { useEffect } from "react";
import Searcher from "../../components/Searcher";
import "./styles.css";
import PokemonList from "../../components/PokemonList";
import Loader from "../../components/Loader";
import { fetchPokemons,toggleLoader, getPokemonWithDetails } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  //const list = useSelector((state) => state.list);
  const list = useSelector((state) => state.get('list')).toJS();
  //const loading = useSelector((state) => state.loading);
  const loading = useSelector((state) => state.get('loading'));
  console.log(loading)
  console.log(list);
  useEffect(() => {
   // dispatch(getPokemonWithDetails());
   //dispatch(toggleLoader());
   dispatch(getPokemonWithDetails());
   //dispatch(toggleLoader());
  }, [dispatch]);
  return (
    <div className="Home">
      
      <Searcher />
   
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
