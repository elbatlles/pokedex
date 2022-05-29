import React from "react";
import PokemonCard from "./PokemonCard";
import { Grid } from "semantic-ui-react";

const PokemonList = ({ pokemons }) => {
  console.log(pokemons, "ggggg");
  return (
    <div className="wrapper">
      <Grid className={"PokemonList"}>
        {pokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={`pokemon-${index}`} />
        ))}
      </Grid>
    </div>
  );
};
PokemonList.defaultProps = {
  pokemons: [],
};
export default PokemonList;
