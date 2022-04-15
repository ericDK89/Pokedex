import { useEffect, useState } from 'react';
import {getPokemon, getPokemonData} from './api'
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const itensPerPage = 25
  
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemon(itensPerPage, itensPerPage * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const result = await Promise.all(promises)
      setPokemons(result)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / 25))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [page])

  return (
    <div className="App">
      <Navbar/>
      <Body pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage}/>
    </div>
  );
}

export default App
