import React from 'react'
import Pagination from './Pagination'
import Pokemon from './Pokemon'

export default function Body(props) {

    const {pokemons, loading, page, totalPages, setPage} = props

    const onPreviousClick = () => {
        if(page > 0){
            setPage(page - 1)
        }
    }

    const onNextClick = () => {
        if(page + 1 !== totalPages){
            setPage(page + 1)
        }
    }

    return (
        <div>
            <Pagination page={page} totalPages={totalPages} onPreviousClick={onPreviousClick} onNextClick={onNextClick} />
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <div>
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon pokemon={pokemon} key={index}/>
                        )
                    })}
                </div>
            )}
        </div>
    )
}


