import PokemonAPIService from "../../../shared/api/service/PokemonAPIService"
import { useState, useEffect } from 'react'
import { useDebounce } from '../../../hooks/useDebounce'

export const NewsView = () => {
    const [pokemonData, setPokemonData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [search, setSearch] = useState<string>('')
    const debouncedSearchedTerm = useDebounce(search, 3000)

    const fetchData = async () => {
        setLoading(true)
        const {data} = await PokemonAPIService.searchPokemon(search)
        setPokemonData(data)
        setLoading(false)
    }

    const displayData = () => {
        if (!loading) {
            return <div>
                    <img src={pokemonData?.sprites?.front_default} alt={''} />
                    <h1>Name: {pokemonData.name} </h1>
                    <h1>Height: {pokemonData.height} cm</h1>
                    <h1>Weight: {pokemonData.weight} kg</h1>
                    {/*<h1>Type: {pokemonData?.types[0]?.slot}</h1>*/}
                </div>
        } else {
            <h1> Fetching data!</h1>    
        }
    }

    useEffect(() => {
        fetchData()
    }, [debouncedSearchedTerm])

    return (
        <div>
            <input placeholder='What pokemon?' onChange={event => setSearch(event.target.value)}/>
            {displayData()}
        </div>
    )
}
