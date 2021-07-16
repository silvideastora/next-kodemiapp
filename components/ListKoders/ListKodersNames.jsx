
import React, { useState } from 'react'
import ListKoders from './ListKoders'

export default function ListKodersNames({koders}) {
  const [ checked, setChecked ] = useState(false)
  return (
    <div>
      <ul>
        {
          koders.map(({ firstName, lastName, isActive, _id }, index) => (
            <ListKoders firstName={firstName} lastName={lastName} isActive={isActive} id={_id} key={index}/>
          ))
        }
      </ul>
    </div>
  )
}
