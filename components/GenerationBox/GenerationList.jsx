import React from 'react'

function GenerationList({generation, setSelectedGeneration}) {

  const handleOnClick = (number) => {
    console.log('Seleccionaste la generacion', number)
    setSelectedGeneration(number)
  } 
  return (
    <div>
      <ul>
        {
          generation.map(({generationNumber, bootCamp}, index ) => (
            <li key={index} onClick={() => setSelectedGeneration(generationNumber)}>
              {`Generacion ${generationNumber} ${bootCamp}`}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default GenerationList
