import Card from "./Card";
import { HighScore, CurrentScore } from "./scores";
import getShuffledItems from "../shuffle";
import { useState } from "react";

export default function Cards({ data }) {
  const datas = data.slice();
  const items = getShuffledItems(datas);
  const [pokemon, setPokemon] = useState(() => new Set());
  const [highScore, setHighScore] = useState(0);

  const addPokemon = (value) => {
    setPokemon((item) => {
      const poke = new Set(item).add(value);
      return poke;
    });
  };

  const clearPokemon = () => {
    setPokemon((item) => {
      const poke = new Set(item);
      poke.clear();
      return poke;
    });
  };

  const setHighScoreHandler = (prev, curr) => {
    if (prev > curr) {
      return setHighScore(prev);
    }
    return setHighScore(curr);
  };

  const isPokemonAdded = (value) => {
    const isAdded = pokemon.has(value);
    if (isAdded) {
      setHighScoreHandler(highScore, pokemon.size);
      clearPokemon();
    }
  };
  const currentScore = pokemon.size;

  return (
    <>
      <div className="scoreboard">
        <div className="scores">
          <HighScore score={highScore}></HighScore>
          <CurrentScore score={currentScore}></CurrentScore>
        </div>
      </div>
      <div className="cards">
        <ul className="card-list">
          {items &&
            items.map((value) => {
              return (
                <Card
                  data={value.at(0)}
                  key={value.at(1)}
                  idVal={value.at(1)}
                  pokemon={pokemon}
                  addPokemon={addPokemon}
                  isPokemonAdded={isPokemonAdded}
                ></Card>
              );
            })}
        </ul>
      </div>
    </>
  );
}
