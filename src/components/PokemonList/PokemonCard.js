import React from "react";
import { useDispatch } from "react-redux";

import { Image, Label, Grid, Icon } from "semantic-ui-react";
import { setFavorite } from "../../slices/pokemon";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";
import "./styles.css";
function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const handlerClickFav = () => {
    dispatch(setFavorite(pokemon.id));
console.log(pokemon)
  }
  const color = pokemon.favorite ? FAV_COLOR : MAIN_COLOR;
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className={"PokemonCard"}>
        <button onClick={handlerClickFav} className="PokemonCard-favorite">
        <Icon name={"favorite"} color={color} />
        </button>
      
        <Image
          centered
          src={pokemon.sprites.front_default}
          alt={"Pokemon Front"}
        />

        <p className={"PokemonCard-title"}>{pokemon.name}</p>
        {pokemon.types.map((type) => (
          <Label key={`${type.type.name}-${pokemon.id}`} color={MAIN_COLOR}>
            {type.type.name}
          </Label>
        ))}
      </div>
    </Grid.Column>
  );
}

export default PokemonCard;
