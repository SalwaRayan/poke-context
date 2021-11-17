import { useEffect, useState } from "react"

const Home = () => {
  const [pokemon, setPokemon] = useState(null)
  const [id, setId] = useState(1)

  function handleClick() {
    const min = 1
    const max = 151 

    let randomId = Math.floor(Math.random() * (max - min + 1) - min) 
    setId(randomId)
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(res => 
        setPokemon(res)
        )
  }, [id])
  
  return (
    <>
      <div>
        <h1>Home</h1>

        {pokemon === null ?
          <h2>There is not a pokémon here!!</h2>
          :
          <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Types: </p>
            <ul>
              {pokemon.types.map(type => (
                <li>{type.type.name}</li>
              ))}
            </ul>
            <button onClick={handleClick}>Change to a random Pokémon</button>
          </div>
        }
      </div>
    </>
  )
}

export default Home