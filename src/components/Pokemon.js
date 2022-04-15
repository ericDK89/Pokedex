import React from 'react'

export default function Pokemon(props) {

    const {pokemon} = props

  return (
    <div>
        <ul type='none'>
            <li>Nº{pokemon.id}</li>
            <li>{pokemon.name}</li>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            {pokemon.types.map((type, index) => {
                return (
                    <li key={index}> {type.type.name} </li>
                )
            })}
        </ul>
    </div>
  )
}
