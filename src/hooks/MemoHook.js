import React, { useState, useMemo } from 'react'

const MemoHook = () => {
    const [counter, setCounter] = useState(10)
    const increment = () => {
        setCounter( counter +1)
    }
    const [show, setshow] = useState(true)

    const procesoPesado = (iteraciones) => {
        for( let i = 0; i < iteraciones; i++) {
            console.log('Proceso pesado');
        }
        return `${iteraciones} iteraciones realizadas`
    }
   const memoProcesoPesado =  useMemo(() => procesoPesado(counter), [counter])
    return (
        <div>
            <h3> counter:<small>{counter}</small></h3>
             <p>{memoProcesoPesado}</p>
            <button onClick={increment}>Incrementar +1</button>
            <button onClick={()=> setshow(!show)}>show/hide  {JSON.stringify(show)}</button>
        </div>
    )
}

export default MemoHook
