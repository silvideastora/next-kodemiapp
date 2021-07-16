import React, { useEffect, useState } from 'react'
import { getGenerationByStatus, getKodersByGeneration } from '../lib/api'
import ListKodersNames from '../components/ListKoders/ListKodersNames'
import GenerationList from './GenerationList'

const GenerationsKoders = () => {

  const [ kodersData, setKodersData ] = useState([])
  const [ generationData, setGenerationData ] = useState([])
  const [ selectedGeneration, setSelectedGeneration ] = useState(10)

  useEffect( async () => {
    const generation = await getGenerationByStatus()
    const koders = await getKodersByGeneration(selectedGeneration)
    setKodersData(koders.data)
    setGenerationData(generation.data)
    console.log('selectedGeneration es:', selectedGeneration)
  }, [])

  return (
    <>
      <GenerationList generation={generationData} setSelectedGeneration={setSelectedGeneration}/>
      <ListKodersNames koders={kodersData}/>
      
    </>
  )
}

export default GenerationsKoders