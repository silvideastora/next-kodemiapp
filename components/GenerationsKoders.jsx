import React, { useEffect } from 'react'
import {getGenerationByStatus} from '../lib/api'

const GenerationsKoders = () => {

  useEffect( async () => {
    const response = await getGenerationByStatus()
    console.log(response)
  }, [])

  return (
    <>

      
    </>
  )
}

export default GenerationsKoders