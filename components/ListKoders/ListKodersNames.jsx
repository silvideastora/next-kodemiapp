import React, { useState } from 'react'
import koders from '../../config/koders.json'
import classNames from 'classnames'
import ListKoders from './ListKoders'

export default function ListKodersNames({firstName, lastName}) {

  const [ checked, setChecked ] = useState(false)
  console.log(checked)
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