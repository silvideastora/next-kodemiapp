
import React, { useEffect, useState } from 'react'
import { getGenerationByStatus, getKodersByGeneration } from '../../lib/api'
import ListKodersNames from '../ListKoders/ListKodersNames'
import GenerationList from './GenerationList'
import classNames from 'classnames'

const GenerationsKoders = () => {

  const [ kodersData, setKodersData ] = useState([])
  const [ generationData, setGenerationData ] = useState([])
  const [ selectedGeneration, setSelectedGeneration ] = useState(10)

  useEffect( async () => {
    const generation = await getGenerationByStatus()
    const koders = await getKodersByGeneration(selectedGeneration)
    setKodersData(koders.data)
    console.log(koders.data)
    setGenerationData(generation.data)
    console.log('selectedGeneration es:', selectedGeneration)
    window.localStorage.setItem('numberGeneration', selectedGeneration)
  }, [selectedGeneration])

  const handleOnClick = (number) => {
    console.log(number)
    setSelectedGeneration(number)
    console.log(selectedGeneration)
  }

  return (
    <>
    <div className={classNames(
      'grid grid-cols-3',
      'lg:gap-4 sm:gap-1',
      'xs:grid-cols-1',
      'mt-6'
    )}>
      <div>
        <h3>Generaciones</h3>
        <div className={classNames(
          'bg-black-ka',
          'border border-white-ka',
          'mb-0.5',
          'p-2',
          'shadow-xl rounded-lg',
          'text-white',
          'font-semibold',
          'h-full'
        )}>
          <div className={classNames(
            'p-2'
          )}>
            <div>
              <ul>
                {
                  generationData.map(({generationNumber, bootCamp}, index ) => (
                    <li key={index} onClick={() => handleOnClick(generationNumber)}>
                      {`Generacion ${generationNumber} ${bootCamp}`}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        <h3>Koders</h3>

        <div className={classNames(
          'bg-black-ka',
          'border border-white-ka',
          'min-h-full',
          'py-2 px-5',
          'rounded-lg',
          'text-white-ka',
          'text-medium'

        )} >
          <div>
            <ul className={classNames(
              'grid',
              'mt-2'
            )}>
              <ListKodersNames koders={kodersData}/>        
            </ul>
          </div>
        </div>
      </div>
    </div>
      

      
      
      
    </>
  )
}

export default GenerationsKoders