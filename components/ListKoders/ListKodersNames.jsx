import React, { useState } from 'react'
import ListKoders from './ListKoders'

export default function ListKodersNames({koders}) {
  console.log(koders)
  const [ checked, setChecked ] = useState(false)
  return (
    <div>
      <ul className='p-6'>
        {
          koders.map(({ firstName, lastName }, index) => (
            <ListKoders firstName={firstName} lastName={lastName} key={index}/>
          ))
        }
      </ul>
    </div>
  )
}