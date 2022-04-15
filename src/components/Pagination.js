import React from 'react'

export default function Pagination(props) {

    const {page, totalPages, onPreviousClick, onNextClick} = props

  return (
    <div>
        <button onClick={onPreviousClick}>Voltar</button>
        <div> {page + 1} de {totalPages} </div>
        <button onClick={onNextClick}>Avançar</button>
    </div>
  )
}
