import PokemonAPIService from "../../../shared/api/service/PokemonAPIService"
import { useState, useEffect } from 'react'
import { AxiosResponse } from "axios"

export const BrandsView = () => {
    const [pokemon, setPokemon] = useState<any>([])

    const fetchData = async () => {
        const { data } = await PokemonAPIService.getAllPokemon() 
        setPokemon(data)
    }

    useEffect(() => {
        fetchData()
    })

    const displayData = () => {
        return <div>
            {pokemon.results?.map((x: any) =>
                <div key={x.name}>
                    <h1>{x.name}</h1>
                </div>
            )}
        </div>
    }

    return (
        <div>
            {displayData()}
        </div>
    )
}
