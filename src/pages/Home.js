import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext";

import Button from "../components/Button";

const Home = () => {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState(1);
  const {isLogged} = useContext(UserContext)

  function handleClick() {
    const min = 1;
    const max = 151;

    let randomId = Math.floor(Math.random() * (max - min + 1) - min)
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, [id]);

  if (!pokemon) {
    return <h2>There is not a pokémon here!!</h2>;
  }

  console.log(isLogged)

  return (
    <>
      {isLogged === true ?
        <div>
          <div className="flex flex-card">
            <div className="card border">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              <h2>{pokemon.name}</h2>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              <p>Types: </p>
              <ul>
                {pokemon.types.map((type) => (
                  <li
                    key={type.type.name}
                    className={`
                        ${type.type.name === "normal" && "normal"}
                        ${type.type.name === "fire" && "fire"}
                        ${type.type.name === "fighting" && "fighting"}
                        ${type.type.name === "water" && "water"}
                        ${type.type.name === "flying" && "flying"}
                        ${type.type.name === "grass" && "grass"}
                        ${type.type.name === "poison" && "poison"}
                        ${type.type.name === "electric" && "electric"}
                        ${type.type.name === "ground" && "ground"}
                        ${type.type.name === "psychic" && "psychic"}
                        ${type.type.name === "rock" && "rock"}
                        ${type.type.name === "ice" && "ice"}
                        ${type.type.name === "bug" && "bug"}
                        ${type.type.name === "dragon" && "dragon"}
                        ${type.type.name === "ghost" && "ghost"}
                        ${type.type.name === "dark" && "dark"}
                        ${type.type.name === "steel" && "steel"}
                        ${type.type.name === "fairy" && "fairy"}
                      `}
                  >
                    {type.type.name}
                  </li>
                ))}
              </ul>
              <Button type="button" handleClick={handleClick}>
                Change to a random Pokémon
              </Button>
            </div>
          </div>
        </div>
        :
        <div className="flex flex-card">
          <div className="card">
            <p><Link to="/Login" className="links">Go to Login</Link></p>
            <p>to be able to see pokemons</p>
          </div>
        </div>
      }
    </>
  );
};

export default Home;
