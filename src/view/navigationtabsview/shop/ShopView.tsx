import { useState, useEffect } from 'react'
import Axios, { AxiosResponse } from 'axios'




export const ShopView = () => {
    const [starwarsData, setStarwarsData] = useState<AxiosResponse>()

    const getDataFromStarWarsAPI = () => {
        Axios.get('https://swapi.dev/api/people/1/')
        .then(response => console.log(response)) 
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getDataFromStarWarsAPI()
    }, [])
    

    return (
        <div>
            <h1>This is the shop</h1>
            <button onClick={() => console.log(starwarsData)}>API call</button>
        </div>
    )
}
