import React, { useEffect } from 'react'

const Api = () => {
    useEffect(() => {
     fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
     .then(resp => resp.json())
     .then(data=> data.results.forEach(pokemon=> fetch(pokemon.url)
     .then(resp => resp.json())
     .then(data=> console.log(data))))
       
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Api
