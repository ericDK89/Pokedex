import React, { useState } from 'react'
import { searchPokemon } from '../api'

export default function Navbar(props) {

    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState('')

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
      }

  return (
    <div>
        <nav>
            <h1>Pokédex</h1>
            <input value={search} onChange={handleSearch} placeholder='Buscar pokémon'/>
            <button type='submit' onClick={handleSubmit}>Buscar</button>
        </nav>
        {pokemon ? (
            <div>
                <p>Nº{pokemon.id}</p>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <p>{pokemon.types[0].type.name}</p>
            </div>
        ) : null}
    </div>
  )
}
