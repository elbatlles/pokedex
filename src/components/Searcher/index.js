import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Search } from "semantic-ui-react";
import { findPokemon } from "../../slices/pokemon";
import "./styles.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const onHandleSearch = (e, { value }) => {
    dispatch(findPokemon(value));
  };
  return (
    <div className="Searcher wrapper">
      <Grid>
        <Grid.Column
          widescreen={10}
          largeScreen={10}
          mobile={16}
          className="Searcher"
        >
          <Search
            aligned="right"
            input={{ fluid: true }}
            showNoResults={false}
            onSearchChange={onHandleSearch}
            placeholder="Encuentra a tu Pokemón favorito"
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}
