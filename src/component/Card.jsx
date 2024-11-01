import { useEffect, useState } from "react";

export default function Card({ data, addPokemon, idVal, isPokemonAdded }) {
  const [val, setVal] = useState(null);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      data &&
        data.then((value) => {
          setVal(value);
        });
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <li>
      <button
        className="card-content"
        onClick={() => {
          addPokemon(idVal);
          isPokemonAdded(idVal);
        }}
      >
        <div className="card">
          <img
            src={val && val.sprites.other["official-artwork"].front_default}
            alt={val && val.name}
          />
          <h2>{val && val.name}</h2>
        </div>
      </button>
    </li>
  );
}
